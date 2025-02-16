import { useNavigate } from 'react-router-dom';
import * as C from '@/styles/components/Search/Category.style';

import GrainImage from '@/assets/images/grain.png';
import VegImage from '@/assets/images/vegetable.png';
import FruitImage from '@/assets/images/fruit.png';
import InsamImage from '@/assets/images/insam.png';
import FlowerImage from '@/assets/images/flower.png';
import FeedImage from '@/assets/images/feed.png';
import EtcImage from '@/assets/images/etc.png';

const categories = [
  { id: 'grain', title: '곡물', img: GrainImage },
  { id: 'vegetable', title: '채소작물', img: VegImage },
  { id: 'fruit', title: '과일', img: FruitImage },
  { id: 'insam', title: '특용', img: InsamImage },
  { id: 'flower', title: '화훼', img: FlowerImage },
  { id: 'feed', title: '사료', img: FeedImage },
  { id: 'etc', title: '기타', img: EtcImage },
];

export const Category = () => {
  const navigate = useNavigate();

  const handleClick = (categoryId: string) => {
    navigate(`/menu?category=${categoryId}`); // 클릭 시 이동
  };

  return (
    <C.Container>
      {categories.map((category) => (
        <C.CategoryContainer key={category.id} onClick={() => handleClick(category.id)}>
          <C.ImgContainer>
            <C.StyledImage src={category.img} alt={category.title} />
          </C.ImgContainer>
          <C.StyledTitle>{category.title}</C.StyledTitle>
        </C.CategoryContainer>
      ))}
    </C.Container>
  );
};
