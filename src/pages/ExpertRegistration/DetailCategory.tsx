import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import * as D from '@/styles/pages/ExpertRegistration/DetailCategory.style';

// 서브 카테고리 데이터
const subCategoryMap: { [key: string]: string[] } = {
  grain: ['쌀', '보리', '옥수수', '콩', '기타 곡물'],
  vegetable: ['고구마', '감자', '엽채류', '과채류', '버섯', '기타 뿌리채소', '기타 채소작물'],
  fruit: ['사과', '배', '감', '포도', '복숭아', '감귤', '기타 과일'],
  insam: ['인삼', '약초', '섬유', '유지', '향신료', '기타 특용'],
  flower: ['절화 및 절엽', '분화 및 분재', '묘목', '기타 화훼'],
  feed: ['목초', '기타 사료'],
  etc: ['종지', '묘목', '기타 작물'],
};

export default function DetailCategory() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const subCategories = subCategoryMap[categoryId || ''] || [];

  const handleOptionChange = (option: string) => {
    setSelectedOption((prev) => (prev === option ? null : option));
  };

  const handleNextClick = () => {
    if (selectedOption) {
      localStorage.setItem('selectedCategoryDetail', selectedOption); // 서브 카테고리 저장
      navigate('/location');
    }
  };

  return (
    <D.Container>
      <D.Main>
        <D.Title>
          {categoryId === 'grain' && '곡물 종류를 더 구체적으로 선택해주세요'}
          {categoryId === 'vegetable' && '채소작물 종류를 더 구체적으로 선택해주세요'}
          {categoryId === 'fruit' && '과일 종류를 더 구체적으로 선택해주세요'}
          {categoryId === 'insam' && '특용 종류를 더 구체적으로 선택해주세요'}
          {categoryId === 'flower' && '화훼 종류를 더 구체적으로 선택해주세요'}
          {categoryId === 'feed' && '사료 종류를 더 구체적으로 선택해주세요'}
          {categoryId === 'etc' && '기타 종류를 더 구체적으로 선택해주세요'}
        </D.Title>
        <D.OptionList>
          {subCategories.map((option, index) => (
            <D.Option key={option} isSelected={selectedOption === option}>
              <input
                type="radio"
                id={`option-${index}`}
                name="subCategory"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionChange(option)} // 상태 업데이트
              />
              <label htmlFor={`option-${index}`}>{option}</label>
            </D.Option>
          ))}
        </D.OptionList>
      </D.Main>
      <D.ButtonContainer>
        <D.PrevButton onClick={() => navigate(-1)}>이전으로</D.PrevButton>
        <D.NextButton disabled={!selectedOption} onClick={handleNextClick}>
          다음으로
        </D.NextButton>
      </D.ButtonContainer>
    </D.Container>
  );
}
