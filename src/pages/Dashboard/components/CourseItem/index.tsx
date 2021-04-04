import React from 'react';

import {
  Container,
  Title,
  IconCalendar,
  ContainerDate,
  DateText,
} from './styles';

interface ItemProps {
  name: string;
  startDate: string;
  endDate: string;
}

const CourseItem: React.FC<ItemProps> = ({ name, startDate, endDate }) => {
  return (
    <Container>
      <ContainerDate>
        <IconCalendar />
        <DateText>{startDate} até {endDate}</DateText>
      </ContainerDate>
      <Title>{name}</Title>
    </Container>
  );
}

export default CourseItem;
