import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import footerIcon from '../../assets/images/footer icon.png';

const FooterContainer = styled.footer`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 180px;
  bottom: 2px;
  border-top: 0.7px solid #b8b8b8;
  display: flex;
  justify-content: center;
  padding: 22px 0 30px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  height: 128px;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 20px;
  width: 789px;
  height: 128px;
`;

const LinkSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 40px;
  width: 315px;
  height: 21px;
`;

const FooterLink = styled(Link)`
  font-family: 'Pretendard';
  font-style: normal;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
  text-transform: uppercase;
  color: #2c2c2c;
  text-decoration: none;

  &.bold {
    font-weight: 600;
  }

  &.normal {
    font-weight: 500;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 10px;
  width: 789px;
  height: 87px;
`;

const CompanyTitle = styled.div`
  width: 789px;
  height: 21px;
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  display: flex;
  align-items: flex-end;
  color: #5e5e5e;
`;

const CompanyInfo = styled.div`
  width: 789px;
  height: 56px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 120%;
  color: #8e8e8e;
  white-space: pre-line;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 94px;
  height: 26px;
`;

const SocialImage = styled.img`
  width: 94px;
  height: 26px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <LeftSection>
          <LinkSection>
            <FooterLink to="/terms" className="normal">
              이용약관
            </FooterLink>
            <FooterLink to="/privacy" className="bold">
              개인정보처리방침
            </FooterLink>
            <FooterLink to="/business-info" className="normal">
              사업자 정보확인
            </FooterLink>
          </LinkSection>
          <InfoSection>
            <CompanyTitle>(주) FarmON 사업자 정보</CompanyTitle>
            <CompanyInfo>
              상호명:(주)FarmON • 대표자: 이경록 • 개인정보보호책임관리자:이경록 • 사업자등록번호:
              111-11-12345 • 통신판매업신고증: 제2025-서울강남-00111 호 고객센터:1577-1577 •
              이메일:abc@gmail.com COPYRIGHTⓒ 2025 FarmON. ALL RIGTS RESERVED.
            </CompanyInfo>
          </InfoSection>
        </LeftSection>
        <SocialLinks>
          <SocialImage src={footerIcon} alt="Social Icons" />
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
