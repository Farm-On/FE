import styled from "styled-components";


export const Container = styled.div`
    padding-left:360px;
    //background-color:rgba(249, 249, 249, 1);
`
export const Title1 = styled.div`
    padding-top:84px;
    width:1200px;
    height:51px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0px;
    h2{
    font-family: 'PretendardSemiBold';
    font-size: 34px;
    margin: 0;
    }
`

export const ViewAll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  h4 {
    font-family: 'PretendardMedium';
    margin: 0;
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 160, 94, 1);
  }
  p {
    margin: 0;
    width: 20px;
    height: 20px;
    color: rgba(0, 160, 94, 1);
  }
`
export const MyCards = styled.div`
  display:flex;
  gap:20px;
  margin-top:30px;
`
export const AddCard = styled.div`
  background-color:rgba(255, 255, 255, 1);
  //border:1px dashed rgba(187, 187, 187, 1);
  background-image: url("data:image/svg+xml,%3Csvg width='320' height='122' viewBox='0 0 320 122' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='0.5' width='319' height='121' rx='9.5' fill='white' stroke='%23BBBBBB' stroke-dasharray='6 6'/%3E%3C/svg%3E");
  width: 320px;
  height: 122px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  p{
    font-size:14px;
    margin-top:7px;
  }
`

export const DividingLine = styled.div`
  width: 1200px;
  height: 0.7px;
  background-color: rgba(187, 187, 187, 1);
  margin-top:110px;
`;