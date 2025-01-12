//홈화면에 있는 커뮤니티 부분
import * as C from '../styles/MainCommunityStyle';
import { AiOutlineRight } from "react-icons/ai";
import { useState } from 'react';
import CommunityFeed from './Feed';

interface Category{
    id:string;
    title:string;
}

function Community():JSX.Element{
    const [category,setCategory] = useState<Category[]>([
        {
            id:'1',
            title:'인기'
        },
        {
            id:'2',
            title:'전체'
        },
        {
            id:'3',
            title:'Q&A'
        },
        {
            id:'4',
            title:'전문가 칼럼'
        }
    ]);
    return(
        <>
            <div>
                <C.Title>
                    <h2>궁금한 점을 나눠보세요</h2>
                    <C.ViewAll>
                        <h4>전체보기</h4>
                        <p><AiOutlineRight /></p>
                    </C.ViewAll>
                </C.Title>

                {/*나중에 온클릭 추가*/}
                <C.CategoryWrapper>
                    {category?.map((category,index)=>{
                        return(
                            <div key={category.id}>
                                <C.Category>
                                    <p>{category.title}</p>
                                </C.Category>
                            </div>
   
                        )
                    })}

                </C.CategoryWrapper>
                
                {/*일단 하드코딩(데이터 존재 X) */}
                <CommunityFeed topic='Q&A' headline='사과 재배 시 수확량을 높이는 비결이 궁금합니다' content='올해 사과 농사를 시작한 초보 농업인입니다. 사과 수확량을 높이기 위해 어떤 방법이 효과적인지 궁금합니다. 경험이 많으신 분들의 조언 부탁드립니다.'/>
                <CommunityFeed topic='전문가 칼럼' headline='농업인을 위한 성공적인 브랜딩 전략' content='이제 농업인도 자신의 농산물을 차별화하기 위해 브랜딩에 주목해야 할 때입니다. 고객과의 신뢰를 구축하고, 농산물에 특별한 가치를 더하는 브랜딩 전략이 무엇인지 함께 살펴보겠습니다. 왜 농산물 브랜딩이 중요할까요? 브랜딩은 단순히 상품을 포장하고 로고를 붙이는 것을 넘어섭니다. 농산물 브랜딩은 고객과의 신뢰를 쌓고, 농산물에 스토리를 담아 특별한 가치를 더하...'/>
                <CommunityFeed topic='전문가 칼럼' headline='계절별 작물 재배 체크리스트' content='효율적인 농사를 위해 계절별로 준비해야 할 재배 작업과 주의사항을 정리했습니다. 봄 (3월~5월) - 파종과 밭 준비 봄은 새로운 시작을 알리는 계절입니다. 파종 준비: 토양을 정비하고, 적절한 품종을 선택하세요. 지역별 기후에 맞는 파종 시기를 확인하고 늦서리 피해를 주의합니다. 밭 관리: 밭갈이와 비료 시비를 통해 토양의 영양 상태를 개선하세요. 잡초 제거도 필수입니...'/>





            </div>
        </>
    )
}

export default Community;