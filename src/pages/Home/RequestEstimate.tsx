import * as RE from '../../styles/pages/RequestEstimate';
import HomeIcon from '../../assets/icons/Home.svg?react';
import GreyRightIcon from '../../assets/icons/GreyRight.svg?react';
import { useState, useRef, useEffect } from 'react';
import { EstimateBudget } from '@/components/EstimateBudget';
import { ChoiceCity } from '@/components/ChoiceCity/ChoiceCity';
import { StateScroll } from '@/components/StateScroll';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ImgUpload from '../../components/RequestImageUpload';
import { useCreateEstimateMutation } from '@/hooks/useMyEstimate';
import useAuthStore from '../../store/useAuthStore';

interface Category {
  id: string;
  title: string;
}

const initialCategories: Category[] = [
  { id: '1', title: '작물관리' },
  { id: '2', title: '토양 및 환경관리' },
  { id: '3', title: '농업 경영' },
  { id: '4', title: '스마트팜' },
  { id: '5', title: '정책 및 지원사업' },
  { id: '6', title: '기타' },
];

export default function RequestEstimatePage(): JSX.Element {
  const navigate = useNavigate();
  const {userInfo,isLoggedIn} = useAuthStore();
  const userId = userInfo?.userId;
  const location = useLocation();
  const editData = location.state?.editData;
  const editSection = location.state?.editSection;
  const [selected, setSelected] = useState<string>('');
  const [titleValue, setTitleValue] = useState<string>('');
  const [contentValue, setContentValue] = useState<string>('');
  const [isChecked, setIsChecked] = useState<string>('');
  const [processing, setProcessing] = useState<number>(0);
  const [currentSection, setCurrentSection] = useState<
    'category' | 'location' | 'budget' | 'detail'
  >('category');
  const [areaName, setAreaName] = useState<string>('');
  const [areaNameDetail, setNameDetail] = useState<string>('');

  const categoryRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const budgetRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [alertShown, setAlertShown] = useState(false);

  //이미지 관련 상태
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  


  useEffect(() => {
    if (!isLoggedIn) {
      alert('로그인이 필요한 서비스입니다')
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);


  const handleLocationSelect = (city: string, district: string) => {
    setAreaName(city);
    setNameDetail(district);
  };
  const createEstimateMutation = useCreateEstimateMutation(); //훅 호출

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    //높이 초기화
    textarea.style.height = 'auto';

    const newHeight = Math.max(172, textarea.scrollHeight);
    textarea.style.height = `${newHeight}px`;
  };

  const handleImagesChange = (files: File[]) => {
    // 알림이 아직 표시되지 않았을 때만 표시
    if (!alertShown) {
      alert('선택된 사진을 수정할 시 전부 초기화 되므로 신중히 선택해주세요');
      setAlertShown(true);
    }
    setSelectedImages(files);
  };

  const scrollToSection = (
    ref: React.RefObject<HTMLDivElement>,
    section: 'category' | 'location' | 'budget' | 'detail'
  ) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setCurrentSection(section);
  };
  const handleChipClick = (id: string) => {
    setSelected(id);
    scrollToSection(locationRef, 'location');
    setProcessing(processing + 25);
  };

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    if (newText.length <= 20) setTitleValue(newText);
  };

  const handleContentValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length <= 3000) setContentValue(newText);
    requestAnimationFrame(adjustTextareaHeight);
  };

  const handleMoney = (value: string) => {
    setIsChecked(value);
    scrollToSection(detailRef, 'detail');
  };

  const handleSucceed = () => {
    if (contentValue.length >= 1) {
      setProcessing(processing + 25);
    }
  };

  const handleCityClick = () => {
    scrollToSection(budgetRef, 'budget');
  };


  // 수정 모드로 진입했을 때 기존 데이터 설정
  useEffect(() => {
    if (editSection && editData) {
      setTitleValue(editData.title);
      setContentValue(editData.content);
      const categoryId = initialCategories.find((item) => item.title === editData.category)?.id;
      if (categoryId) setSelected(categoryId);
      setIsChecked(editData.budget);
  
      setAreaName(editData.areaName);
      setNameDetail(editData.areaNameDetail);
  
      // 이미지 설정 - 전달받은 모든 이미지 URL 사용
      if (editData.images && editData.images.length > 0) {
        // 문자열 배열 또는 File 객체 배열일 수 있으므로 타입 확인
        type ImageType = string | File | (string | File)[];
        const imageList = editData.images.map((img:ImageType) => {
          // 이미 URL 문자열이면 그대로 사용
          if (typeof img === 'string') {
            return img;
          }
          // File 객체면 임시 URL 생성
          else if (img instanceof File) {
            return URL.createObjectURL(img);
          }
          return null;
        }).filter(url => url !== null);
        
        setSelectedImages(imageList);
      }
  
      switch (editSection) {
        case 'detail': {
          scrollToSection(detailRef, 'detail');
          break;
        }
        case 'info': {
          scrollToSection(categoryRef, 'category');
          break;
        }
      }
      setProcessing(100);
    }
  }, [editSection, editData]);

  useEffect(() => {
    adjustTextareaHeight();
  }, [contentValue]);

  //견적서 제출 함수
  const handleSubmitEstimate = async () => {
    const categoryTitle = initialCategories.find((category) => category.id === selected)?.title;

    if (
      !categoryTitle ||
      !titleValue ||
      !contentValue ||
      !isChecked ||
      !areaName ||
      !areaNameDetail
    ) {
      alert('모든 필수 항목을 입력해주세요.');
      return;
    }

    const inputData = {
      userId: userId,
      cropName: '쌀',
      category: categoryTitle,
      areaName: areaName,
      areaNameDetail: areaNameDetail,
      budget: isChecked,
      title: titleValue,
      body: contentValue,
    };

    console.log('서버로 보낼 데이터:', inputData); 

    try {
      if (location.state?.editSection) {
        const imageUrls = selectedImages
        .filter(file => file instanceof File)  // 실제 File 객체만 필터링
        .map(file => {
          try {
            return URL.createObjectURL(file); //url로 변환
          } catch (error) {
            console.error('URL 생성 실패:', error);
            return null;
          }
        })
        .filter(url => url !== null);
        // 수정된 데이터 가지고 이동
        navigate('/MyEstimate/RequestEstimate/CheckMyEstimate', {
          state: {
            estimateData: {
              ...inputData,
              imageUrls,    
              originalFiles: selectedImages,
              editMode: true,
              areaName: areaName, 
              areaNameDetail: areaNameDetail,
            },
          },
        });
      } else {
        // 새로운 견적서 생성일 때 (기존 코드)
        const response = await createEstimateMutation.mutateAsync({
          data: inputData,
          files: selectedImages.filter(file => file instanceof File)
        });
        console.log('✅ 요청한 데이터:', inputData);
        console.log('✅ 서버 응답 데이터:', response);

        if (response.isSuccess) {
          navigate('/MyEstimate/RequestEstimate/CheckMyEstimate', {
            state: {
              estimateData: {
                ...inputData,
                ...response.result,
              },
            },
          });
          console.log('전달된 데이터들!!:', response);

        }
      }
    } catch (error) {
      console.error('견적서 생성 중 오류 발생:', error);
      alert('견적서 생성에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <>
      <TopContainer>
        <RE.Title>
          <h2>견적요청</h2>
        </RE.Title>
        <RE.Wrapper>
          <RE.Category>
            <HomeIcon />
            <GreyRightIcon />
            <p>곡물</p>
            <GreyRightIcon />
            <p>쌀</p>
          </RE.Category>
          <RE.Process>
            <p>진행률 {processing}%</p>
          </RE.Process>
        </RE.Wrapper>
      </TopContainer>

      <RE.PageWrapper>
        <RE.CenteredContainer>
          <RE.Container>
            <div>
              {/* 첫 번째 섹션 */}
              <div style={{ position: 'relative', paddingTop: '44px' }} ref={categoryRef}>
                <RE.Bubble>어떤 컨설팅을 원하세요?</RE.Bubble>
                <RE.Chips>
                  {initialCategories.map((category) => (
                    <div key={category.id}>
                      <RE.Chip
                        isSelected={selected === category.id}
                        onClick={() => handleChipClick(category.id)}
                      >
                        {category.title}
                      </RE.Chip>
                    </div>
                  ))}
                </RE.Chips>
                <RE.DividingLine />
                <StateScroll
                  currentSection={currentSection}
                  categoryOnClick={() => scrollToSection(categoryRef, 'category')}
                  locateOnClick={() => scrollToSection(locationRef, 'location')}
                  budgetOnClick={() => scrollToSection(budgetRef, 'budget')}
                  datailOnClick={() => scrollToSection(detailRef, 'detail')}
                />
              </div>

              {/* 두 번째 섹션 */}
              <div ref={locationRef}>
                <RE.Bubble>컨설팅 위치는 어디인가요?</RE.Bubble>
                <div style={{ paddingBottom: '18px', paddingLeft: '6px' }}>
                  <ChoiceCity
                    onClick={handleCityClick}
                    onLocationSelect={handleLocationSelect}
                    selectedAreaName={areaName}
                    selectedAreaDetail={areaNameDetail}
                  />
                </div>
                <RE.DividingLine />
              </div>

              {/* 세 번째 섹션 */}
              <div ref={budgetRef}>
                <RE.Bubble>예산은 어느 정도인가요?</RE.Bubble>
                <RE.InputContainer>
                  {[
                    '10~50만원',
                    '50~100만원',
                    '100~200만원',
                    '200~500만원',
                    '500~1000만원',
                    '1000만원 이상',
                  ].map((value) => (
                    <EstimateBudget
                      key={value}
                      id={value}
                      value={value}
                      label={value}
                      checked={isChecked === value}
                      onChange={() => handleMoney(value)}
                    />
                  ))}
                </RE.InputContainer>
                <RE.DividingLine />
              </div>

              {/* 네 번째 섹션 */}
              <div ref={detailRef}>
                <RE.Bubble>해당 컨설팅에 대해 자세히 설명해주세요.</RE.Bubble>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '18px',
                    paddingTop: '40px',
                    paddingLeft: '6px',
                  }}
                >
                  <div style={{ position: 'relative' }}>
                    <RE.PostTitle
                      type="text"
                      placeholder="제목을 입력해주세요."
                      value={titleValue}
                      onChange={handleValue}
                      onClick={() => handleSucceed()}
                    />
                    <RE.TitleLength>{titleValue.length}/20</RE.TitleLength>
                  </div>
                  <InputContainer style={{ position: 'relative' }}>
                    <RE.PostContent
                      placeholder="내용을 입력해주세요."
                      value={contentValue}
                      onChange={handleContentValue}
                      ref={textareaRef}
                    />

                    <div
                      style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '26px',
                        marginTop: '10px',
                      }}
                    >
                      <ImgUpload onImagesChange={handleImagesChange} maxImages={15} />
                    </div>
                    <RE.ContentLength>{contentValue.length}/3000</RE.ContentLength>
                  </InputContainer>
                </div>
                <ApplyBtn>
                  <RE.Button onClick={handleSubmitEstimate}>
                    {editSection ? '수정완료' : '견적 조회하기'}
                  </RE.Button>
                </ApplyBtn>
              </div>
            </div>
          </RE.Container>
        </RE.CenteredContainer>
      </RE.PageWrapper>
    </>
  );
}

const InputContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 1194px;
`;

const ApplyBtn = styled.div`
  display: flex;
  justify-content: center;
  margin: 172px 0 350px;
`;
const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  padding-left: 180px;
  max-width: 1200px;
  padding-bottom: 25px;
  padding-top: 70px;

  @media (max-width: 768px) {
    padding-left: 30px;
    padding-bottom: 25px;
    padding-top: 70px;
  }

  @media (max-width: 480px) {
    padding-left: 20px;
    padding-bottom: 25px;
    padding-top: 70px;
  }
`;
