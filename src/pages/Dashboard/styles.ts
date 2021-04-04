import { FlatList } from 'react-native';
import styled from 'styled-components/native';

interface CourseProps {
  id: number;
  name: string;
  schoolPeriod: {
    id: number;
    startDate: string;
    endDate: string;
  }
}

export const Container = styled.View``;

export const Header = styled.View`
  flex-direction: row;
  padding: 20px;
  margin-top: 20px;
`;

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-width: ${({ theme }) => theme.metrics.borderRadius};
  border-color: ${({ theme }) => theme.colors.gray50};
  background-color: ${({ theme }) => theme.colors.gray50};
  border-radius: ${({ theme }) => theme.metrics.borderRadius};
`;

export const HeaderContent = styled.View`
  margin-left: 20px;
`;

export const HeaderContentName = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.nunitoBold};
  color: ${({ theme }) => theme.colors.black};
`;

export const HeaderContentEmail = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.nunitoRegular};
  color: ${({ theme }) => theme.colors.black};
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.nunitoBold};
  color: ${({ theme }) => theme.colors.black};
  margin-left: 20px;
`;

export const CoursesList = styled(FlatList as new () => FlatList<CourseProps>)``;

export const Footer = styled.View`
  align-self: center;

  width: 50%;
  margin-bottom: 5px;
`;
