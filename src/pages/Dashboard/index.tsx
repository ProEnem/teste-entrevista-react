import React, { useState, useEffect } from 'react';

import { SafeAreaView } from 'react-native';
import api from '../../services/api';
import { format } from 'date-fns';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { logout } from '../../store/auth/auth.actions';

import CourseItem from './components/CourseItem';
import Button from '../../components/Button';

import {
  Container,
  Header,
  Avatar,
  HeaderContent,
  HeaderContentName,
  HeaderContentEmail,
  Title,
  CoursesList,
  Footer,
} from './styles';

import imgAvatarEmpty from '../../assets/avatar.png';

type SchoolPeriodo = {
  id: number;
  startDate: string;
  endDate: string;
}

interface CourseProps {
  id: number;
  name: string;
  schoolPeriod: SchoolPeriodo;
}

const Dashboard: React.FC = () => {
  const [courses, setCourses] = useState<CourseProps[]>([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const { user, token } = useAppSelector(state => state.auth);

  async function getCourses() {
    const { data } = await api.get('/person/me', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'X-Brand': 'proenem',
      }
    });

    const dataCourses = data.courses.map((course: CourseProps) => {
      return {
        id: course.id,
        name: course.name,
        schoolPeriod: {
          id: course.schoolPeriod.id,
          startDate: format(new Date(course.schoolPeriod.startDate), 'MM/yyyy'),
          endDate: format(new Date(course.schoolPeriod.endDate), 'MM/yyyy'),
        },
      };
    });

    setCourses(dataCourses);
    setLoading(false);
  }

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Header>
          <Avatar
            resizeMode={"cover"}
            source={imgAvatarEmpty}
          />
          <HeaderContent>
            <HeaderContentName>{user.name}</HeaderContentName>
            <HeaderContentEmail>{user.email}</HeaderContentEmail>
          </HeaderContent>
        </Header>
      </Container>
      <Title>Meus cursos</Title>
      <CoursesList
        data={courses}
        refreshing={loading}
        onRefresh={getCourses}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) =>
          <CourseItem
            name={item.name}
            startDate={item.schoolPeriod.startDate}
            endDate={item.schoolPeriod.endDate}
          />
        }
      />
      <Footer>
        <Button
          onPress={() => dispatch(logout())}
        >
          Sair
        </Button>
      </Footer>
    </SafeAreaView>
  );
}

export default Dashboard;
