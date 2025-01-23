import * as RE from '../../styles/pages/RequestEstimate';
import HomeIcon from '../../assets/icons/Home.svg?react';
import GreyRightIcon from '../../assets/icons/GreyRight.svg?react';
import CameraIcon from '../../assets/icons/camera.svg?react';
import { useState } from 'react';
import { EstimateBudget } from '@/components/EstimateBudget';
import styled from '@emotion/styled';

// interface REprops{
//     product:string;
//     pdName:string;
//     process:number;
// }

interface Category {
    id: string;
    title: string;
  }

const initialCategories: Category[] = [
    {
      id: '1',
      title: '작물관리',
    },
    {
      id: '2',
      title: '토양 및 환경관리',
    },
    {
      id: '3',
      title: '농업 경영',
    },
    {
      id: '4',
      title: '스마트팜',
    },
    {
      id: '5',
      title: '정책 및 지원사업',
    },
    {
      id: '6',
      title: '기타',
    },
];


export default function RequestEstimatePage():JSX.Element{
    const [selected,setSelected] = useState<string>('2');
    const handleChipClick = (id:string)=>{
        setSelected(id)
    };
    return(
        <div>
            <RE.Title>
                <h2>견적요청</h2>
                <RE.Wrapper>
                    <RE.Category>
                        <HomeIcon/>
                        <GreyRightIcon/>
                        <p>곡물</p>
                        <GreyRightIcon/>
                        <p>쌀</p>
                    </RE.Category>

                    <RE.Process>
                        <p>진행률 0%</p>
                    </RE.Process>
                </RE.Wrapper>
            </RE.Title>

            <RE.Container>
                <div style={{paddingLeft:'360px'}}>

                <div>
                    <RE.Bubble>어떤 컨설팅을 원하세요?</RE.Bubble>
                    <RE.Chips>
                        {initialCategories.map((category)=>{
                            return(
                                <div key={category.id}>
                                    <RE.Chip
                                    isSelected = {selected === category.id} 
                                    onClick={()=>handleChipClick(category.id)}>
                                    {category.title}
                                    </RE.Chip>
                                </div>
                            )
                        })}
                    </RE.Chips>
                    <RE.DividingLine/>
                </div>


                <div>
                    <RE.Bubble>컨설팅 위치는 어디인가요?</RE.Bubble>
                    <RE.DividingLine/>
                </div>

                <div>
                    <RE.Bubble>예산은 어느 정도인가요?</RE.Bubble>
                    <RE.InputContainer>
                        <EstimateBudget id='10~50' value='10~50' label='10만원 ~ 50만원'/>
                        <EstimateBudget id='50~100' value='50~100' label='50만원 ~ 100만원'/>
                        <EstimateBudget id='100~200' value='100~200' label='100만원 ~ 200만원'/>
                        <EstimateBudget id='200~500' value='200~500' label='200만원 ~ 500만원'/>
                        <EstimateBudget id='500~1000' value='500~1000' label='500만원 ~ 1,000만원'/>
                        <EstimateBudget id='1000이상' value='1000이상' label='1,000만원 이상'/>
                        <EstimateBudget id='직접입력' value='직접입력' label='직접입력'/>
                    </RE.InputContainer>
                    <div style={{display:'flex', gap:'10px',height:'44px'}}>
                        <RE.MinBudget placeholder='500,000'></RE.MinBudget>
                        <p style={{width:'8px'}}>-</p>
                        <RE.MaxBudget placeholder='50,000,000'></RE.MaxBudget>
                        <RE.Apply>적용</RE.Apply>
                    </div>
                    <RE.DividingLine/>
                </div>



                <div>
                    <RE.Bubble>해당 컨설팅에 대해 자세히 설명해주세요.</RE.Bubble>
                    <div style={{display:'flex', flexDirection:'column', gap:'18px', paddingTop:'40px',paddingLeft:"6px"}}>
                        <RE.PostTitle type='text' placeholder='제목을 입력해주세요.'/>
                        {/* <RE.TitleText>0/20</RE.TitleText> */}

                        <InputContainer>
                            <RE.PostContent placeholder='제목을 입력해주세요.'/>
                            <CameraIcon/>
                        </InputContainer>
                        {/* <RE.ContentText>0/3000</RE.ContentText> */}
                    </div>
                </div>

                <div style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
                    <RE.Button>견적 조회하기</RE.Button>
                </div>

                </div>
            </RE.Container>
        </div>
    )
}


const InputContainer = styled.div`
  position: relative;  
  width: 1194px;
`;

