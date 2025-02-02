import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px - 180px);
  display: flex;
  justify-content: center;
  background: #f9f9f9;
`;

export const ChatContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 1920px;
`;

export const FixedHeader = styled.div`
  position: sticky;
  top: 0;
  background: #ffffff;
  z-index: 10;
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
`;

export const Header = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;

  @media (min-width: 768px) {
    padding: 20px 40px;
  }

  @media (min-width: 1024px) {
    padding: 20px 360px;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 16px;
  }
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
    border-radius: 25px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const UserName = styled.span`
  font-family: 'PretendardSemiBold';
  font-size: 20px;
  color: #000000;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

export const ExpertBadge = styled.div`
  padding: 2px 8px;
  background: #21d38a;
  border-radius: 4px;
  font-family: 'PretendardSemiBold';
  font-size: 12px;
  color: #ffffff;
`;

export const LastSeen = styled.span`
  display: none;
  font-family: 'PretendardRegular';
  font-size: 16px;
  color: #5d5d5d;
  margin-left: 10px;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const ViewEstimateButton = styled.button`
  padding: 8px 16px;
  background: #c6f2e4;
  border-radius: 6px;
  border: none;
  font-family: 'PretendardMedium';
  font-size: 12px;
  color: #00a05e;
  cursor: pointer;
  white-space: nowrap;

  @media (min-width: 768px) {
    padding: 10px 22px;
    font-size: 14px;
  }
`;

export const MessageList = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  overflow-y: auto;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    padding: 20px 40px;
  }

  @media (min-width: 1024px) {
    padding: 20px 360px;
  }
`;

export const MessageContainer = styled.div<{ isMe: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.isMe ? 'flex-end' : 'flex-start')};
  align-items: flex-end;
  gap: 12px;
  width: 100%;
`;

export const MessageContent = styled.div<{ isMe: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isMe ? 'flex-end' : 'flex-start')};
  gap: 8px;
  max-width: min(610px, 80%);
`;

export const MessageText = styled.div<{ isMe: boolean }>`
  padding: 16px;
  background: ${(props) => (props.isMe ? '#00A05E' : '#D9D9D9')};
  border-radius: ${(props) => (props.isMe ? '20px 20px 0px 20px' : '20px 20px 20px 0px')};
  font-family: 'PretendardRegular';
  font-size: 14px;
  line-height: 150%;
  color: ${(props) => (props.isMe ? '#FFFFFF' : '#000000')};
  width: fit-content;
  word-break: break-word;

  @media (min-width: 768px) {
    padding: 20px;
    font-size: 16px;
  }
`;

export const MessageTime = styled.span`
  font-family: 'PretendardMedium';
  font-size: 12px;
  color: #8e8e8e;
`;

export const InputContainer = styled.div`
  margin: 0 20px 20px;
  background: #ffffff;
  border-radius: 20px;
  padding: 16px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.03);
  position: relative;
  width: calc(100% - 40px);
  box-sizing: border-box;

  @media (min-width: 768px) {
    margin: 0 40px 30px;
    padding: 20px;
    gap: 16px;
    width: calc(100% - 80px);
  }

  @media (min-width: 1024px) {
    margin: 0 360px 40px;
    width: calc(100% - 720px);
  }
`;

export const Input = styled.input`
  flex: 1;
  height: 24px;
  border: none;
  font-family: 'PretendardMedium';
  font-size: 14px;
  color: #000000;
  outline: none;
  order: 2;
  margin-left: -60px;
  width: 100%;
  box-sizing: border-box;
  background: transparent;
  position: relative;

  @media (min-width: 768px) {
    font-size: 16px;
    margin-left: -80px;
  }

  &::placeholder {
    color: #c8c8c8;
  }
`;

export const IconButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
  order: 1;
  margin-top: 24px;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    gap: 12px;
  }
`;

export const IconButton = styled.button`
  width: 20px;
  height: 20px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }

  svg {
    width: 18px;
    height: 18px;
    color: #666666;

    @media (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
`;

export const SendButton = styled.button`
  width: 26px;
  height: 26px;
  background: #e9e9e9;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  order: 3;
  margin-top: 45px;
  position: relative;
  z-index: 1;
  padding: 0;
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
  }

  svg {
    width: 14px;
    height: 14px;
    color: #ffffff;

    @media (min-width: 768px) {
      width: 16px;
      height: 16px;
    }
  }
`;
