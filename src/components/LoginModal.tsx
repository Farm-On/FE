import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '@/styles/components/LoginModal.style';
import logo from '@/assets/images/logo.png';
import { useLogin } from '@/hooks/useAuth';
import { validateEmail, validatePassword } from '@/utils/validations/loginValidation';
import type { AxiosError } from 'axios';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  type?: 'default' | 'expert';
}

interface ErrorResponse {
  message: string;
  code: string;
  data?: unknown;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, type = 'default' }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const loginMutation = useLogin();

  useEffect(() => {
    if (!isOpen) {
      if (!rememberMe) {
        setEmail('');
        setPassword('');
      }
      setError('');
    }
  }, [isOpen, rememberMe]);

  if (!isOpen) return null;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);

    if (!emailValidation.isValid) {
      setError(emailValidation.message || '이메일을 입력해주세요.');
      return;
    }

    if (!passwordValidation.isValid) {
      setError(passwordValidation.message || '비밀번호를 입력해주세요.');
      return;
    }

    try {
      const response = await loginMutation.mutateAsync({ email, password });
      console.log('Login response:', response); // 로그인 응답 확인
      handleModalClose();
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      setError(axiosError.response?.data?.message || '로그인에 실패했습니다.');
    }
  };

  const handleModalClose = () => {
    if (!rememberMe) {
      setEmail('');
      setPassword('');
    }
    setError('');
    onClose();
  };

  const handleSignupClick = () => {
    handleModalClose();
    navigate('/agreement');
  };

  const handleFindAccountClick = () => {
    handleModalClose();
    navigate('/find-account');
  };

  return (
    <>
      <S.ModalOverlay onClick={handleModalClose} />
      <S.ModalContainer>
        <S.CloseButton onClick={handleModalClose} />
        <S.LogoImage src={logo} alt="FarmON Logo" />

        {type === 'expert' && (
          <S.ExpertText>전문가로 가입하기 위해선 농업인 로그인이 필요해요</S.ExpertText>
        )}

        <S.FormContainer>
          <form onSubmit={handleLogin}>
            <S.InputWrapper>
              <S.Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일을 입력해 주세요."
                isError={!!error}
                disabled={loginMutation.isPending}
              />
            </S.InputWrapper>

            <S.InputWrapper>
              <S.Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력해 주세요."
                isError={!!error}
                disabled={loginMutation.isPending}
              />
            </S.InputWrapper>

            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

            <S.LoginButton type="submit" disabled={loginMutation.isPending}>
              {loginMutation.isPending ? '로그인 중...' : '로그인'}
            </S.LoginButton>

            <S.OptionsContainer>
              <S.RememberContainer>
                <S.Checkbox
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  id="rememberMe"
                />
                <S.RememberText htmlFor="rememberMe">로그인 상태 유지</S.RememberText>
              </S.RememberContainer>
              <S.FindAccountLink onClick={handleFindAccountClick}>
                아이디 / 비밀번호 찾기
              </S.FindAccountLink>
            </S.OptionsContainer>

            <S.SignupButton type="button" onClick={handleSignupClick}>
              회원가입
            </S.SignupButton>
            <S.SignupText>아직 FarmON 회원이 아니신가요?</S.SignupText>
          </form>
        </S.FormContainer>
      </S.ModalContainer>
    </>
  );
};

export default LoginModal;
