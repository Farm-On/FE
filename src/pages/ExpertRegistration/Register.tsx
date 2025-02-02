import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as R from '@/styles/pages/ExpertRegistration/Register.style';
import grainImg from '@/assets/images/grain.png';
import vegetableImg from '@/assets/images/vegetable.png';
import fruitImg from '@/assets/images/fruit.png';
import insamImg from '@/assets/images/insam.png';
import flowerImg from '@/assets/images/flower.png';
import feedImg from '@/assets/images/feed.png';
import otherImg from '@/assets/images/etc.png';

const categories = [
  { id: 'grain', title: '곡물', img: grainImg },
  { id: 'vegetable', title: '채소작물', img: vegetableImg },
  { id: 'fruit', title: '과일', img: fruitImg },
  { id: 'insam', title: '특용', img: insamImg },
  { id: 'flower', title: '화훼', img: flowerImg },
  { id: 'feed', title: '사료', img: feedImg },
  { id: 'etc', title: '기타', img: otherImg },
];

export default function Register() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (id: string) => {
    setSelectedCategory((prevSelected) => (prevSelected === id ? null : id));
  };

  const handleNextClick = () => {
    if (selectedCategory) {
      navigate(`/detail-category/${selectedCategory}`);
    }
  };

  return (
    <R.Container>
      <R.Main>
        <R.Title>어떤 분야의 전문가 인가요?</R.Title>
        <R.CategoryContainer>
          {categories.map((category) => (
            <R.CategoryBox
              key={category.id}
              isSelected={selectedCategory === category.id}
              onClick={() => handleCategoryClick(category.id)}
            >
              <R.CategoryImage src={category.img} alt={category.title} />
              <R.CategoryTitle isSelected={selectedCategory === category.id}>
                {category.title}
              </R.CategoryTitle>
            </R.CategoryBox>
          ))}
        </R.CategoryContainer>
      </R.Main>
      <R.NextButton disabled={!selectedCategory} onClick={handleNextClick}>
        <span>다음으로</span>
      </R.NextButton>
    </R.Container>
  );
}
