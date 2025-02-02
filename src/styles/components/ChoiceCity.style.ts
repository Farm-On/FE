import styled from "@emotion/styled";

export const Container = styled.div`
width: 804px;
height: 381px;
border: 1px solid rgba(174, 174, 174, 1);
border-radius:8px;
position:relative;
margin-top:10px;
`
export const Vertical = styled.div`
position:absolute;
left:257px;
border: 1px solid rgba(174, 174, 174, 1);
height:100%;
`
export const Horizon = styled.div`
position:absolute;
top:61px;
border: 1px solid rgba(174, 174, 174, 1);
width:100%;
`

export const CityContainer = styled.div`
width:257px;
height:315px;
position:absolute;
left:0;
top:63px;
overflow:hidden;
overflow-y: auto; /* 세로 스크롤 활성화 */

  /* 크롬, 사파리(Webkit)용 스크롤 스타일 */
  &::-webkit-scrollbar {
    width: 6px; /* 스크롤바 너비 */
    height:140px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #7E7E7E; /* 스크롤바 색상 */
  }
  &::-webkit-scrollbar-track {
    background-color: none; /* 스크롤 트랙 색상 */
    padding:0;
  }
`
export const DistrictsContainer = styled.div`
width:540px;
height:320px;
position:absolute;
left:260px;
top:63px;
overflow:hidden;
overflow-y: auto; /* 세로 스크롤 활성화 */
  /* 크롬, 사파리(Webkit)용 스크롤 스타일 */
  &::-webkit-scrollbar {
    width: 6px; /* 스크롤바 너비 */
    height:140px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #7E7E7E; /* 스크롤바 색상 */
  }
  &::-webkit-scrollbar-track {
    background-color: none; /* 스크롤 트랙 색상 */
    padding:0;
  }
`
export const CityItem = styled.div<{isSelected:boolean}>`
display: flex;
width: 250px;
height: 80px;
//padding: 24px 107px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
background:${(props)=>(props.isSelected ? '#F9F9F9': '#E8ECEA')};
color: ${(props)=>(props.isSelected ? 'rgba(0, 0, 0, 1)': 'rgba(142, 142, 142, 1)')};
text-align: center;
font-family: 'PretendardRegular';
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 150%; /* 30px */
cursor:pointer;
`


export const DistrictItem = styled.div<{isSelected:boolean}>`
min-width: 32px;
width:fit-content;
height: 36px;
display: flex;
flex-direction:column;
align-items: center;
justify-content: start;
color:${(props)=>(props.isSelected ? 'rgba(0, 0, 0, 1)': 'rgba(142, 142, 142, 1)')};
font-family: Pretendard;
font-size: 18px;
line-height: 166%;
padding-left:33px;
padding-top:12px;
padding-bottom:5px;
cursor:pointer;
`


export const CityList = styled.div`


`





export const DistrictsList = styled.div`

`