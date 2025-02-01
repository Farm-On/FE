import React, { useState, useEffect } from 'react';
import * as S from '@/styles/components/LoginModal.style';
import logo from '@/assets/images/logo.png';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  type?: 'default' | 'expert';
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, type = 'default' }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  // 모달이 닫힐 때 상태 초기화
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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // 여기에 실제 로그인 로직이 들어갈 예정
    // 임시로 항상 실패하는 것으로 처리
    setError('이메일 또는 비밀번호가 올바르지 않습니다. 다시 확인해주세요.');
  };

  const handleModalClose = () => {
    if (!rememberMe) {
      setEmail('');
      setPassword('');
    }
    setError('');
    onClose();
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
              />
            </S.InputWrapper>

            <S.InputWrapper>
              <S.Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력해 주세요."
                isError={!!error}
              />
            </S.InputWrapper>

            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

            <S.LoginButton type="submit">로그인</S.LoginButton>

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
              <S.FindAccountLink>아이디 / 비밀번호 찾기</S.FindAccountLink>
            </S.OptionsContainer>

            <S.SignupButton type="button">회원가입</S.SignupButton>
            <S.SignupText>아직 FarmON 회원이 아니신가요?</S.SignupText>
          </form>
        </S.FormContainer>
      </S.ModalContainer>
    </>
  );
};

export default LoginModal;
