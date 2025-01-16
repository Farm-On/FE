import { AiOutlineRight } from 'react-icons/ai';
import * as E from '../../styles/pages/MyEstimatePage.tsx';
import {EstimateCard} from '../../components/EstimateCard.tsx';
import AddBtn from '../../assets/addBtn.svg?react';

export default function MyEstimatePage(): JSX.Element {
    return (
        <>
            <E.Container> {/*전체 컨테이너*/}
                <div> {/*위에 내 견적*/}
                    <E.Title1>
                        <h2>내 견적</h2>
                        <E.ViewAll>
                            <h4>전체보기</h4>
                            <p><AiOutlineRight /></p>
                        </E.ViewAll>
                    </E.Title1>
                    <E.MyCards>
                        <EstimateCard/>
                        <E.AddCard>
                            <AddBtn/>
                            <p>새 견적 받아보기</p>
                        </E.AddCard>
                    </E.MyCards>
                    <E.DividingLine/>

                </div>
            </E.Container>
        </>
    )
};

