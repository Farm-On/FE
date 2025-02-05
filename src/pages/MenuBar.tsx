import React from 'react';
import { useSearchParams } from 'react-router-dom';
import * as M from '@/styles/pages/MenuBar.style';
import grainImg from '@/assets/images/grain.png';
import vegetableImg from '@/assets/images/vegetable.png';
import fruitImg from '@/assets/images/fruit.png';
import insamImg from '@/assets/images/insam.png';
import flowerImg from '@/assets/images/flower.png';
import feedImg from '@/assets/images/feed.png';
import otherImg from '@/assets/images/etc.png';
import { useEffect, useRef, useState } from 'react';

const categories = [
  {
    id: 'grain',
    title: '곡물',
    img: grainImg,
    subcategories: [
      ['쌀', '옥수수'],
      ['보리', '콩'],
      ['기타 곡물', ''],
    ],
  },
  {
    id: 'vegetable',
    title: '채소작물',
    img: vegetableImg,
    subcategories: [
      ['고구마', '과채류'],
      ['감자', '버섯'],
      ['엽채류', '기타 뿌리채소'],
      ['기타 채소', ''],
    ],
  },
  {
    id: 'fruit',
    title: '과일',
    img: fruitImg,
    subcategories: [
      ['사과', '배'],
      ['감', '포도'],
      ['복숭아', '감귤'],
      ['기타 과일', ''],
    ],
  },
  {
    id: 'insam',
    title: '특용',
    img: insamImg,
    subcategories: [
      ['인삼', '약초'],
      ['섬유', '유지'],
      ['향신료', '기타 특용'],
    ],
  },
  {
    id: 'flower',
    title: '화훼',
    img: flowerImg,
    subcategories: [
      ['절화 및 절엽', '분화 및 분재'],
      ['묘목', '기타 화훼'],
    ],
  },
  { id: 'feed', title: '사료', img: feedImg, subcategories: [['목초', '기타 사료']] },
  { id: 'etc', title: '기타', img: otherImg, subcategories: [['종지, 묘묙', '기타']] },
];

export default function MenuBar() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl) {
      setActiveCategory(categoryFromUrl);
      const element = categoryRefs.current[categoryFromUrl];
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 100, // 네비게이션 바 고려
            behavior: 'smooth',
          });
        }, 300); // 페이지 전환 후 스크롤 이동
      }
    }
  }, [searchParams]); // URL이 바뀌면 실행

  //클릭 시 해당 카테고리로 스크롤 이동
  const handleSidebarClick = (categoryId: string) => {
    const element = categoryRefs.current[categoryId];
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // 네비게이션 바 높이를 고려해서 조정
        behavior: 'smooth',
      });
      setActiveCategory(categoryId); // 클릭 후에도 사이드바에서 활성화 표시
    }
  };

  return (
    <M.Container>
      <M.Title>직접 찾기</M.Title>
      <M.ContentWrapper>
        <M.Sidebar>
          {categories.map((category) => (
            <M.SidebarItem
              key={category.id}
              isActive={category.id === activeCategory}
              onClick={() => handleSidebarClick(category.id)}
            >
              {category.title}
            </M.SidebarItem>
          ))}
        </M.Sidebar>
        <M.CategoriesWrapper>
          {categories.map((category) => (
            <M.CategorySection
              key={category.id}
              ref={(el) => (categoryRefs.current[category.id] = el)}
            >
              <M.CategoryTitle>
                <M.Icon src={category.img} alt={category.title} />
                {category.title}
              </M.CategoryTitle>
              <M.SubcategoryContainer>
                {category.subcategories.map((pair, index) => (
                  <React.Fragment key={`row-${category.id}-${index}`}>
                    <M.SubcategoryItem>{pair[0]}</M.SubcategoryItem>
                    <M.SubcategoryItem>{pair[1]}</M.SubcategoryItem>
                  </React.Fragment>
                ))}
              </M.SubcategoryContainer>
            </M.CategorySection>
          ))}
        </M.CategoriesWrapper>
      </M.ContentWrapper>
    </M.Container>
  );
}
