import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import * as M from '@/styles/pages/Expert/My.style';
import { EditMyProfileModal } from '@/components/modals/Expert/My.modal';
import { useEditMyProfileModalStore } from '@/store/modals/useExpertModalStore';
import { useNavigate } from 'react-router-dom';

const dummy = {
  avatar_url:
    'https://s3-alpha-sig.figma.com/img/cebb/5890/aa2791b8acee1732a37529d4647a9953?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jHp~~4BKY~JaSr7CP-2ma-daSJ~zesjeQ1-zPmqJ9Sw5TQiO2qWQwDe6NIUAsVQtW9VZsTkExi3P0Q2UsDIVSxlU4Viyi~mGhJWu2ik1BNA~-v-bLexMsDKxITHqJxItdhS3g78q5ry45yhxEyjofCUo06NOAzDUR4DgIB~q5bNul0yubjGmqxEI1UdQ6ykwgDbHbtFXvscxua4-0x~2Brlxul-JqQFOsCEfvpOsSw4bDJGY2hUF9eK~lPH4P8xmTeR94xxoxlgsRUlsG69Vsifjlz1Xmzec~skbaNL~ZaqNHFr6U0QmdN31C1zQROIK955xCjNAyBD9hVX1unJvCQ__',
  name: '김상우',
  verified: true,
  introduction: '현장에서 쌓은 경험을 바탕으로, 실전 노하우를 전해드립니다.',
  rating: {
    value: 4.8,
    total_rating_amount: 10,
  },
  portfolio: `
  - **경력**

    온팜 주식회사 (2009 ~ 2019)
    - 현장관리감독 업무 수행

    개인 컨설턴트 (2019 ~ 현재)
    - 농업 기술 센터 방제 특강 강사 활동
    - 병해충 관리 업무


  - **추가정보**

    농업 생명과학과 졸업 (연세대학교)

    병해충 관리사 자격증 보유
    
    농업 기술 센터 병해충 방제 특강 강사 활동


  - **대표 서비스**

    쌀 (곡물)
    - 쌀, 보리 재배 컨설팅
    - 농경지 스마트팜


  - **포트폴리오**
  
    <div style="display: inline-flex; gap: 26px;">
        <img src="https://s3-alpha-sig.figma.com/img/d589/03fc/efd4e6a3a0e8a920e1a9ec5c765a8c44?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U7eznbANqerb9l~SKi7PdM-ekMjSh2wp0dKuFkrsruGnfMnVBR3cM3-mzP5YAdLNTMDVM1hF5OYPxU1s8TAY7HOmFkoaz4m5xdskUi~2u-41Ti76xLfPve5txox0fy8tbNsokwVbEGsn2oB-lDoMYc~84-0N2bbZN915VJ8x6ChFM8guU7p-VZ2V5QQPy-TBR1R7AF0zOueRqxR2jVGRtRmQTv94h8MHmDRx2r132QeGJF7H0AmjGl1x0wYSLj-w9EBZrOYrmjRWDxCzx9DsHQgAtzUogsRlNENiyAauujST7MVknRHBh8aGlMK-NrhDlStnJJAM0VioZ6QJGhpFHQ__" alt="보리 병해충 퇴치 프로젝트" />
        <img src="https://s3-alpha-sig.figma.com/img/93da/1a06/b388f9f9b7b61d5bb8c2e551ab26679f?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c06vkZXfs-M5lVzlh62328QHYef1I0~mgPEzTkEyjt1~hz7CjtISLC1NoxnpIfu3D0kdOTJRhm2GdZzVBOJyC-9VBF9-OoDp2A5HgckOTAjK47EYViWXBU5NO9r0HLGzdifgI1hjCU42rvu0-rO1P~Jf~S9ZYVbaLwdEgeaNGIiVOQNtr4q15C5kCNGYKAdhYWCxtKF3HL1aBflgHg9F-siE2m78ushdnjllxJJvYHO-qsM6IE2y0Vjt7h6K-kglcWkMMemFilGk1Un9u7qADYSgTmaRijbyLRds~nnYLFEypDZUgL5ICs3AG4m9lc4fYxrT~lEk1~wQUONqeHNl3g__" alt="무선 토양센서 컨설팅" />
    </div>
    `,
};

export default function My() {
  // 내 프로필, 활동 지역 모달
  const { openModal } = useEditMyProfileModalStore();

  const navigate = useNavigate();

  return (
    <>
      <EditMyProfileModal />
      <div style={{ marginTop: 84 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* 내 프로필 */}
          <M.Title>내 프로필</M.Title>
          <M.Card>
            <M.EditText onClick={() => openModal('내 프로필')}>편집</M.EditText>
            <M.MyInfoContainer>
              <M.AvatarContainer>
                <M.Avatar src={dummy.avatar_url} alt="" />
                <M.CameraIcon />
              </M.AvatarContainer>
              <M.MyInfo>
                <div
                  style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 12 }}
                >
                  <M.MyName>{dummy.name}</M.MyName>
                  {dummy.verified ? <M.VerifiedBadge>본인인증 완료</M.VerifiedBadge> : undefined}
                </div>
                <M.MyIntroduction>“{dummy.introduction}”</M.MyIntroduction>
                <M.MyStatsContainer>
                  <M.MyStats>
                    <M.MyStatsText>컨설팅 평점</M.MyStatsText>
                    <M.StarIcon />
                    <M.MyStatsText style={{ color: '#2C2C2C' }}>4.8 (10개)</M.MyStatsText>
                  </M.MyStats>
                  <M.MyStats>
                    <M.MyStatsText>컨설팅 수</M.MyStatsText>
                    <M.MyStatsText>20건</M.MyStatsText>
                  </M.MyStats>
                </M.MyStatsContainer>
              </M.MyInfo>
            </M.MyInfoContainer>
          </M.Card>
          {/* 내 포트폴리오 */}
          <M.Title style={{ marginTop: '55px' }}>내 포트폴리오</M.Title>
          <M.Card>
            <M.EditText
              onClick={() => {
                navigate('/expert/my/edit');
                // TODO scroll to top
              }}
            >
              편집
            </M.EditText>
            <M.PortfolioContainer>
              <Markdown
                rehypePlugins={[rehypeRaw]}
                components={{
                  img: ({ src, alt }) => {
                    return (
                      <M.PortfolioImageCard>
                        <M.PortfolioImageContainer>
                          <M.PortfolioImage src={src} />
                          <M.PortfolioImageAlt>{alt}</M.PortfolioImageAlt>
                        </M.PortfolioImageContainer>
                      </M.PortfolioImageCard>
                    );
                  },
                }}
              >
                {dummy.portfolio}
              </Markdown>
            </M.PortfolioContainer>
          </M.Card>
          {/* 활동 지역 */}
          <M.Title style={{ marginTop: '55px' }}>활동 지역</M.Title>
          <M.Card>
            <M.EditText onClick={() => openModal('활동 지역')}>편집</M.EditText>
            <M.RegionContainer>
              <M.GPSIcon />
              <M.RegionDetailContainer>
                <M.RegionPrimaryText>경기 이천시</M.RegionPrimaryText>
                <M.RegionSecondaryText>활동 가능 범위: 300km 이동 가능</M.RegionSecondaryText>
                <M.RegionSecondaryText>도서지방 제외</M.RegionSecondaryText>
              </M.RegionDetailContainer>
            </M.RegionContainer>
          </M.Card>
        </div>
      </div>
    </>
  );
}
