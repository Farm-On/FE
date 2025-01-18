import styled from "styled-components";
import Star from '../assets/Star.svg?react';

interface ExpertProps {
    name: string;
    product: string;
    star: number;
    years: number;
    url: string | undefined;
}

export const ExpertCard = ({ name, product, star, years, url }: ExpertProps) => {
    return (
   
            <Card className="card">
                <CardContainer>
                    <ExpertImg src={url} />
                    <Gradient></Gradient> {/*그라디언트 */}

                    <Information>
                        <h1>{name}</h1>
                        <h3>{product}</h3>
                        <StarInfo>
                            <StarWrap>
                                <StarImg />
                                <h2>{star}</h2>
                            </StarWrap>
                            <p>경력 {years}년</p>
                        </StarInfo>
                    </Information>
                </CardContainer>
            </Card>
      
    )
};

const Card = styled.div`
width: 290px;
height: 339px;
cursor:pointer;
@media (max-width: 1200px) {  
    width: 230px;
    height: 272px;
}

@media (max-width: 900px) {  
    width: 220px;
    height: 257px;
}
`


const CardContainer = styled.div`
width:100%;
height:100%;
position: relative;
`

const ExpertImg = styled.img`
width:100%;
height:100%;
object-fit:cover;
position:absolute;
top:0;
left:0;
border-radius: 10px;
`
const Gradient = styled.div`
position:absolute;
border-radius: 10px;
bottom:0;
left:0;
width: 100%;
height: 50%;  /* 그라디언트가 아래쪽 절반을 차지하도록 */
background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.5));
`

const Information = styled.div`
position:absolute;
top:70%;
left:7.5%;

h1{
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    color:rgba(255, 255, 255, 1);
    margin:0;
}
h3{
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    color:rgba(255, 255, 255, 1);
    margin:0;
}
`

const StarInfo = styled.div`
display:flex;
align-items:center;
gap:12px;
margin-top:6px;
height:24px;
p{
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color:rgba(237, 237, 237, 1);

}
h2{
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color:rgba(255, 255, 255, 1);

}
`

const StarWrap = styled.div`
display:flex;
align-items:center;
gap:2px;
`

const StarImg = styled(Star)`
width: 18px;
height: 18px;

`