import * as CM from '../styles/components/CommunityModal.style';
import styled from '@emotion/styled';
import XIcon from '../assets/icons/x.svg?react';
import LineIcon from '../assets/icons/ModalLine.svg?react';
import { useState } from 'react';


interface FieldProps {
    id: string;
    title: string;
    menu?:string|string[];
};

interface CommunityModalProps {
  closeModal: () => void;
};

const Field: FieldProps[] = [
    {
      id: '1',
      title: '공통',
      menu: '공통'
    },
    {
      id: '2', 
      title: '곡물',
      menu: ['전체','쌀', '보리', '옥수수', '콩', '기타 곡물']
    },
    {
      id: '3',
      title: '채소작물',
      menu: ['전체','고구마', '감자', '엽채류', '과채류', '버섯', '기타 뿌리채소', '기타 채소작물']
    },
    {
      id: '4',
      title: '과일',
      menu: ['전체','사과', '배', '감', '포도', '복숭아', '감귤', '기타 과일']
    },
    {
      id: '5',
      title: '특용',
      menu: ['전체','인삼', '약초', '섬유', '유지', '향신료', '기타 특용']
    },
    {
      id: '6',
      title: '화훼',
      menu: ['전체','절화 및 절엽', '분화 및 분재', '묘목', '기타 화훼']
    },
    {
      id: '7',
      title: '사료',
      menu: ['전체','목초', '기타 사료']
    },
    {
      id: '8',
      title: '기타',
      menu: ['전체','종지, 묘목', '기타 작물']
    }
  ];

  const categoryPositions: { [key: string]: number } = {
    '1': 0,      
    '2': 45,    
    '3': 100,     
    '4': 155,    
    '5': 200,   
    '6': 245,    
    '7': 289,  
    '8': 333     
  };


export const CommunityModal = ({ closeModal }: CommunityModalProps)=>{
    const [currentField,setCurrentField] = useState<string>('1');
    const [checkedItems, setCheckedItems] = useState<string[]>([]);
    const handleField = (id:string)=>{
        setCurrentField(id)
    };
    
    // 현재 선택된 카테고리의 메뉴 항목들을 찾습니다
    const currentMenu = Field.find(item => item.id === currentField)?.menu;

    const handleCheck = (menuItem: string) => {
        setCheckedItems(prev => {
          if (prev.includes(menuItem)) {
            return prev.filter(item => item !== menuItem);
          } else {
            return [...prev, menuItem];
          }
        });
      };

    return(
        <CM.ModalContainer>
            <Title>분야</Title>
            <StyledX onClick={closeModal}/>
            <CM.FieldTitle>
                {
                    Field.map((item)=>{
                        return(
                            <div key={item.id}>
                                <CM.EachTitle isSelected={currentField === item.id} onClick={()=>handleField(item.id)}>
                                    <p>{item.title}</p>
                                </CM.EachTitle>
                            </div>
                        )
                    })
                }
            </CM.FieldTitle>
            <LineIcon style={{position:'absolute',top:'92px'}}/>
            <ShortLine 
                isSelected={true} 
                currentField={currentField} 
            />
            <MenuContainer>
                {Array.isArray(currentMenu) ? (
                    currentMenu.map((menuItem, index) => (
                        <CheckboxContainer 
                            key={index} 
                            onClick={() => handleCheck(menuItem)}
                        >
                            <CustomCheckbox checked={checkedItems.includes(menuItem)} />
                            <MenuLabel checked={checkedItems.includes(menuItem)}>{menuItem}</MenuLabel>
                        </CheckboxContainer>
                    ))
                ) : (
                    <CheckboxContainer onClick={() => handleCheck(currentMenu || '')}>
                        <CustomCheckbox checked={checkedItems.includes(currentMenu || '')} />
                        <MenuLabel checked={checkedItems.includes(currentMenu || '')}>{currentMenu}</MenuLabel>
                    </CheckboxContainer>
                )}
            </MenuContainer>

            <CM.ApplyBtn>
                <CM.Btn onClick={closeModal}>적용하기</CM.Btn>
            </CM.ApplyBtn>
        </CM.ModalContainer>
    )
};

const Title = styled.p`
font-family: 'PretendardMedium';
font-size: 18px;
line-height: 166%; /* 29.88px */
color:rgba(44, 44, 44, 1);
position:absolute;
top:16px;
left:20px;
margin:0;
`
const StyledX = styled(XIcon)`
position:absolute;
top:19px;
right:16px;
cursor:pointer;
`
const ShortLine = styled.div<{ isSelected: boolean; currentField: string }>`
width: 34px;
height:2px;
flex-shrink: 0;
background-color: #00A05E;;
position:absolute;
top:92px;
left:16px;
transform:${props => `translateX(${categoryPositions[props.currentField]}px)`};
transition: 0.4s ease;
`

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`;

const CustomCheckbox = styled.div<{ checked: boolean }>`
  width: 18px;
  height: 18px;
  border: 1.5px solid ${props => props.checked ? '#00A05E' : '#D9D9D9'};
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  background-color: ${props => props.checked ? 'rgba(0, 160, 94, 1)' : 'white'};

  &:after {
    content: '✓';
    display: ${props => props.checked ? 'block' : 'none'};
    color: white;
  }
`;

const MenuLabel = styled.span<{ checked: boolean }>`
  font-family: 'PretendardRegular';
  font-size: 14px;
  color: ${props => props.checked ? 'rgba(0, 160, 94, 1)' : 'rgba(142, 142, 142, 1)'};
  font-family: 'PretendardRegular';
`;

const MenuContainer = styled.div`
  position: absolute;
  top: 110px;
  left: 18px;
  right: 20px;
  max-height: 400px;
  overflow-y: auto;
  padding: 10px 0;
`;