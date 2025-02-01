import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 40px 20px;

  @media (max-width: 1024px) {
    padding: 30px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 34px;
  font-weight: 600;
  color: black;
  margin-bottom: 52px;
  margin-right: 850px;

  @media (max-width: 1024px) {
    font-size: 30px;
    margin-right: 720px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin-right: 470px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-right: 200px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  justify-content: center;
  align-content: center;

  @media (max-width: 1024px) {
    max-width: 850px;
  }

  @media (max-width: 480px) {
  }
`;

export const Sidebar = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: sticky;
  top: 100px;
  height: fit-content;
  margin-right: 110px;

  @media (max-width: 1024px) {
    margin-right: 80px;
  }

  @media (max-width: 768px) {
    margin-right: 60px;
    width: 180px;
  }

  @media (max-width: 480px) {
    width: 60px;
    margin-left: 30px;
  }
`;

export const SidebarItem = styled.div<{ isActive: boolean }>`
  background: ${({ isActive }) => (isActive ? '#00BA6D' : 'transparent')};
  color: ${({ isActive }) => (isActive ? 'white' : '#5D5D5D')};
  font-size: 20px;
  font-weight: ${({ isActive }) => (isActive ? '600' : '400')};
  padding: 12px;
  border-radius: 8px;
  text-align: left;
  width: 200px;
  height: 66px;
  margin-bottom: 10px;
  transition: background 0.3s;
  font-family: 'PretendardSemiBold';

  @media (max-width: 1024px) {
    font-size: 18px;
    width: 180px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    width: auto;
    min-width: 120px;
    height: auto;
    text-align: center;
    padding: 10px 15px;
    margin-bottom: 0;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    min-width: 80px;
    padding: 8px 8px;
  }
`;

export const CategoriesWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 20px;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

export const CategorySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CategoryTitle = styled.h2`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  color: black;
  font-family: 'PretendardSemiBold';
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    font-size: 18px;
    margin-bottom: 35px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

export const Icon = styled.img`
  width: 34px;
  height: 34px;
  margin-right: 10px;

  @media (max-width: 1024px) {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
  }

  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
  }
`;

export const SubcategoryContainer = styled.div`
  display: grid;
  grid-template-columns: 180px 180px;
  gap: 8px 300px;
  width: fit-content;
  margin-bottom: 84px;

  @media (max-width: 1024px) {
    grid-template-columns: 180px 180px;
    gap: 8px 150px;
    margin-bottom: 70px;
  }

  @media (max-width: 768px) {
    gap: 8px 50px;
    width: 100%;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    gap: 8px 20px;
    margin-bottom: 20px;
  }
`;

export const SubcategoryRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SubcategoryItem = styled.span`
  font-size: 18px;
  font-family: 'PretendardRegular';
  font-weight: 400;
  color: #2c2c2c;
  margin-bottom: 48px;

  @media (max-width: 1024px) {
    font-size: 17px;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;
