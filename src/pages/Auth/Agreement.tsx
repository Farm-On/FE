// 이용약관 페이지 컴포넌트
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '@/styles/pages/Auth/Agreement.style';
import logo from '@/assets/images/logo.png';
import { Footer } from '@/components/Footer';

const Agreement = () => {
  const navigate = useNavigate();

  // 체크박스 상태 관리
  const [agreements, setAgreements] = useState({
    all: false,
    age: false,
    service: false,
    privacy: false,
  });

  // 서비스 이용약관 내용
  const serviceContent = `[개인정보취급방침] FarmON은 귀하의 개인정보보호를 매우 중요시하며, 개인정보보호방침을 통하여 귀하께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.

개인정보 수집에 대한 동의
FarmON은 귀하께 회원가입시 개인정보보호방침 또는 이용약관의 내용을 공지하며 회원가입버튼을 클릭하면 개인정보 수집에 대해 동의하신 것으로 봅니다.

개인정보의 수집목적 및 이용목적 FarmON은 다음과 같은 목적을 위하여 개인정보를 수집하고 있습니다.
-FarmON사이트 서비스를 위한 회원 가입 및 이용아이디 발급
-장애처리 및 개별 회원에 대한 개인 맞춤서비스
-서비스 이용에 대한 통계수집
-기타, 새로운 서비스 및 정보 안내`;

  // 개인정보 취급방침 내용
  const privacyContent = `[개인정보취급방침] FarmON은 귀하의 개인정보보호를 매우 중요시하며, 개인정보보호방침을 통하여 귀하께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.

개인정보 수집에 대한 동의
FarmON은 귀하께 회원가입시 개인정보보호방침 또는 이용약관의 내용을 공지하며 회원가입버튼을 클릭하면 개인정보 수집에 대해 동의하신 것으로 봅니다.

개인정보의 수집목적 및 이용목적 FarmON은 다음과 같은 목적을 위하여 개인정보를 수집하고 있습니다.
-FarmON사이트 서비스를 위한 회원 가입 및 이용아이디 발급
-장애처리 및 개별 회원에 대한 개인 맞춤서비스
-서비스 이용에 대한 통계수집
-기타, 새로운 서비스 및 정보 안내`;

  // 전체 동의 체크박스 핸들러
  const handleAllCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setAgreements({
      all: checked,
      age: checked,
      service: checked,
      privacy: checked,
    });
  };

  // 개별 동의 체크박스 핸들러
  const handleSingleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setAgreements((prev) => {
      const newAgreements = { ...prev, [name]: checked };
      const allChecked = Object.keys(newAgreements)
        .filter((key) => key !== 'all')
        .every((key) => newAgreements[key as keyof typeof newAgreements]);
      return { ...newAgreements, all: allChecked };
    });
  };

  // 다음 단계 이동 핸들러
  const handleNext = () => {
    if (agreements.age && agreements.service && agreements.privacy) {
      navigate('/signup');
    } else {
      alert('필수 약관에 모두 동의해주세요.');
    }
  };

  return (
    <S.Container>
      <S.LogoWrapper>
        <S.Logo src={logo} alt="FarmON" />
      </S.LogoWrapper>
      <S.MainContent>
        <S.Wrapper>
          <S.Title>이용약관</S.Title>
          <S.Content>
            {/* 전체 동의 체크박스 */}
            <S.CheckboxWrapper>
              <S.Checkbox
                type="checkbox"
                id="all"
                checked={agreements.all}
                onChange={handleAllCheck}
              />
              <S.Label htmlFor="all">모두 동의합니다.</S.Label>
            </S.CheckboxWrapper>

            <S.Divider />

            {/* 14세 이상 체크박스 */}
            <S.CheckboxWrapper>
              <S.Checkbox
                type="checkbox"
                name="age"
                id="age"
                checked={agreements.age}
                onChange={handleSingleCheck}
              />
              <S.Label htmlFor="age">만 14세 이상입니다.</S.Label>
            </S.CheckboxWrapper>

            {/* 서비스 이용약관 동의 */}
            <S.CheckboxWrapper>
              <S.Checkbox
                type="checkbox"
                name="service"
                id="service"
                checked={agreements.service}
                onChange={handleSingleCheck}
              />
              <S.Label htmlFor="service">서비스 이용약관에 동의합니다. (필수)</S.Label>
            </S.CheckboxWrapper>
            <S.TermsBox>{serviceContent}</S.TermsBox>

            {/* 개인정보 수집/이용 동의 */}
            <S.CheckboxWrapper>
              <S.Checkbox
                type="checkbox"
                name="privacy"
                id="privacy"
                checked={agreements.privacy}
                onChange={handleSingleCheck}
              />
              <S.Label htmlFor="privacy">개인정보 수집/이용에 동의합니다. (필수)</S.Label>
            </S.CheckboxWrapper>
            <S.TermsBox>{privacyContent}</S.TermsBox>

            {/* 다음으로 버튼 */}
            <S.ButtonWrapper>
              <S.NextButton
                onClick={handleNext}
                disabled={!agreements.service || !agreements.privacy || !agreements.age}
              >
                다음으로
              </S.NextButton>
            </S.ButtonWrapper>
          </S.Content>
        </S.Wrapper>
      </S.MainContent>
      <S.FooterWrapper>
        <Footer />
      </S.FooterWrapper>
    </S.Container>
  );
};

export default Agreement;
