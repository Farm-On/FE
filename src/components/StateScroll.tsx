import * as SS from '../styles/components/StateScroll.style';
//import styled from '@emotion/styled';

export const StateScroll = ()=>{
    return(
        <SS.StateScroll>
            <SS.Line>
                <SS.Circle/>
            </SS.Line>
            <SS.Section>
                <p>종류</p>
                <p>위치</p>
                <p>예산</p>
                <p>상세 설명</p>
            </SS.Section>
        </SS.StateScroll>
    )
};