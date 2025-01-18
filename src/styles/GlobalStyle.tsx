import { createGlobalStyle } from 'styled-components';
import PretendardRegular from '../assets/fonts/Pretendard-Regular.woff';
import PretendardSemiBold from '../assets/fonts/Pretendard-SemiBold.woff';
import PretendardMedium from '../assets/fonts/Pretendard-Medium.woff';

const GlobalStyle = createGlobalStyle`
    @font-face{
        font-family:'PretendardRegular';
        src:url(${PretendardRegular}) format('woff');
        font-weight: 500;
    }

    @font-face{
        font-family:'PretendardSemiBold';
        src:url(${PretendardSemiBold}) format('woff');
        font-weight: 600;
    }
    @font-face{
        font-family:'PretendardMedium';
        src:url(${PretendardMedium}) format('woff');
        font-weight: 500;
    }


`

export default GlobalStyle;