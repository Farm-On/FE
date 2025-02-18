//import AddBtn from '../../assets/icons/dashedAddGray.svg?react';
import * as E from '../../styles/pages/EstimateCheck.style';
import { RequestModal } from '@/components/modals/Expert/RequestModal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
//import { CreateEstimate } from '@/api/types';
import CheckingImgUpload from '../../components/CheckingImageUpload';
import { axiosInstance } from '../../api/axios';

// 더미 데이터
// const dummy = {
//   title: '쌀농사 토양, 물 관리 관련 컨설팅 문의',
//   applicant: '김팜온',
//   category: '토양 및 환경관리',
//   location: '경기 이천시 마장면 덕평로663번길 100-41',
//   estimatedCost: '500만원 ~ 1,000만원',
//   images: [
//     'https://s3-alpha-sig.figma.com/img/7451/f1b7/50c2cf1f253140179c01d16115581bf3?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bWMIKB0kvp38RxWNcNmg3BhdkqpQHYFEXwpy5yS3QRTTr05ZKu73J5QxawSoyJorPBKAYNLZr5RDJkCw~a6ZA4QhhJFRosBMctFBnOcS7S1o6I9nHx9hYrp8d--vxR2sXNbnUVGnP99tkzDFLyoBZ9x3GGJ~X-fTsJOSknTD8Gi4HncWTSzN9PYSEgYEZWOqga9rtrm02dJdDb-X6jvJyBScUpwQAvo1AkBnwQoMAWLm3ZFduaLvEDSgFxTosXa-nAu0cn9cc4HA2vMT66a1vtGGiO17aMzIJnKSXsqzXrjSw~wroWLwb0IZLbAlpkxdRwjX~Iy7JZ8s2Dkl1ADV0A__',
//     'https://s3-alpha-sig.figma.com/img/afc6/4aaf/a3ae4d61edd6842d35e69b2057c45303?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dKNziNt8-nivd8AcJobKZS0KR8-vmxrEngON8OIjeIbG3~l2suFfsl0DKRDGQoerE1WaXWHNpyP5TykD558V6V-1hSnWwou0YIqE-iN6-eWVGyMv5QsaHQ7za-OqJSBPFadub~Gl~lJimMwn29LqjaVdAd6kyl4uWeGbVsldpcli6n4gqAC3nKb0OITLKnllkQz27MwWMluGFZX-ACV-G24BSBeE-z8SJwym8EC1t2s6QGk57vAhxB~TAnXTNT3s~UbDznL~sTUOWsoaXo5HIq4Q2dBHF-r5G~RyWw8PhNOXaYAztDlVund6ZlnJyLNDqTZRh9CPzrw8ewspilDCYw__',
//   ],
//   content: `안녕하세요, 저는 쌀 농사를 막 시작한 초보 농업인입니다. 농사를 지으면서 토양과 환경 관리에 대해 궁금한 점이 생겨 이렇게 문의드립니다.
// 현재 논의 토양 상태가 쌀 재배에 적합한지 잘 모르겠어서 산도나 유기물 함량 등을 확인하고, 부족한 부분이 있다면 어떻게 개선할 수 있을지 도움을 받고 싶습니다. 비료도 어떤 걸 얼마나 사용해야 하는지, 또 언제 주는 게 좋은지 정확히 알기가 어렵더라고요.
// 또 물 관리는 어떻게 해야 논 상태를 더 잘 유지할 수 있을지 고민입니다. 배수나 물 공급 방법에 대해 효율적인 팁이 있다면 알려주시면 좋겠습니다. 현재 토양의 상태 사진 첨부합니다. 병충해도 미리 예방할 수 있는 방법이 있다면 함께 조언 부탁드립니다.`,
// };

export default function EstimateCheckPage() {
  // 견적서 상세페이지
  const location = useLocation();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const estimateData = location.state?.estimateData; //이전 페이지에서 가져온 데이터

  const [images, setImages] = useState<string[]>(estimateData?.imageUrls || []);


  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  const uploadImages = async (files: File[]) => {
    const formData = new FormData();
    formData.append('estimateId', estimateData.estimateId.toString());
    
    files.forEach((file) => {
      formData.append('imageFiles', file);
    });

    try {
      const response = await axiosInstance.post('/estimate', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // 서버로부터 받은 이미지 URL들을 반환
      return response.data.imageUrls;
    } catch (error) {
      console.error('이미지 업로드 실패:', error);
      throw new Error('이미지 업로드에 실패했습니다.');
    }
  };

  const handleModify = async (section: string) => {
    navigate('/MyEstimate/RequestEstimate', {
      state: {
        editSection: section,
        editData: {
          title: estimateData?.title,
          category: estimateData?.category,
          location: `${estimateData.areaName} ${estimateData.areaNameDetail}`,
          budget: estimateData?.budget,
          content: estimateData?.body,
          images: estimateData?.imageUrls || [],
        },
      },
    });
  };

  if (!estimateData) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '50px 100px',
        }}
      >
        견적서 정보를 찾을 수 없습니다..
      </div>
    );
  }

  // 이미지 추가 함수
  const handleAddImages = async (files: File[]) => {
    try {
      // 최대 5개까지만 허용
      const remainingSlots = 5 - images.length;
      if (remainingSlots <= 0) {
        alert('이미지는 최대 5개까지 추가할 수 있습니다.');
        return;
      }

      const newFiles = files.slice(0, remainingSlots);
      const temporaryUrls = newFiles.map((file) => URL.createObjectURL(file)); // 임시 URL 생성하여 즉시 화면에 표시
      setImages((prev) => [...prev, ...temporaryUrls]);

      // 서버에 이미지를 업로드하고 실제 URL 받아오기
      const serverUrls = await uploadImages(newFiles);

      // 임시 URL을 서버에서 받은 실제 URL로 교체
      setImages((prev) => [...prev.slice(0, -newFiles.length), ...serverUrls]);
    } catch (error) {
      console.error('이미지 처리 중 오류 발생:', error);
      alert('이미지 업로드에 실패했습니다. 다시 시도해주세요.');
    }
  };

  // 이미지 삭제 처리 함수
  const handleRemoveImage = async (index: number) => {
    try {
        const imageToDelete = images[index];
        
        // 서버에 이미지 삭제 요청
        await axiosInstance.delete(`/estimate`, {
            data: { imageUrl: imageToDelete }
        });

        // 성공적으로 삭제되면 상태 업데이트
        setImages((prev) => prev.filter((_, i) => i !== index));
        
    } catch (error) {
        console.error('이미지 삭제 실패:', error);
        alert('이미지 삭제에 실패했습니다. 다시 시도해주세요.');
    }
};

  return (
    <div style={{ backgroundColor: '#F9F9F9', paddingTop: 84 }}>
      {isModalOpen === true ? <RequestModal onClick={handleModalOpen} /> : null}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <E.Title>쌀(곡물) 컨설팅 요청 내역</E.Title>
        <E.Subtitle>컨설팅 신청 정보가 올바른지 확인해주세요</E.Subtitle>
        <E.Content>
          {/* 제목 */}
          <E.Card style={{ padding: '21px 48px 21px 48px' }}>
            <E.Modify>
              <p onClick={() => handleModify('detail')}>수정</p>
            </E.Modify>
            <E.Inline>
              <E.Name>제목</E.Name>
              <E.Value>{estimateData?.title}</E.Value>
            </E.Inline>
          </E.Card>

          {/* 상세정보 */}
          <E.Card style={{ padding: '41px 48px 41px 48px' }}>
            <E.Modify>
              <p onClick={() => handleModify('info')}>수정</p>
            </E.Modify>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <E.Inline>
                <E.Name>종류</E.Name>
                <E.Value>{estimateData?.category}</E.Value>
              </E.Inline>
              <E.Inline>
                <E.Name>위치</E.Name>
                <E.Value>{`${estimateData.areaName} ${estimateData.areaNameDetail}`}</E.Value>
              </E.Inline>
              <E.Inline>
                <E.Name>예산</E.Name>
                <E.Value>{estimateData.budget}</E.Value>
              </E.Inline>
            </div>
          </E.Card>

          {/* 컨설팅 설명 */}
          <E.Card style={{ padding: '41px 48px 41px 48px' }}>
            <E.Modify>
              <p onClick={() => handleModify('detail')}>수정</p>
            </E.Modify>
            <E.Inline>
              <E.Name>컨설팅 설명</E.Name>
            </E.Inline>
            <E.ConsultingImageContainer>
              {images.map((image, index) => (
                <div key={index} style={{ position: 'relative' }}>
                  <E.ConsultingImage src={image} alt="" />
                  <button
                    onClick={() => handleRemoveImage(index)}
                    style={{
                      position: 'absolute',
                      top: 5,
                      right: 5,
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    ✕
                  </button>
                </div>
              ))}
              {images.length < 5 && (
                <E.AddWrapper>
                  <CheckingImgUpload
                    onImagesChange={handleAddImages}
                    maxImages={5 - images.length}
                  />
                  <p style={{ whiteSpace: 'nowrap' }}>사진 추가하기</p>
                </E.AddWrapper>
              )}
            </E.ConsultingImageContainer>
            <E.ConsultingContent>{estimateData?.body}</E.ConsultingContent>
          </E.Card>
          <E.ChatButton onClick={handleModalOpen}>신청하기</E.ChatButton>
        </E.Content>
      </div>
    </div>
  );
}
