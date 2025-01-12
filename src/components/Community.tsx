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
                <CommunityFeed/>
                <CommunityFeed/>
                <CommunityFeed/>




            </div>
        </>
    )
}

export default Community;