import styled from "@emotion/styled";

export const Title = styled.div`
width:118px;
height:51px;
padding-left: 25vw;
padding-top: 11vw;
h2{
color: #000;
font-family: 'PretendardMedium';
font-size: 34px;
line-height: 150%; /* 51px */
margin:0;
}
`
export const Item = styled.div<{isSelected:boolean}>`
display: flex;
padding: 18px 160px 18px 24px;
align-items: center;
gap: 10px;
border-radius: 10px;
background:${(props)=>(props.isSelected ? '#00BA6D' : '')};
cursor:pointer;
p{
color: ${(props)=>(props.isSelected ? 'rgba(255, 255, 255, 1)' : '#5D5D5D')};
font-family: 'PretendardMedium';
font-size: 20px;
line-height: 150%; /* 30px */
margin:0;
min-width:52px;
width:fit-content;
white-space:nowrap;
}
`
export const Category = styled.div`
padding-left: 25vw;
padding-top: 3.6vw;
display:flex;
flex-direction:column;
gap:1px;
`
export const FilterChip = styled.div`
display: flex;
padding: 6px 14px 6px 16px;
align-items: center;
justify-content:center;
gap: 4px;
border-radius: 66px;
border: 0.7px solid #C1C1C1;
width:48px;
height:27px;
color: #000;
text-align: center;
font-family: 'PretendardRegular';
font-size: 16px;
line-height: 166%; /* 26.56px */
margin:0;
position:absolute;
left: 11.8vw;
top: 23.6vw;
`