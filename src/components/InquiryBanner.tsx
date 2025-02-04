import * as IB from '@/styles/components/InquiryBanner.style';

import boardImg from '@/assets/images/board.png';
import onionImg from '@/assets/images/onion.png';
import cabbageImg from '@/assets/images/cabbage.png';
import bananaImg from '@/assets/images/banana.png';

export const InquiryBanner = () => {
  return (
    <IB.BannerContainer>
      <IB.BannerWrapper>
        <IB.ContentWrapper>
          <IB.BoardImage src={boardImg} alt="board" />
          <IB.BannerContent>
            연결하고 싶은 전문가나{'\n'}
            추가로 요청할 작물이 있으신가요?
          </IB.BannerContent>
        </IB.ContentWrapper>
        <IB.InquiryButton to="/inquiry">문의하러 가기</IB.InquiryButton>
        <IB.OnionImage src={onionImg} alt="onion" />
        <IB.BananaImage src={bananaImg} alt="banana" />
        <IB.CabbageImage src={cabbageImg} alt="cabbage" />
      </IB.BannerWrapper>
    </IB.BannerContainer>
  );
};
