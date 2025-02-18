import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '@/styles/pages/Auth/PasswordReset.style';
import logo from '@/assets/images/logo.png';
import { Footer } from '@/components/Footer';
import { Eye, EyeOff } from 'lucide-react';
import { validatePassword, validatePasswordConfirm } from '@/utils/validations/signupValidation';
import type { AxiosError } from 'axios';
import type { ErrorResponse } from '@/api/types';

export default function PasswordReset() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const passwordValidation = validatePassword(password);
    if (!passwordValidation.isValid) {
      setError(passwordValidation.message || '비밀번호를 확인해주세요.');
      return;
    }

    const passwordConfirmValidation = validatePasswordConfirm(password, passwordConfirm);
    if (!passwordConfirmValidation.isValid) {
      setError(passwordConfirmValidation.message || '비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      // TODO: API 연동
      navigate('/find-account/password-complete');
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      setError(axiosError.response?.data?.message || '비밀번호 변경에 실패했습니다.');
    }
  };

  return (
    <S.Container>
      <S.LogoWrapper>
        <S.Logo src={logo} alt="FarmON" />
      </S.LogoWrapper>
      <S.MainContent>
        <S.Wrapper>
          <S.Title>비밀번호 재설정</S.Title>
          <S.FormContainer onSubmit={handleSubmit}>
            <S.InputGroup>
              <S.Label>새로운 비밀번호</S.Label>
              <S.PasswordWrapper>
                <S.Input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호를 다시 입력해주세요. (8자리 이상)"
                />
                <S.PasswordToggle onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </S.PasswordToggle>
              </S.PasswordWrapper>
            </S.InputGroup>

            <S.InputGroup>
              <S.Label>비밀번호 확인</S.Label>
              <S.PasswordWrapper>
                <S.Input
                  type={showPasswordConfirm ? 'text' : 'password'}
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  placeholder="비밀번호를 한번 더 입력해주세요."
                />
                <S.PasswordToggle onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}>
                  {showPasswordConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                </S.PasswordToggle>
              </S.PasswordWrapper>
            </S.InputGroup>

            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

            <S.SubmitButton type="submit">확인</S.SubmitButton>
          </S.FormContainer>
        </S.Wrapper>
      </S.MainContent>
      <S.FooterWrapper>
        <Footer />
      </S.FooterWrapper>
    </S.Container>
  );
}
