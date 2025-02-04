import * as FC from '@/styles/components/Footer.style';

import Instagram from '@/assets/icons/instagram.svg?react';
import Youtube from '@/assets/icons/youtube.svg?react';
import Facebook from '@/assets/icons/facebook.svg?react';

export const Footer = () => {
  return (
    <FC.FooterContainer>
      <FC.FooterContent>
        <FC.LeftSection>
          <FC.LinkSection>
            <FC.FooterLink to="/terms" className="normal">
              이용약관
            </FC.FooterLink>
            <FC.FooterLink to="/privacy" className="bold">
              개인정보처리방침
            </FC.FooterLink>
            <FC.FooterLink to="/business-info" className="normal">
              사업자 정보확인
            </FC.FooterLink>
          </FC.LinkSection>
          <FC.InfoSection>
            <FC.CompanyTitle>(주) FarmON 사업자 정보</FC.CompanyTitle>
            <FC.CompanyInfo>
              상호명:(주)FarmON • 대표자: 이경록 • 개인정보보호책임관리자:이경록 • 사업자등록번호:
              111-11-12345 • 통신판매업신고증: 제2025-서울강남-00111 호 고객센터:1577-1577 •
              이메일:abc@gmail.com COPYRIGHTⓒ 2025 FarmON. ALL RIGTS RESERVED.
            </FC.CompanyInfo>
          </FC.InfoSection>
        </FC.LeftSection>
        <FC.SocialLinks>
          <FC.SocialIcon>
            <Instagram />
          </FC.SocialIcon>
          <FC.SocialIcon>
            <Youtube />
          </FC.SocialIcon>
          <FC.SocialIcon>
            <Facebook />
          </FC.SocialIcon>
        </FC.SocialLinks>
      </FC.FooterContent>
    </FC.FooterContainer>
  );
};
