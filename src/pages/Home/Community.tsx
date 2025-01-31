//메인 커뮤니티 페이지!!
import * as CP from '../../styles/pages/Community.Style'; //머지 후 삭제하고 기존 스타일 파일 연결
import { useState } from 'react';
import { CommunitySearch } from '@/components/CommunitySearch';
import { CommuFeed } from '@/components/CommuFeed';
import { CommuQnAFeed } from '@/components/CommuQnAfeed';
import DownIcon from '../../assets/icons/chevronDown.svg?react';
import styled from '@emotion/styled';
import SamrtFarmImg from '../../assets/images/smartFarm.png';
import StrawberryImg from '../../assets/images/freshStrawberry.png';
import PlantImg from '../../assets/images/plant.png';
import CheckListImg from '../../assets/images/checkList.png';

interface Category {
    id: string;
    title: string;
  }
  
  const Categories: Category[] = [
    {
      id: '1',
      title: '인기글',
    },
    {
      id: '2',
      title: '전체',
    },
    {
      id: '3',
      title: '자유게시판',
    },
    {
      id: '4',
      title: 'Q&A',
    },
    {
      id: '5',
      title: '전문가 칼럼',
    }
  ];

export default function CommunityPage(){
    const [selectedCategory,setSelectedCategory] = useState<string>('1');
    const [searchValue,setSearchValue] = useState<string>(''); //검색된 값

    const handleCategoryClick = (id:string)=>{
        setSelectedCategory( id === selectedCategory ? '' : id )
    };
    return(
        <div style={{display:'flex'}}>
            <div className='left'>
                <CP.Title>
                    <h2>커뮤니티</h2>
                </CP.Title>
                <CP.Category>
                    {
                        Categories.map((item)=>{
                            return(
                                <div key={item.id} style={{width:'219px',height:'66px'}}>
                                    <CP.Item 
                                        onClick={()=>handleCategoryClick(item.id)}
                                        isSelected={item.id === selectedCategory}
                                        >
                                        <p>{item.title}</p>
                                    </CP.Item>
                                </div>
                            )
                        })
                    }
                </CP.Category>
            </div>

            <div className='right'>
                    <div style={{position:'relative'}}>
                        <CommunitySearch 
                            onChange={(e)=>setSearchValue(e.target.value)}
                            value={searchValue}
                        />
                        <CP.FilterChip>
                            <p>분야</p>
                            <StyledDownIcon/>
                        </CP.FilterChip>
                    </div>

                    <div style={{paddingTop:"30px"}}>
                        <div style={{paddingLeft:'7.3vw'}}>
                            <CommuQnAFeed
                                headline='사과 재배 시 수확량을 높이는 비결이 궁금합니다'
                                content='올해 사과 농사를 시작한 초보 농업인입니다. 사과 수확량을 높이기 위해 어떤 방법이 효과적인지 궁금합니다. 경험이 많으신 분들의 조언 부탁드립니다.'
                                category='QnA'
                                product='과일'
                                productDetail='사과'

                            />
                            <CommuQnAFeed
                                headline='농작물에 드론 방제 작업을 하고 싶은데, 얼만큼 효과가 있나요?'
                                content='드론 방제를 도입하려고 고민 중입니다. 실제로 드론을 사용해 방제 해보신 분들, 효과가 있었는지 궁금합니다. 또, 비용 대비 효율성은 어떤가요?'
                                category='QnA'
                                product='공통'
                                productDetail=''
                            
                            />
                            <CommuFeed
                                headline='스마트팜, 농업의 미래를 열다'
                                content='스마트팜은 농업에 첨단 기술을 접목시켜 생산성과 효율성을 높이는 혁신적인 방법입니다. 스마트팜 구축 시 가장 중요한 것은 초기 비용입니다. 온도, 습도, CO2 농도 등을 자동으로 조절할 수 있는 시스템과 센서, 자동화된 급수 시...'
                                category='전문가 칼럼'
                                product='공통'
                                productDetail=''
                                imgSrc={SamrtFarmImg}
                            />
                            <CommuQnAFeed
                                headline='딸기 수경재배 시 필수 장비와 초기 비용에 대해 여쭤봅니다.'
                                content='딸기 농사를 준비 중인 초보 귀농인입니다. 최근 수경재배가 토양재배보다 관리가 쉽고 수확량이 높다고 해서 관심을 갖고 있습니다. 하지만 시설 투자비용이 많이 들 것 같아 고민이 됩니다. 딸기 수경재배를 시작하려면 어떤 장비가 필수로 필요하고, 각 장비...'
                                category='QnA'
                                product='과일'
                                productDetail='기타'
                            />
                            <CommuFeed
                                headline='신선딸기 수출의 과제'
                                content='딸기 수출은 수출 농업의 중요한 분야로, 특히 신선한 품질을 유지하는 것이 가장 큰 과제입니다. 딸기는 온도와 습도에 매우 민감하여, 수확 후 처리와 포장이 매우 중요합니다. 이를 위해 냉장 물류 시스템과 적절한 포장 기술이 필수...'
                                category='전문가 칼럼'
                                product='과일'
                                productDetail='기타'
                                imgSrc={StrawberryImg}
                            />
                            <CommuFeed
                                headline='작물별 병해충 예방 및 대처법'
                                content='딸기 수출은 수출 농업의 중요한 분야로, 특히 신선한 품질을 유지하는 것이 가장 큰 과제입니다. 딸기는 온도와 습도에 매우 민감하여, 수확 후 처리와 포장이 매우 중요합니다. 이를 위해 냉장 물류 시스템과 적절한 포장 기술이 필수...'
                                category='전문가 칼럼'
                                product='공통'
                                productDetail=''
                                imgSrc={PlantImg}
                            />
                            <CommuFeed
                                headline='귀농인의 첫해, 꼭 알아야 할 체크리스트'
                                content='귀농은 새로운 삶의 시작이지만, 첫해에는 많은 준비와 노력이 필요합니다. 첫 번째로 중요한 것은 지역의 기후와 토양을 잘 파악하는 것입니다. 이를 바탕으로 적합한 작물을 선택하고, 재배 계획을 세우는 것이 필수적입니다. 또한...'
                                category='전문가 칼럼'
                                product='공통'
                                productDetail=''
                                imgSrc={CheckListImg}
                            />
                            <CommuFeed
                                headline='귀농인의 첫해, 꼭 알아야 할 체크리스트'
                                content='귀농은 새로운 삶의 시작이지만, 첫해에는 많은 준비와 노력이 필요합니다. 첫 번째로 중요한 것은 지역의 기후와 토양을 잘 파악하는 것입니다. 이를 바탕으로 적합한 작물을 선택하고, 재배 계획을 세우는 것이 필수적입니다. 또한...'
                                category='전문가 칼럼'
                                product='공통'
                                productDetail=''
                                imgSrc={CheckListImg}
                            />
                            <CommuFeed
                                headline='귀농인의 첫해, 꼭 알아야 할 체크리스트'
                                content='귀농은 새로운 삶의 시작이지만, 첫해에는 많은 준비와 노력이 필요합니다. 첫 번째로 중요한 것은 지역의 기후와 토양을 잘 파악하는 것입니다. 이를 바탕으로 적합한 작물을 선택하고, 재배 계획을 세우는 것이 필수적입니다. 또한...'
                                category='전문가 칼럼'
                                product='공통'
                                productDetail=''
                                imgSrc={CheckListImg}
                            />
                            <CommuFeed
                                headline='귀농인의 첫해, 꼭 알아야 할 체크리스트'
                                content='귀농은 새로운 삶의 시작이지만, 첫해에는 많은 준비와 노력이 필요합니다. 첫 번째로 중요한 것은 지역의 기후와 토양을 잘 파악하는 것입니다. 이를 바탕으로 적합한 작물을 선택하고, 재배 계획을 세우는 것이 필수적입니다. 또한...'
                                category='전문가 칼럼' 
                                product='공통'
                                productDetail=''
                                imgSrc={CheckListImg}
                            />
                        </div>
                    </div>
            </div>
        </div> 
    )
};

const StyledDownIcon = styled(DownIcon)`
width: 16px;
height: 16px;
`