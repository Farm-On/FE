import * as CC from '../styles/components/ChoiceCity.style';
import styled from '@emotion/styled';


export const ChoiceCity = ()=>{
    return(
        <CC.Container>
            <CC.Vertical/> 
            <CC.Horizon/>
            <City>
                <p style={{paddingLeft:"105px"}}>시/도</p>
                <p style={{paddingRight:"239px"}}>시/구/군</p>
            </City>

            <CC.ProvinceContainer>{/*세로 743/ 가로 250 */}
                <div>
                    <CC.ProvinceScroll>

                    </CC.ProvinceScroll>
                </div>
            </CC.ProvinceContainer>

            <CC.CityContainer> {/*세로 743 / 가로 554 */}
                <div>
                  
                    <CC.CityScroll>

                    </CC.CityScroll>
                </div>
            </CC.CityContainer>
        </CC.Container>
    )
};

const City = styled.div`
display:flex;
justify-content:space-between;
p{
    font-size:20px;
    font-family:'PretendardRegular';
}

`