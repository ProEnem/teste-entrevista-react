import styled from "styled-components";
import {
  Label as LabelComponent,
  Button as ButtonComponent,
  Table as TableComponent,
} from "reactstrap";

export const Container = styled.div`
  margin-top: 2rem;
`;

export const Label = styled(LabelComponent)`
  margin-bottom: 0;
`;

export const UserData = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.2;
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
