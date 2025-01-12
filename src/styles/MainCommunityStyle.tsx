//홈화면에 있는 커뮤니티 스타일
import styled from "styled-components";
import { AiFillLike } from "react-icons/ai";
import { MdModeComment } from "react-icons/md";

export const StyledLike = styled(AiFillLike)`
    color:rgba(206, 206, 206, 1);
    width:13.05px;
    height:13.26px;
`
export const StyledComment = styled(MdModeComment)`
    color:rgba(206, 206, 206, 1);
    width:12px;
    height:14px;
`

export const Title = styled.div`
    width:1206px;
    padding-left:360px;
    display:flex;
    justify-content:space-between;
    h2{
        font-family:'PretendardSemiBold';
        font-size:26px;
        margin:0;
    }
`
export const ViewAll = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    h4{
        font-family:'PretendardMedium';
        margin:0;
        font-size:16px;
        line-height:24px;
        color:rgba(0, 160, 94, 1);
    }
    p{
        margin:0;
        width:20px;
        height:20px;
        color:rgba(0, 160, 94, 1);
    }
`
export const CategoryWrapper = styled.div`
    padding-left:361px;
    width:353px;
    height:36px;
    display:flex;
    gap:10px;
    padding-top:79px;
    
`
export const Category = styled.div`
    margin:0;
    min-width:68px;
    width:fit-content;
    height:36px;
    border-radius:71.01px;
    background-color:rgba(0, 160, 94, 1);
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    p{
        color:rgba(255, 255, 255, 1);
        font-size:16px;
        font-family:'PretendardRegular';
        white-space:nowrap;
        margin:0;
        height:24px;
        padding-left:20px;
        padding-right:20px;
    }
`
export const Feeds = styled.div`
    margin-left:362px;
    margin-top:16px;
    margin-bottom:0px;
    width:1196px;
    height:auto;
`

export const GreenBox = styled.div`
    width:fit-content;
    min-width:45px;
    padding: 0 10px;
    height:26px;
    background-color:rgba(0, 160, 94, 0.1);
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:4px;

    p{
        color:rgba(0, 160, 94, 1);
        font-size:12px;
        font-family:'PretendardSemiBold'; 
        line-height:14.32px;
        white-space: nowrap;
    }
`
export const Headline = styled.div`
    display:flex;
    align-items:center;
    gap:5px;
    font-family:'PretendardSemiBold';
    height:54px;
    font-size:18px;
    line-height:29.88px;
    margin:0;
    cursor:pointer;
    h2{
        
        color:rgba(0, 160, 94, 1);
    }
`
export const Content = styled.div`
    padding:0;
    margin:0;
    p{
        margin:0;
        font-size:16px;
        font-family:'PretendardMedium';
        color:rgba(94, 94, 94, 1);
    }
`
export const Interactions = styled.div`
    display:flex;
    gap:6px;
    align-items:center;
    p{
        color:rgba(142, 142, 142, 1);
        font-size:12px;
        font-family:'PretendardRegular';
        line-height:14.32px;
    }
`

export const DividingLine = styled.div`
    width:1196px;
    height:1px;
    background-color:rgba(206, 206, 206, 1);
    margin-top:6px;
`