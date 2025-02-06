//import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import * as E from '@/styles/pages/Expert/Estimate.style';
import { SuggestedExpertProfile } from '@/components/SuggestedExpertProfile';
import Sangwoo from '../../assets/images/jimin.png';
import Dongho from '../../assets/images/dongho.png';

// 더미 데이터
const dummy = {
  title: '쌀농사 토양, 물 관리 관련 컨설팅 문의',
  product: '곡물',
  productName: '쌀',
  category: '토양 및 환경관리',
  location: '경기 이천시 마장면 덕평로663번길 100-41',
  estimatedCost: '500만원 ~ 1,000만원',
  images: [
    'https://s3-alpha-sig.figma.com/img/7451/f1b7/50c2cf1f253140179c01d16115581bf3?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bWMIKB0kvp38RxWNcNmg3BhdkqpQHYFEXwpy5yS3QRTTr05ZKu73J5QxawSoyJorPBKAYNLZr5RDJkCw~a6ZA4QhhJFRosBMctFBnOcS7S1o6I9nHx9hYrp8d--vxR2sXNbnUVGnP99tkzDFLyoBZ9x3GGJ~X-fTsJOSknTD8Gi4HncWTSzN9PYSEgYEZWOqga9rtrm02dJdDb-X6jvJyBScUpwQAvo1AkBnwQoMAWLm3ZFduaLvEDSgFxTosXa-nAu0cn9cc4HA2vMT66a1vtGGiO17aMzIJnKSXsqzXrjSw~wroWLwb0IZLbAlpkxdRwjX~Iy7JZ8s2Dkl1ADV0A__',
    'https://s3-alpha-sig.figma.com/img/afc6/4aaf/a3ae4d61edd6842d35e69b2057c45303?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dKNziNt8-nivd8AcJobKZS0KR8-vmxrEngON8OIjeIbG3~l2suFfsl0DKRDGQoerE1WaXWHNpyP5TykD558V6V-1hSnWwou0YIqE-iN6-eWVGyMv5QsaHQ7za-OqJSBPFadub~Gl~lJimMwn29LqjaVdAd6kyl4uWeGbVsldpcli6n4gqAC3nKb0OITLKnllkQz27MwWMluGFZX-ACV-G24BSBeE-z8SJwym8EC1t2s6QGk57vAhxB~TAnXTNT3s~UbDznL~sTUOWsoaXo5HIq4Q2dBHF-r5G~RyWw8PhNOXaYAztDlVund6ZlnJyLNDqTZRh9CPzrw8ewspilDCYw__',
  ],
  content: `안녕하세요, 저는 쌀 농사를 막 시작한 초보 농업인입니다. 농사를 지으면서 토양과 환경 관리에 대해 궁금한 점이 생겨 이렇게 문의드립니다.
현재 논의 토양 상태가 쌀 재배에 적합한지 잘 모르겠어서 산도나 유기물 함량 등을 확인하고, 부족한 부분이 있다면 어떻게 개선할 수 있을지 도움을 받고 싶습니다. 비료도 어떤 걸 얼마나 사용해야 하는지, 또 언제 주는 게 좋은지 정확히 알기가 어렵더라고요.
또 물 관리는 어떻게 해야 논 상태를 더 잘 유지할 수 있을지 고민입니다. 배수나 물 공급 방법에 대해 효율적인 팁이 있다면 알려주시면 좋겠습니다. 현재 토양의 상태 사진 첨부합니다. 병충해도 미리 예방할 수 있는 방법이 있다면 함께 조언 부탁드립니다.`,
};

export default function EstimateSheet() {
  // 견적서 상세페이지

  //const { id } = useParams();

  return (
    <div style={{ backgroundColor: '#F9F9F9', paddingTop: 84 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <E.Title>쌀농사 토양, 물 관리 관련 컨설팅 문의</E.Title>
        <E.Subtitle>2025.01.11</E.Subtitle>
        <E.Content>
          {/* 제목 */}
          <E.Card style={{ padding: '21px 48px 21px 48px' }}>
            <E.Inline>
              <E.Name>제목</E.Name>
              <E.Value style={{color:'#2C2C2C',fontWeight:'600'}}>{dummy.title}</E.Value>
            </E.Inline>
          </E.Card>

          {/* 상세정보 */}
          <E.Card style={{ padding: '41px 48px 41px 48px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <E.Inline>
                <E.Name>분야</E.Name>
                <E.Value>
                  {dummy.productName} ({dummy.product})
                </E.Value>
              </E.Inline>
              <E.Inline>
                <E.Name>종류</E.Name>
                <E.Value>{dummy.category}</E.Value>
              </E.Inline>
              <E.Inline>
                <E.Name>위치</E.Name>
                <E.Value>{dummy.location}</E.Value>
              </E.Inline>
              <E.Inline>
                <E.Name>예산</E.Name>
                <E.Value>{dummy.estimatedCost}</E.Value>
              </E.Inline>
            </div>
          </E.Card>

          {/* 컨설팅 설명 */}
          <E.Card style={{ padding: '41px 48px 41px 48px' }}>
            <E.Inline>
              <E.Name>컨설팅 설명</E.Name>
            </E.Inline>
            <E.ConsultingImageContainer>
              {dummy.images.map((image) => (
                <E.ConsultingImage key={image} src={image} alt="" />
              ))}
            </E.ConsultingImageContainer>
            <E.ConsultingContent>{dummy.content}</E.ConsultingContent>
          </E.Card>

          <div style={{ paddingTop: '110px' }}>
            <Title>제안받은 견적</Title>
            <Subtitle>컨설팅을 진행할 전문가를 확인하고 선택해보세요</Subtitle>
          </div>
          <ProfileWrapper>
            <SuggestedExpertProfile
              profileImg={Sangwoo}
              name={'김상우 (해충해방)'}
              ratings={4.8}
              years={2}
              introduction={'“현장에서 쌓은 경험을 바탕으로, 실전 노하우를 전해드립니다.”'}
            />
            <SuggestedExpertProfile
              profileImg={Dongho}
              name={'배추대장'}
              ratings={4.8}
              years={2}
              introduction={'“전문성과 경험을 살려, 실용적인 해결책을 제공해드립니다.”'}
            />
          </ProfileWrapper>
        </E.Content>
      </div>
    </div>
  );
}

const ProfileWrapper = styled.div`
  padding-top: 6px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width:1200px;
  gap: 20px;
  margin-bottom:300px;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-left: 10px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    margin-left: 40px;
  }
`;

const Title = styled.div`
  color: #000;
  font-family: 'PretendardRegular';
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 45px */

  @media (min-width: 768px) {
    margin-left: 40px;
  }

  @media (min-width: 480px) {
    font-size: 24px;
    margin-left: 20px;
  }
`;

const Subtitle = styled.div`
  color: #5f5f5f;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */

  @media (min-width: 768px) {
    margin-left: 40px;
  }

  @media (min-width: 480px) {
    font-size: 14px;
    margin-left: 20px;
  }
`;
