import styled from "@emotion/styled";

export const ModalContainer = styled.div`
width: 450px;
height: 600px;
border-radius: 10px;
background: #FFF;
position:relative;
  @media (max-width: 768px) {
    width: 450px; 
    height: 500px;
  }

  @media (max-width: 480px) {
    width: 400px;  
    height: 500px;
  }
`
export const FieldTitle = styled.div`
width:364px;
height:21px;
display:flex;
justifycontent:center;
gap:20px;
position:absolute;
top:66px;
left:20px;
p{
color:#8E8E8E;
font-family: 'PretendardRegular';
font-size: 14px;
line-height: 150%; /* 21px */
margin:0;
cursor:pointer;
}
`
export const EachTitle = styled.div<{isSelected:boolean}>`
p{
color:${(props)=>(props.isSelected ? 'rgba(0, 160, 94, 1)':'#8E8E8E')};
font-family: 'PretendardRegular';
font-size: 14px;
line-height: 150%; /* 21px */
margin:0;
cursor:pointer;
}

`
export const ApplyBtn = styled.div`
width:450px;
height:68px;
position:absolute;
top:532px;
`
export const Btn = styled.button`
display: flex;
justify-content: center;
align-items: center;
padding: 8px 16px;
//gap: 10px;
border:none;
border-radius: 10px;
background: #00A05E;
position:absolute;
right:28px;
cursor:pointer;

  @media (max-width: 768px) {
    right:50px;
    bottom:130px;
  }

  @media (max-width: 480px) {
    right:70px;
    bottom:130px;
  }

color:rgba(255, 255, 255, 1);
font-family: 'PretendardMedium';
font-size: 16px;
font-style: normal;
line-height: 150%; /* 24px */
`