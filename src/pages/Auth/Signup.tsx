import React, { useState, useEffect } from 'react';
import * as S from '@/styles/pages/Auth/Signup.style';
import logo from '@/assets/images/logo.png';
import { Footer } from '@/components/Footer';
import { Eye, EyeOff } from 'lucide-react';
import useAuthStore from '@/store/useAuthStore';
import type { SignupFormField } from '@/store/useAuthStore';
import {
  validateId,
  validatePassword,
  validatePasswordConfirm,
  validateName,
  validateBirth,
  validatePhone,
  validateForm,
  isFormValid,
} from '@/utils/validations/signupValidation';

const Signup = () => {
  const { signupForm, setSignupForm, setFormError } = useAuthStore();
  const [timeLeft, setTimeLeft] = useState<number>(180);
  const [timerActive, setTimerActive] = useState<boolean>(false);

  const validateField = (field: SignupFormField, value: string) => {
    let validationResult;

    switch (field) {
      case 'id':
        validationResult = validateId(value);
        setFormError('id', validationResult.message);
        break;

      case 'password': {
        validationResult = validatePassword(value);
        setFormError('password', validationResult.message);

        if (signupForm.passwordConfirm) {
          const confirmResult = validatePasswordConfirm(value, signupForm.passwordConfirm);
          setFormError('passwordConfirm', confirmResult.message);
        }
        break;
      }

      case 'passwordConfirm': {
        validationResult = validatePasswordConfirm(signupForm.password, value);
        setFormError('passwordConfirm', validationResult.message);
        break;
      }

      case 'name':
        validationResult = validateName(value);
        setFormError('name', validationResult.message);
        break;

      case 'birthYear':
      case 'birthMonth':
      case 'birthDay': {
        validationResult = validateBirth(
          field === 'birthYear' ? value : signupForm.birthYear,
          field === 'birthMonth' ? value : signupForm.birthMonth,
          field === 'birthDay' ? value : signupForm.birthDay
        );
        setFormError('birthYear', validationResult.message);
        break;
      }

      case 'phone1':
      case 'phone2':
      case 'phone3': {
        validationResult = validatePhone(
          field === 'phone1' ? value : signupForm.phone1,
          field === 'phone2' ? value : signupForm.phone2,
          field === 'phone3' ? value : signupForm.phone3
        );
        setFormError('phone', validationResult.message);
        break;
      }
    }
  };

  const handleInput = (field: SignupFormField) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSignupForm(field, value);
    validateField(field, value);
  };

  const handleRadioChange = (value: string) => {
    setSignupForm('gender', value as 'male' | 'female');
    setFormError('gender', undefined);
  };

  const handlePhoneVerification = () => {
    const phoneResult = validatePhone(signupForm.phone1, signupForm.phone2, signupForm.phone3);
    if (phoneResult.isValid) {
      setSignupForm('isPhoneVerifying', true);
      setTimeLeft(180);
      setTimerActive(true);
    } else {
      setFormError('phone', phoneResult.message);
    }
  };

  const handleVerificationConfirm = () => {
    const isValid = signupForm.verificationCode === '35233';
    setSignupForm('isVerificationNumberValid', isValid);
    setSignupForm('isVerificationNumberChecked', true);
    if (isValid) {
      setTimerActive(false);
    }
  };

  const handleResendVerification = () => {
    setTimeLeft(180);
    setTimerActive(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationResults = validateForm({
      id: signupForm.id,
      password: signupForm.password,
      passwordConfirm: signupForm.passwordConfirm,
      name: signupForm.name,
      birthYear: signupForm.birthYear,
      birthMonth: signupForm.birthMonth,
      birthDay: signupForm.birthDay,
      phone1: signupForm.phone1,
      phone2: signupForm.phone2,
      phone3: signupForm.phone3,
      gender: signupForm.gender,
    });

    Object.entries(validationResults).forEach(([field, result]) => {
      setFormError(field as keyof typeof signupForm.errors, result.message);
    });

    if (isFormValid(validationResults) && signupForm.isVerificationNumberValid) {
      console.log('Form submitted:', signupForm);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            setTimerActive(false);
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
  }, [timerActive, timeLeft]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <S.Container>
      <S.LogoWrapper>
        <S.Logo src={logo} alt="FarmON" />
      </S.LogoWrapper>
      <S.MainContent>
        <S.Wrapper>
          <S.Title>회원가입</S.Title>
          <S.FormContainer onSubmit={handleSubmit}>
            <S.InputGroup>
              <S.Label>
                아이디<S.Required>*</S.Required>
              </S.Label>
              <S.Input
                type="text"
                value={signupForm.id}
                onChange={handleInput('id')}
                placeholder="아이디를 입력해 주세요."
              />
              {signupForm.errors.id && <S.ErrorMessage>{signupForm.errors.id}</S.ErrorMessage>}
            </S.InputGroup>

            <S.InputGroup>
              <S.Label>
                비밀번호<S.Required>*</S.Required>
              </S.Label>
              <S.PasswordWrapper>
                <S.Input
                  type={signupForm.showPassword ? 'text' : 'password'}
                  value={signupForm.password}
                  onChange={handleInput('password')}
                  placeholder="비밀번호를 입력해 주세요. (8자리 이상)"
                />
                <S.PasswordToggle
                  onClick={() => setSignupForm('showPassword', !signupForm.showPassword)}
                >
                  {signupForm.showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </S.PasswordToggle>
              </S.PasswordWrapper>
              {signupForm.errors.password && (
                <S.ErrorMessage>{signupForm.errors.password}</S.ErrorMessage>
              )}
            </S.InputGroup>

            <S.InputGroup>
              <S.Label>
                비밀번호 확인<S.Required>*</S.Required>
              </S.Label>
              <S.PasswordWrapper>
                <S.Input
                  type={signupForm.showPasswordConfirm ? 'text' : 'password'}
                  value={signupForm.passwordConfirm}
                  onChange={handleInput('passwordConfirm')}
                  placeholder="비밀번호를 한번 더 입력해 주세요."
                />
                <S.PasswordToggle
                  onClick={() =>
                    setSignupForm('showPasswordConfirm', !signupForm.showPasswordConfirm)
                  }
                >
                  {signupForm.showPasswordConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                </S.PasswordToggle>
              </S.PasswordWrapper>
              {signupForm.errors.passwordConfirm && (
                <S.ErrorMessage>{signupForm.errors.passwordConfirm}</S.ErrorMessage>
              )}
            </S.InputGroup>

            <S.Divider />

            <S.InputGroup>
              <S.Label>
                이름<S.Required>*</S.Required>
              </S.Label>
              <S.Input
                type="text"
                value={signupForm.name}
                onChange={handleInput('name')}
                placeholder="이름을 입력해 주세요."
              />
              {signupForm.errors.name && <S.ErrorMessage>{signupForm.errors.name}</S.ErrorMessage>}
            </S.InputGroup>

            <S.InputGroup>
              <S.Label>
                생년월일<S.Required>*</S.Required>
              </S.Label>
              <S.BirthInputGroup>
                <S.BirthInput
                  type="text"
                  maxLength={4}
                  value={signupForm.birthYear}
                  onChange={handleInput('birthYear')}
                  placeholder=""
                />
                <S.BirthDivider>/</S.BirthDivider>
                <S.BirthInput
                  type="text"
                  maxLength={2}
                  value={signupForm.birthMonth}
                  onChange={handleInput('birthMonth')}
                  placeholder=""
                />
                <S.BirthDivider>/</S.BirthDivider>
                <S.BirthInput
                  type="text"
                  maxLength={2}
                  value={signupForm.birthDay}
                  onChange={handleInput('birthDay')}
                  placeholder=""
                />
              </S.BirthInputGroup>
              {signupForm.errors.birthYear && (
                <S.ErrorMessage>{signupForm.errors.birthYear}</S.ErrorMessage>
              )}
            </S.InputGroup>

            <S.InputGroup>
              <S.Label>
                성별<S.Required>*</S.Required>
              </S.Label>
              <S.GenderGroup>
                <S.RadioWrapper>
                  <S.RadioInput
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    checked={signupForm.gender === 'male'}
                    onChange={() => handleRadioChange('male')}
                  />
                  <S.RadioLabel htmlFor="male">남성</S.RadioLabel>
                </S.RadioWrapper>
                <S.RadioWrapper>
                  <S.RadioInput
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    checked={signupForm.gender === 'female'}
                    onChange={() => handleRadioChange('female')}
                  />
                  <S.RadioLabel htmlFor="female">여성</S.RadioLabel>
                </S.RadioWrapper>
                <S.GenderNotice>(이후 변경이 불가합니다.)</S.GenderNotice>
              </S.GenderGroup>
              {signupForm.errors.gender && (
                <S.ErrorMessage>{signupForm.errors.gender}</S.ErrorMessage>
              )}
            </S.InputGroup>

            <S.InputGroup>
              <S.Label>
                휴대폰 번호<S.Required>*</S.Required>
              </S.Label>
              <S.PhoneInputGroup>
                <S.PhoneInput
                  type="text"
                  maxLength={3}
                  value={signupForm.phone1}
                  onChange={handleInput('phone1')}
                  placeholder=""
                />
                <S.PhoneDivider>-</S.PhoneDivider>
                <S.PhoneInput
                  type="text"
                  maxLength={4}
                  value={signupForm.phone2}
                  onChange={handleInput('phone2')}
                  placeholder=""
                />
                <S.PhoneDivider>-</S.PhoneDivider>
                <S.PhoneInput
                  type="text"
                  maxLength={4}
                  value={signupForm.phone3}
                  onChange={handleInput('phone3')}
                  placeholder=""
                />
                <S.VerificationButton
                  type="button"
                  onClick={handlePhoneVerification}
                  disabled={!signupForm.phone1 || !signupForm.phone2 || !signupForm.phone3}
                >
                  휴대폰 본인인증
                </S.VerificationButton>
              </S.PhoneInputGroup>
              {signupForm.errors.phone && (
                <S.ErrorMessage>{signupForm.errors.phone}</S.ErrorMessage>
              )}
            </S.InputGroup>

            {signupForm.isPhoneVerifying && (
              <S.InputGroup>
                <S.Label>인증번호</S.Label>
                <S.VerificationGroup>
                  <S.VerificationControlGroup>
                    <S.VerificationInput
                      type="text"
                      value={signupForm.verificationCode}
                      onChange={handleInput('verificationCode')}
                      placeholder=""
                      isValid={signupForm.isVerificationNumberValid}
                      isChecked={signupForm.isVerificationNumberChecked}
                    />
                    <S.VerificationTimeText>({formatTime(timeLeft)})</S.VerificationTimeText>
                    <S.ConfirmButton
                      type="button"
                      onClick={handleVerificationConfirm}
                      disabled={!signupForm.verificationCode}
                    >
                      확인
                    </S.ConfirmButton>
                    <S.ResendButton type="button" onClick={handleResendVerification}>
                      인증번호 재전송
                    </S.ResendButton>
                  </S.VerificationControlGroup>
                  {signupForm.isVerificationNumberChecked && (
                    <S.VerificationMessage isValid={signupForm.isVerificationNumberValid}>
                      {signupForm.isVerificationNumberValid
                        ? '인증번호가 일치합니다.'
                        : '인증번호가 일치하지 않습니다.'}
                    </S.VerificationMessage>
                  )}
                </S.VerificationGroup>
              </S.InputGroup>
            )}

            <S.SubmitButton type="submit">가입하기</S.SubmitButton>
          </S.FormContainer>
        </S.Wrapper>
      </S.MainContent>
      <S.FooterWrapper>
        <Footer />
      </S.FooterWrapper>
    </S.Container>
  );
};

export default Signup;
