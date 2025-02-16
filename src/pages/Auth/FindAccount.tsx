import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '@/styles/pages/Auth/FindAccount.style';
import logo from '@/assets/images/logo.png';
import { Footer } from '@/components/Footer';
import { validateEmail, validatePhone } from '@/utils/validations/findAccountValidation';
import type { AxiosError } from 'axios';
import type { ErrorResponse } from '@/api/types';
import { useFindEmail } from '@/hooks/useAuth';
import { generateVerificationCode, verifyCode } from '@/api/services/authService';

export default function FindAccount() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'id' | 'password'>('id');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone1, setPhone1] = useState<string>('');
  const [phone2, setPhone2] = useState<string>('');
  const [phone3, setPhone3] = useState<string>('');
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState<number>(180);
  const [isPhoneVerifying, setIsPhoneVerifying] = useState<boolean>(false);
  const [isVerificationNumberValid, setIsVerificationNumberValid] = useState<boolean>(false);
  const [isVerificationNumberChecked, setIsVerificationNumberChecked] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const findEmailMutation = useFindEmail();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPhoneVerifying && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPhoneVerifying, timeLeft]);

  const handleTabChange = (tab: 'id' | 'password') => {
    setActiveTab(tab);
    setError('');
    // Reset fields
    setName('');
    setEmail('');
    setPhone1('');
    setPhone2('');
    setPhone3('');
    setVerificationCode('');
    setIsPhoneVerifying(false);
    setIsVerificationNumberValid(false);
    setIsVerificationNumberChecked(false);
    setTimeLeft(180);
  };

  const handlePhoneVerification = async () => {
    // 전화번호 검증
    const phoneResult = validatePhone(phone1, phone2, phone3);
    if (!phoneResult.isValid) {
      setError(phoneResult.message || '휴대폰 번호를 확인해주세요.');
      return;
    }

    // 탭별 필수 필드 검증
    if (activeTab === 'id' && !name.trim()) {
      setError('이름을 입력해주세요.');
      return;
    }

    if (activeTab === 'password') {
      const emailValidation = validateEmail(email);
      if (!emailValidation.isValid) {
        setError(emailValidation.message || '이메일을 확인해주세요.');
        return;
      }
    }

    try {
      setIsLoading(true);
      const phoneNumber = `${phone1}${phone2}${phone3}`;
      const response = await generateVerificationCode(phoneNumber);

      if (response.isSuccess) {
        setIsPhoneVerifying(true);
        setTimeLeft(180);
        setError('');
      } else {
        setError(response.message || '인증번호 발송에 실패했습니다.');
      }
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      setError(axiosError.response?.data?.message || '인증번호 발송에 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerificationConfirm = async () => {
    if (!verificationCode) {
      setError('인증번호를 입력해주세요.');
      return;
    }

    try {
      setIsLoading(true);
      const phoneNumber = `${phone1}${phone2}${phone3}`;
      const response = await verifyCode(phoneNumber, verificationCode);

      if (response.isSuccess) {
        setIsVerificationNumberValid(true);
        setIsVerificationNumberChecked(true);
        setError('');
      } else {
        setIsVerificationNumberValid(false);
        setIsVerificationNumberChecked(true);
        setError(response.message || '인증번호가 일치하지 않습니다.');
      }
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      setIsVerificationNumberValid(false);
      setIsVerificationNumberChecked(true);
      setError(axiosError.response?.data?.message || '인증번호 확인에 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendVerification = async () => {
    try {
      setIsLoading(true);
      const phoneNumber = `${phone1}${phone2}${phone3}`;
      const response = await generateVerificationCode(phoneNumber);

      if (response.isSuccess) {
        setTimeLeft(180);
        setIsPhoneVerifying(true);
        setError('');
      } else {
        setError(response.message || '인증번호 재발송에 실패했습니다.');
      }
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      setError(axiosError.response?.data?.message || '인증번호 재발송에 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const handleFindAccount = async () => {
    if (!isVerificationNumberValid) {
      setError('휴대폰 인증이 필요합니다.');
      return;
    }

    try {
      setIsLoading(true);
      const phoneNumber = `${phone1}${phone2}${phone3}`;

      if (activeTab === 'id') {
        // 아이디 찾기 로직
        const response = await findEmailMutation.mutateAsync(phoneNumber);
        if (response.isSuccess) {
          navigate('/find-account/id-complete', {
            state: { email: response.result },
          });
        } else {
          setError(response.message || '아이디 찾기에 실패했습니다.');
        }
      } else {
        // 비밀번호 찾기 로직
        if (!email) {
          setError('이메일을 입력해주세요.');
          return;
        }
        navigate('/find-account/password-reset', {
          state: { email },
        });
      }
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      setError(
        axiosError.response?.data?.message ||
          (activeTab === 'id' ? '아이디 찾기에 실패했습니다.' : '비밀번호 찾기에 실패했습니다.')
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.Container>
      <S.LogoWrapper>
        <S.Logo src={logo} alt="FarmON" />
      </S.LogoWrapper>
      <S.MainContent>
        <S.Wrapper>
          <S.Title>아이디/비밀번호 찾기</S.Title>
          <S.TabWrapper>
            <S.Tab active={activeTab === 'id'} onClick={() => handleTabChange('id')}>
              아이디 찾기
            </S.Tab>
            <S.Tab active={activeTab === 'password'} onClick={() => handleTabChange('password')}>
              비밀번호 찾기
            </S.Tab>
          </S.TabWrapper>

          <S.FormContainer>
            {activeTab === 'id' && (
              <S.InputGroup>
                <S.Label>이름</S.Label>
                <S.Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="이름을 입력해 주세요."
                  disabled={isLoading}
                />
              </S.InputGroup>
            )}

            {activeTab === 'password' && (
              <S.InputGroup>
                <S.Label>이메일</S.Label>
                <S.Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="이메일을 입력해 주세요."
                  disabled={isLoading}
                />
              </S.InputGroup>
            )}

            <S.InputGroup>
              <S.Label>휴대폰 번호</S.Label>
              <S.PhoneInputGroup>
                <S.PhoneInput
                  type="text"
                  maxLength={3}
                  value={phone1}
                  onChange={(e) => setPhone1(e.target.value)}
                  placeholder=""
                  disabled={isLoading}
                />
                <S.PhoneDivider>-</S.PhoneDivider>
                <S.PhoneInput
                  type="text"
                  maxLength={4}
                  value={phone2}
                  onChange={(e) => setPhone2(e.target.value)}
                  placeholder=""
                  disabled={isLoading}
                />
                <S.PhoneDivider>-</S.PhoneDivider>
                <S.PhoneInput
                  type="text"
                  maxLength={4}
                  value={phone3}
                  onChange={(e) => setPhone3(e.target.value)}
                  placeholder=""
                  disabled={isLoading}
                />
                <S.VerificationButton
                  type="button"
                  onClick={handlePhoneVerification}
                  disabled={
                    isLoading ||
                    (activeTab === 'id'
                      ? !name || !phone1 || !phone2 || !phone3
                      : !email || !phone1 || !phone2 || !phone3)
                  }
                >
                  휴대폰 본인인증
                </S.VerificationButton>
              </S.PhoneInputGroup>
            </S.InputGroup>

            {isPhoneVerifying && (
              <S.InputGroup>
                <S.Label>인증번호</S.Label>
                <S.VerificationContainer>
                  <S.VerificationControls>
                    <S.VerificationInput
                      type="text"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      placeholder=""
                      isValid={isVerificationNumberValid}
                      isChecked={isVerificationNumberChecked}
                      disabled={isLoading}
                    />
                    <S.VerificationTimeText>({formatTime(timeLeft)})</S.VerificationTimeText>
                    <S.VerificationConfirmButton
                      type="button"
                      onClick={handleVerificationConfirm}
                      disabled={isLoading || !verificationCode}
                    >
                      확인
                    </S.VerificationConfirmButton>
                    <S.ResendButton
                      type="button"
                      onClick={handleResendVerification}
                      disabled={isLoading}
                    >
                      인증번호 재전송
                    </S.ResendButton>
                  </S.VerificationControls>
                  {isVerificationNumberChecked && (
                    <S.VerificationMessage isValid={isVerificationNumberValid}>
                      {isVerificationNumberValid
                        ? '인증번호가 일치합니다.'
                        : '인증번호가 일치하지 않습니다.'}
                    </S.VerificationMessage>
                  )}
                </S.VerificationContainer>
              </S.InputGroup>
            )}

            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
          </S.FormContainer>

          <S.ConfirmButton
            onClick={handleFindAccount}
            disabled={isLoading || !isVerificationNumberValid}
          >
            확인
          </S.ConfirmButton>
        </S.Wrapper>
      </S.MainContent>
      <S.FooterWrapper>
        <Footer />
      </S.FooterWrapper>
    </S.Container>
  );
}
