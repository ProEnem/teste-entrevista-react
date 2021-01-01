import React, { useCallback } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { useDispatch, useSelector } from 'react-redux';
import { signOutRequest } from '../../store/modules/auth/actions';
import { IState } from '../../store';
import { IUserState } from '../../store/modules/user/types';

import Button from '../../components/Button';

import {
  Container,
  Title,
  SubTitle,
  Profile,
  ContentCourses,
  CoursesTitle,
  Courses,
  CourseTitle,
  CourseSubTitle,
} from './styles';

const Detail: React.FC = () => {
  const { user } = useSelector<IState, IUserState>(state => state.user);
  const dispatch = useDispatch();

  const handleLogout = useCallback(async () => {
    dispatch(signOutRequest());
  }, [dispatch]);

  // if (loading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator size="large" />
  //     </View>
  //   );
  // }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Profile
            source={{
              uri: user.imageProfile
                ? user.imageProfile
                : 'https://www.w3schools.com/w3images/avatar2.png',
            }}
          />

          <Title>{user.name}</Title>
          <SubTitle>{user.email}</SubTitle>

          <ContentCourses>
            <CoursesTitle>Lista de cursos assinados:</CoursesTitle>

            {user.courses.map(course => (
              <Courses key={course.id}>
                <View>
                  <CourseTitle>{course.name}</CourseTitle>
                  <CourseSubTitle>{course.slug}</CourseSubTitle>
                </View>
                <Icon name="chevron-right" size={20} color="#cbcbd6" />
              </Courses>
            ))}
          </ContentCourses>

          <Button icon="log-out" onPress={() => handleLogout()}>
            Logout
          </Button>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;
