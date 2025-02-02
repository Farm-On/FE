import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.div`
  width: 100%;
  max-width: 1028px;
  margin: 0 auto;
  padding: 16px 16px 60px;
  flex: 1;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 30px 40px 90px;
  }

  @media (min-width: 1024px) {
    padding: 40px 0 120px;
  }
`;

export const Title = styled.h1`
  font-family: 'PretendardSemiBold';
  font-size: 24px;
  line-height: 150%;
  color: #000000;
  margin: 0 0 24px 0;

  @media (min-width: 768px) {
    font-size: 30px;
    margin: 0 0 40px 0;
  }

  @media (min-width: 1024px) {
    font-size: 34px;
    margin: 0 0 52px 0;
  }
`;

export const SearchContainer = styled.div`
  width: 100%;
  height: 48px;
  background: #eeeeee;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
  margin-bottom: 32px;

  img {
    width: 20px;
    height: 20px;

    @media (min-width: 768px) {
      width: 24px;
      height: 24px;
    }

    @media (min-width: 1024px) {
      width: 32px;
      height: 32px;
    }
  }

  @media (min-width: 768px) {
    height: 60px;
    border-radius: 16px;
    padding: 0 20px;
    margin-bottom: 56px;
  }

  @media (min-width: 1024px) {
    height: 66px;
    border-radius: 18px;
    padding: 0 24px;
    margin-bottom: 72px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  font-family: 'PretendardMedium';
  font-size: 14px;
  line-height: 166%;
  padding-left: 12px;
  outline: none;

  @media (min-width: 768px) {
    font-size: 16px;
    padding-left: 16px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
    padding-left: 18px;
  }

  &::placeholder {
    color: #8e8e8e;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding: 0 4px;

  @media (min-width: 768px) {
    margin-bottom: 14px;
    padding: 0;
  }

  @media (min-width: 1024px) {
    margin-bottom: 16px;
  }
`;

export const TotalCount = styled.span`
  font-family: 'PretendardMedium';
  font-size: 14px;
  line-height: 150%;
  color: #5d5d5d;

  @media (min-width: 768px) {
    font-size: 15px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

export const UnreadFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 10px;
  }

  @media (min-width: 1024px) {
    gap: 12px;
  }
`;

export const UnreadFilterText = styled.span`
  font-family: 'PretendardMedium';
  font-size: 14px;
  line-height: 150%;
  color: #5d5d5d;
  white-space: nowrap;

  @media (min-width: 768px) {
    font-size: 15px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

export const ToggleSwitch = styled.div<{ isActive: boolean }>`
  width: 32px;
  height: 20px;
  background-color: ${(props) => (props.isActive ? '#00A05E' : '#EEEEEE')};
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s;

  @media (min-width: 768px) {
    width: 34px;
    height: 21px;
  }

  @media (min-width: 1024px) {
    width: 36px;
    height: 22px;
  }

  &:after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: white;
    border-radius: 50%;
    top: 2px;
    left: ${(props) => (props.isActive ? '14px' : '2px')};
    transition: left 0.2s;

    @media (min-width: 768px) {
      width: 17px;
      height: 17px;
      left: ${(props) => (props.isActive ? '15px' : '2px')};
    }

    @media (min-width: 1024px) {
      width: 18px;
      height: 18px;
      left: ${(props) => (props.isActive ? '16px' : '2px')};
    }
  }
`;

export const ChatRoomList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    gap: 10px;
    margin-bottom: 50px;
  }

  @media (min-width: 1024px) {
    gap: 12px;
    margin-bottom: 60px;
  }
`;

export const ChatRoomItem = styled.div`
  width: 100%;
  padding: 16px;
  background: #ffffff;
  border-radius: 14px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  gap: 12px;
  position: relative;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.03);

  @media (min-width: 768px) {
    padding: 25px;
    gap: 20px;
    border-radius: 18px;
  }

  @media (min-width: 1024px) {
    padding: 30px;
    gap: 24px;
    border-radius: 20px;
  }

  &:hover {
    background: rgba(249, 249, 249, 0.5);
  }
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  object-fit: cover;
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
    border-radius: 24px;
  }

  @media (min-width: 1024px) {
    width: 52px;
    height: 52px;
    border-radius: 26px;
  }
`;

export const InfoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    gap: 5px;
    margin-bottom: 12px;
  }

  @media (min-width: 1024px) {
    gap: 6px;
    margin-bottom: 14px;
  }
`;

export const UserName = styled.h2`
  font-family: 'PretendardSemiBold';
  font-size: 16px;
  line-height: 150%;
  color: #000000;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 22px;
  }
`;

export const Categories = styled.div`
  font-family: 'PretendardRegular';
  font-size: 13px;
  line-height: 150%;
  color: #666666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    font-size: 15px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

export const MessageSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e5e5e5;
  width: 100%;
  position: relative;

  @media (min-width: 768px) {
    margin-bottom: 12px;
    padding-bottom: 12px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 14px;
    padding-bottom: 14px;
  }
`;

export const LastMessage = styled.p`
  font-family: 'PretendardRegular';
  font-size: 14px;
  line-height: 150%;
  color: #2c2c2c;
  margin: 0;
  padding: 0;
  flex: 1;
  padding-right: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const UnreadBadge = styled.div`
  width: 24px;
  height: 24px;
  background: #00a05e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: 'PretendardMedium';
  font-size: 13px;
  position: absolute;
  right: 0;
  top: 0;

  @media (min-width: 768px) {
    width: 28px;
    height: 28px;
    font-size: 14px;
  }

  @media (min-width: 1024px) {
    width: 30px;
    height: 30px;
    font-size: 16px;
  }
`;

export const BottomInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Budget = styled.span`
  font-family: 'PretendardRegular';
  font-size: 13px;
  line-height: 150%;
  color: #666666;

  @media (min-width: 768px) {
    font-size: 15px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

export const Date = styled.span`
  font-family: 'PretendardRegular';
  font-size: 13px;
  line-height: 150%;
  color: #666666;

  @media (min-width: 768px) {
    font-size: 15px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-top: 24px;

  @media (min-width: 768px) {
    margin-top: 35px;
  }

  @media (min-width: 1024px) {
    margin-top: 40px;
  }
`;

export const PageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'PretendardMedium';
  font-size: 14px;
  color: #666666;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 15px;
  }

  @media (min-width: 1024px) {
    width: 32px;
    height: 32px;
    font-size: 16px;
  }

  &:hover:not(:disabled) {
    color: #000000;
  }
`;

export const PageNumber = styled.button<{ isActive: boolean }>`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${(props) => (props.isActive ? '#00A05E' : 'transparent')};
  color: ${(props) => (props.isActive ? '#ffffff' : '#666666')};
  border-radius: 4px;
  font-family: 'PretendardMedium';
  font-size: 14px;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 15px;
  }

  @media (min-width: 1024px) {
    width: 32px;
    height: 32px;
    font-size: 16px;
  }

  &:hover {
    background: ${(props) => (props.isActive ? '#00A05E' : '#f0f0f0')};
  }
`;
