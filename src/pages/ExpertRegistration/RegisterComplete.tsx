import * as R from '../../styles/pages/ExpertRegistration/RegisterComplete.style';
import { useNavigate } from 'react-router-dom';
import GreenCheck from '@/assets/icons/greenCheck.svg?react';
export default function RegisterComplete() {
  const navigate = useNavigate();
  const handleGoMain = () => {
    navigate('/');
  };

  return (
    <R.Container>
      <R.Main>
        <GreenCheck />
        <R.Title>전문가 등록 완료</R.Title>
        <R.SubTitle>환영합니다. FarmOn 전문가 등록이 완료되었습니다.</R.SubTitle>
        <R.SubTitle>지금 바로 당신의 농업 노하우를 나누어보세요!</R.SubTitle>
        <R.Button onClick={handleGoMain}>메인으로 가기</R.Button>
      </R.Main>
    </R.Container>
  );
}
