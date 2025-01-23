import styled from "@emotion/styled";



export const Title = styled.div`
height:100px;
background-color:rgba(255, 255, 255, 1);
padding-left:360px;
h2{
    margin:0;
}
`
export const Wrapper = styled.div`
display:flex;
align-items:center;
`
export const Category = styled.div`
display:flex;
align-items:center;
gap:2px;
p{
    color:rgba(87, 87, 87, 1);
}
`

export const Process = styled.div`
padding-left:1008px;
p{
    margin:0;
    color:rgba(87, 87, 87, 1);
}
`

export const Container = styled.div`
width:100%;
height:100%;
//background-color:#D9D9D9; 배경색을 모르겠음
`
export const Bubble = styled.div`
background-color:rgba(198, 242, 228, 1);
min-width:174px;
width:fit-content;
height:30px;
padding: 16px 30px 16px 30px;
gap: 10px;
border-radius: 0px 16px 16px 16px;
display:flex;
align-items:center;
justify-content:center;
font-size:18px;
font-family:'Pretendard'
color:rgba(44, 44, 44, 1);
`
export const Chip = styled.div<{isSelected:boolean}>`
min-width: 60px;
width:fit-content;
height:22px;
padding: 10px 20px 10px 20px;
gap: 10px;
border-radius: 60px;
border: 1px solid ${(props)=> (props.isSelected ? 'rgba(0, 160, 94, 1)' : 'rgba(183, 183, 183, 1)')};
color:${(props)=> (props.isSelected ? 'rgba(0, 160, 94, 1)' : 'rgba(93, 93, 93, 1)')};
font-size:16px;
font-family:'Pretendard';
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
`
export const Chips = styled.div`
width:1200px;
display:flex;
gap:16px;
padding-left:6px;
padding-top:50px; //임시패딩값
`
export const DividingLine = styled.div`
width: 1200px;
height: 1.5px;
background-color: rgba(206, 206, 206, 1);
margin: 14px 0;
margin-top:100px; //임시 값
margin-bottom:40px; //임시 값
`;

export const Button = styled.div`
width: 98px;
height: 30px;
padding-top: 2445px;
padding: 18px 160px 18px 160px;
gap: 10px;
border-radius: 16px;
background-color:rgba(0, 160, 94, 1);
font-size:18px;
color:rgba(255, 255, 255, 1);
display:flex;
align-items:center;
justify-content:center;
white-space: nowrap;
`

export const InputContainer = styled.div`
display:grid;
grid-template-columns:repeat(2, 1fr);
width:594px;
height: 486px;
gap:30px;
padding-top:40px;
`

export const MinBudget = styled.input`
width: 246px;
height: 24px;
//left: 6px;
padding: 10px 160px 10px 16px;
gap: 10px;
border-radius: 8px;
border: 0.6px solid rgba(217, 217, 217, 1);
font-size:16px;
color:rgba(217, 217, 217, 1);
`
export const MaxBudget = styled.input`
width: 246px;
height: 24px;
//left: 6px;
padding: 10px 160px 10px 16px;
gap: 10px;
border-radius: 8px;
border: 0.6px solid rgba(217, 217, 217, 1);
font-size:16px;
color:rgba(217, 217, 217, 1);
`
export const Apply = styled.div`
width: 28px;
height: 24px;
//top: 204px;
//left: 576px;
padding: 10px 20px 10px 20px;
border-radius: 8px;
border: 0.6px solid rgba(217, 217, 217, 1);
display:flex;
justify-content:center;
align-items:center;
color:rgba(217, 217, 217, 1);
font-size:16px;
white-space:nowrap;
`

export const PostTitle = styled.input`
width: 1194px;
height: 64px;
border-radius: 8px ;
border: 1px solid rgba(142, 142, 142, 1);
padding-left:16px;
display:flex;
justify-content:center;
align-items:center;
font-size:16px;
font-family:'PretendardRegular'
`


export const PostContent = styled.textarea`
  width:1194px;
  height: 172px;
  border-radius: 8px;
  border: 1px solid rgba(142, 142, 142, 1);
  padding-left: 16px;
  padding-top:24px;
  font-size: 16px;
  font-family: 'PretendardRegular';
  resize: none;
`;



export const TitleText = styled.div`
`

export const ContentText = styled.div`
`