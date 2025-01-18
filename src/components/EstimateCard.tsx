import styled from "styled-components";

interface CardProps{
    productName:string;
    product:string;
    date:string;
}

export const EstimateCard = ({productName,product,date}:CardProps) => {
    return (
        <div>
            <Card>
                <Content>
                    <h4>{productName} ({product})</h4>
                    <h4>신청 견적 보기</h4>
                    <p>{date}</p>
                </Content>
            </Card>
        </div>
    )
};

const Card = styled.div`
background-color:rgba(255, 255, 255, 1);
border:1px solid rgba(216, 216, 216, 1);
border-radius:10px;
width: 320px;
height: 122px;
top: 245px;
left: 360px;
`
const Content = styled.div`
    width:100px;
    height:83px;
    padding-left:30px;
    padding-top:20px;
    margin:0;
    line-height:21px;
    h4{
        font-size:16px;
        margin:0;

    }
    p{
        font-size:14px;
        color:rgba(142, 142, 142, 1);
    }
`


