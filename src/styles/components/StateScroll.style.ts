import styled from '@emotion/styled';

export const StateScroll = styled.div`
    display: flex;
    gap: 21px;
    position: fixed;  // absolute에서 fixed로 변경
    top: 385px;
    left: 1400px;
    z-index: 100;       
`
export const Line = styled.div`
width: 2px;
height: 196px;
background: linear-gradient(to bottom, rgba(0, 160, 94, 1), rgba(95, 212, 164, 1));
position:relative;
`

export const Circle = styled.div<{ section: string }>`
position:absolute;
top:20px;
left:-5px;
width: 12px;
height: 12px;
background-color:rgba(0, 160, 94, 1);
border-radius:100%;
transition: transform 0.3s ease;
transform: translateY(${props => {
    switch (props.section) {
        case 'category': return '0px';
        case 'location': return '48px';
        case 'budget': return '92px';
        case 'detail': return '135px';
        default: return '0px';
    }
}})
`

export const Section = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
gap:24px;
width:67px;
height:192px;
white-space:nowrap;
`
