import { AiOutlineRight } from 'react-icons/ai';
import styled from 'styled-components';

export default function MyEstimatePage():JSX.Element{
    return(
        <>
           <div>
                <MyContainer>
                    <h2>내 견적</h2>
                    <ViewAll>
                        <h4>전체보기</h4>
                        <p><AiOutlineRight/></p>
                    </ViewAll>
                </MyContainer>

           </div>
        </>
    )
};


const MyContainer = styled.div`
    padding-top:164px;
    padding-left:360px;
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

const ViewAll = styled.div`
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
`;