import * as RE from '../../styles/pages/RequestEstimate';
import HomeIcon from '../../assets/icons/Home.svg?react';
import GreyRightIcon from '../../assets/icons/GreyRight.svg?react';
import CameraIcon from '../../assets/icons/camera.svg?react';
import XIcon from '../../assets/icons/x.svg?react';
import { useState } from 'react';
import { EstimateBudget } from '@/components/EstimateBudget';
import { ChoiceCity } from '@/components/ChoiceCity';
import { StateScroll } from '@/components/StateScroll';
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
    //const [titleLength, setTitleLength] = useState<number>(0);
    //const [contentLength, setContentLength] = useState<number>(0);
    const [titleValue,setTitleValue] = useState<string>('');
    const [contentValue,setContentValue] = useState<string>('');
    const [isdisabled,setIsdisabled] = useState<boolean>(true);
    const [isChecked,setIsChecked] = useState<string>(''); //선택된 예산

    const handleChipClick = (id:string)=>{
        setSelected(id)
    };

    const handleValue = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const newText = e.target.value;
        if(newText.length <= 20){
            setTitleValue(newText)
        }
    };
    const handleContentValue = (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        const newText = e.target.value;
        if(newText.length <= 3000){
            setContentValue(newText)
        }
    };
    
    const handleMoney = (value:string)=>{
        setIsChecked(value);
        setIsdisabled(value !== '직접입력')
    };



    return(
        <RE.PageWrapper>
            <RE.CenteredContainer>
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
                <div>

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
                        <StateScroll/>
                        <RE.DividingLine/>
                    </div>


                    <div>
                        <RE.Bubble>컨설팅 위치는 어디인가요?</RE.Bubble>
                        <RE.CancleX>
                            <RE.Chip isSelected={true}>
                                경기 이천시
                                <div style={{width:'20px',height:'20px'}}>
                                    <XIcon style={{paddingTop:'1px'}}/>
                                </div>
                            </RE.Chip>
                        </RE.CancleX>
                    
                        <div style={{paddingBottom:'18px',paddingLeft:'6px'}}>
                            <ChoiceCity/>
                        </div>
                        <RE.DividingLine/>
                    </div>

                    <div>
                        <RE.Bubble>예산은 어느 정도인가요?</RE.Bubble>
                        <RE.InputContainer>
                            <EstimateBudget id='10~50' value='10~50' label='10만원 ~ 50만원' checked={isChecked ==='10~50'} onChange={()=>handleMoney('10~50')}/>
                            <EstimateBudget id='50~100' value='50~100' label='50만원 ~ 100만원' checked={isChecked ==='50~100'} onChange={()=>handleMoney('50~100')}/>
                            <EstimateBudget id='100~200' value='100~200' label='100만원 ~ 200만원' checked={isChecked ==='100~200'} onChange={()=>handleMoney('100~200')}/>
                            <EstimateBudget id='200~500' value='200~500' label='200만원 ~ 500만원' checked={isChecked ==='200~500'} onChange={()=>handleMoney('200~500')}/>
                            <EstimateBudget id='500~1000' value='500~1000' label='500만원 ~ 1,000만원' checked={isChecked ==='500~1000'} onChange={()=>handleMoney('500~1000')}/>
                            <EstimateBudget id='1000이상' value='1000이상' label='1,000만원 이상' checked={isChecked ==='1000이상'} onChange={()=>handleMoney('1000이상')}/>
                            <EstimateBudget id='직접입력' value='직접입력' label='직접입력' checked={isChecked ==='직접입력'} onChange={()=>handleMoney('직접입력')}/>
                        </RE.InputContainer>

                        <RE.TypeBudget>
                            <RE.MinBudget placeholder='500,000' disabled={isdisabled}></RE.MinBudget>
                            <p style={{width:'8px'}}>-</p>
                            <RE.MaxBudget placeholder='50,000,000' disabled={isdisabled}></RE.MaxBudget>
                            <RE.Apply>적용</RE.Apply>
                        </RE.TypeBudget>
                        <RE.DividingLine/>
                    </div>



                    <div>
                        <RE.Bubble>해당 컨설팅에 대해 자세히 설명해주세요.</RE.Bubble>
                        <div style={{display:'flex', flexDirection:'column', gap:'18px', paddingTop:'40px',paddingLeft:"6px"}}>
                            <div>
                                <RE.PostTitle 
                                type='text' 
                                placeholder='제목을 입력해주세요.'
                                value={titleValue}
                                onChange={handleValue}
                                />
                                <RE.TitleLength>{0}/20</RE.TitleLength>
                            </div>

                            <InputContainer>
                                <RE.PostContent
                                placeholder='내용을 입력해주세요.'
                                value={contentValue}
                                onChange={handleContentValue}
                                />
                                <div style={{position:'absolute',bottom:'20px',left:'26px'}}><CameraIcon/></div>
                            </InputContainer>
                            <RE.ContentLength>{0}/3000</RE.ContentLength>

                        </div>
                        <ApplyBtn>
                            <RE.Button>견적 조회하기</RE.Button>
                        </ApplyBtn>
                    </div>

                </div>
                </RE.Container>
            </RE.CenteredContainer>
        </RE.PageWrapper>

    )
}



const InputContainer = styled.div`
position: relative;
z-index:1;
width: 1194px;
`

const ApplyBtn = styled.div`
display:flex;
justify-content:center;
margin-bottom:350px;
margin-top:172px;
`