import styled from "@emotion/styled";
import SearchIcon from '../assets/icons/search.svg?react';


interface CSProps{
    onChange:(e: React.ChangeEvent<HTMLInputElement>)=>void;
    value:string;
}

export const CommunitySearch = ({onChange,value}:CSProps)=>{
    return(
        <div style={{paddingLeft: "7.3vw", paddingTop: '17.5vw'}}>
            <div style={{position:'relative'}}>
                <Container
                placeholder='찾고싶은 글을 검색하세요'
                onChange={onChange}
                value={value}
                type="text"
                >
                </Container>
                <StyledIcon />
            </div>
        </div>
        )

}

const Container = styled.input`
width: 876px;
height: 66px;
flex-shrink: 0;
border-radius: 18px;
background: #EEE;
border:none;
padding-left:80px;
color: var(--gray-400, #8E8E8E);
font-family: 'PretendardRegular';
font-size: 18px;
line-height: 166%; /* 29.88px */
text-transform: uppercase;
`
const StyledIcon = styled(SearchIcon)`
width: 32px;
height: 32px;
position:absolute;
left:30px;
top:17px;
`