//커뮤니티 글 낱개 컴포넌트
import * as C from '../styles/MainCommunityStyle';


function Feed(): JSX.Element {
    return (
        <>
            {/*일단 하드코딩*/}
            < C.Feeds >
                <C.GreenBox>
                    <p>Q&A</p>
                </C.GreenBox>

                
                <C.Headline>
                    <h2>Q.</h2>
                    <p>사과 재배 시 수확량을 높이는 비결이 궁금합니다</p>
                </C.Headline>

                <C.Content>
                    <p>올해 사과 농사를 시작한 초보 농업인입니다. 사과 수확량을 높이기 위해 어떤 방법이 효과적인지 궁금합니다. 경험이 많으신 분들의 조언 부탁드립니다.</p>
                </C.Content>
                

                <C.Interactions>
                    <C.StyledLike/> <span><p>0</p></span>
                    <C.StyledComment/> <span><p>0</p></span>
                </C.Interactions>

                <C.DividingLine/>
            </C.Feeds >
        </>
    )
}

export default Feed;