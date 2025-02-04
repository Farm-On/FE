import styled from '@emotion/styled';

export const AnnouncementContainer = styled.div``;

export const AnnouncementContent = styled.div`
  padding: 30px 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 0.7px solid #d1d1d1;
  border-bottom: 0.7px solid #d1d1d1;
`;

export const AnnouncementTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 48px;
`;

export const AnnouncementTitle = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 166%; /* 29.88px */
  text-transform: uppercase;
`;

export const AnnouncementDate = styled.span`
  color: #8e8e8e;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 166%; /* 29.88px */
  text-transform: uppercase;
`;
