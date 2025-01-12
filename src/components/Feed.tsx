//커뮤니티 글 낱개 컴포넌트
import * as C from '../styles/MainCommunityStyle';

interface FeedProps{
    topic:string;
    headline:string;
    content:string;
}

function Feed({topic,headline,content}:FeedProps): JSX.Element {
    return (
        <>
        
            < C.Feeds >
                <C.GreenBox>
                    <p>{topic}</p>
                </C.GreenBox>

                
                <C.Headline>
                    <h2>Q.</h2>
                    <p>{headline}</p>
                </C.Headline>

                <C.Content>
                    <p>{content}</p>
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