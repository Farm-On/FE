import * as SS from '../styles/components/StateScroll.style';
import styled from '@emotion/styled';

interface ClickProps{
    currentSection:'category'|'location'|'budget'|'detail';
    categoryOnClick:()=>void;
    locateOnClick:()=>void;
    budgetOnClick:()=>void;
    datailOnClick:()=>void;
}
export const StateScroll = ({categoryOnClick,locateOnClick,budgetOnClick,datailOnClick,currentSection}:ClickProps)=>{
    return(
        <SS.StateScroll>
            <SS.Line>
                <SS.Circle section={currentSection}/>
            </SS.Line>
            <SS.Section>
                <SectionText onClick={categoryOnClick} isSelected={currentSection === 'category'}>종류</SectionText>
                <SectionText onClick={locateOnClick} isSelected={currentSection === 'location'}>위치</SectionText>
                <SectionText onClick={budgetOnClick} isSelected={currentSection === 'budget'}>예산</SectionText>
                <SectionText onClick={datailOnClick} isSelected={currentSection === 'detail'}>상세 설명</SectionText>
            </SS.Section>
        </SS.StateScroll>
    )
};

const SectionText = styled.p<{ isSelected: boolean }>`
    color: ${props => props.isSelected ? 'rgba(0, 160, 94, 1)' : 'rgba(217, 217, 217, 1)'};
    cursor: pointer;
    transition: color 0.3s ease;
    font-size:18px;
    margin:0;
    font-family:'PretendardSemiBold';
`;
