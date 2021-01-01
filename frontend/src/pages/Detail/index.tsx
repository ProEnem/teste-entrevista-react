import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import { IState } from '../../store';
import { IUserState } from '../../store/modules/user/types';

import { DetailInfo, Courses, Container } from './styles';

const Detail: React.FC = () => {
  const { user } = useSelector<IState, IUserState>(state => state.user);
  return (
    <>
      <Header />

      <Container>
        <DetailInfo>
          <header>
            <img
              src={
                user.imageProfile
                  ? user.imageProfile
                  : 'https://www.w3schools.com/w3images/avatar2.png'
              }
              alt="avatar"
            />
            <div>
              <strong>{user.name}</strong>
              <p>{user.email}</p>
            </div>
          </header>
        </DetailInfo>

        <p>Lista de cursos assinados:</p>

        {user.courses.map(course => (
          <Courses key={course.id}>
            <div>
              <strong>{course.name}</strong>
              <p>{course.slug}</p>
            </div>
            <FiChevronRight size={20} />
          </Courses>
        ))}
      </Container>
    </>
  );
};

export default Detail;
