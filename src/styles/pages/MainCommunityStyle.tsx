import styled from 'styled-components';
import { AiFillLike } from 'react-icons/ai';
import { MdModeComment } from 'react-icons/md';

export const CommunityContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 120px;
`;

export const ContentWrapper = styled.div`
  width: 1200px;
`;

export const StyledLike = styled(AiFillLike)`
  color: rgba(206, 206, 206, 1);
  width: 13.05px;
  height: 13.26px;
`;

export const StyledComment = styled(MdModeComment)`
  color: rgba(206, 206, 206, 1);
  width: 12px;
  height: 14px;
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  h2 {
    font-family: 'PretendardSemiBold';
    font-size: 26px;
    margin: 0;
  }
`;

export const ViewAll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  h4 {
    font-family: 'PretendardMedium';
    margin: 0;
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 160, 94, 1);
  }
  p {
    margin: 0;
    width: 20px;
    height: 20px;
    color: rgba(0, 160, 94, 1);
  }
`;

export const CategoryWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  margin-bottom: 40px;
`;

interface CategoryProps {
  isSelected: boolean;
}

export const Category = styled.div<CategoryProps>`
  margin: 0;
  min-width: 68px;
  width: fit-content;
  height: 36px;
  border-radius: 71.01px;
  background-color: ${(props) => (props.isSelected ? 'rgba(0, 160, 94, 1)' : '#F5F5F5')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  p {
    color: ${(props) => (props.isSelected ? '#FFFFFF' : '#8E8E8E')};
    font-size: 16px;
    font-family: 'PretendardRegular';
    white-space: nowrap;
    margin: 0;
    height: 24px;
    padding-left: 20px;
    padding-right: 20px;
  }

  &:hover {
    background-color: ${(props) => !props.isSelected && '#E5E5E5'};
  }
`;

export const FeedWrapper = styled.div`
  width: 100%;
`;

export const GreenBox = styled.div`
  width: fit-content;
  min-width: 45px;
  padding: 0 10px;
  height: 26px;
  background-color: rgba(0, 160, 94, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;

  p {
    color: rgba(0, 160, 94, 1);
    font-size: 12px;
    font-family: 'PretendardSemiBold';
    line-height: 14.32px;
    white-space: nowrap;
  }
`;

export const Headline = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: 'PretendardSemiBold';
  height: 54px;
  font-size: 18px;
  line-height: 29.88px;
  margin: 0;
  cursor: pointer;
  &:hover {
    color: rgba(0, 160, 94, 1);
  }
`;

export const Content = styled.div`
  padding: 0;
  margin: 0;
  p {
    margin: 0;
    font-size: 16px;
    font-family: 'PretendardMedium';
    color: rgba(94, 94, 94, 1);
  }
`;

export const Interactions = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  margin-top: 6px;
  p {
    color: rgba(142, 142, 142, 1);
    font-size: 12px;
    font-family: 'PretendardRegular';
    line-height: 14.32px;
  }
`;

export const DividingLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(206, 206, 206, 1);
  margin: 14px 0;
`;
