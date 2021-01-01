import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 20px;
  padding: 0 30px;
`;

export const Profile = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const Title = styled.Text`
  font-family: 'Nunito-Bold';
  font-size: 24px;
  color: #24282c;
  margin: 10px 0 0 0;
`;

export const SubTitle = styled.Text`
  font-family: 'Nunito-Light';
  font-size: 20px;
  color: #24282c;
  margin-bottom: 32px;
`;

export const ContentCourses = styled.View`
  width: 100%;
  margin-bottom: 32px;
`;

export const CoursesTitle = styled.Text`
  margin-top: 20px;
`;

export const Courses = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  background: #dee3ee;
`;

export const CourseDescription = styled.View``;

export const CourseTitle = styled.Text`
  font-family: 'Nunito-Bold';
  font-size: 24px;
  color: #24282c;
`;

export const CourseSubTitle = styled.Text`
  font-family: 'Nunito-Light';
  font-size: 16px;
  color: #24282c;
`;
