import styled from "styled-components";
import {
  Button as ButtonComponent,
  Table as TableComponent,
} from "reactstrap";

export const Container = styled.div`
  margin-top: 2rem;
`;

export const Button = styled(ButtonComponent)`
  margin-top: 1rem;
`;

export const Table = styled(TableComponent)`
  margin-top: 2rem;
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 2rem;
`;
