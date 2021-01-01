import styled from 'styled-components';

export const DetailInfo = styled.section`
  margin-top: 40px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        font-weight: 700;
        color: #3d3d3d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }
`;

export const Courses = styled.div`
  margin-top: 30px;
  width: 100%;
  padding: 24px;
  display: block;

  display: flex;
  align-items: center;

  background: #dee3ee;

  border-radius: 10px;

  div {
    margin: 0 16px;
    flex: 1;

    strong {
      font-size: 20px;
      color: #3d3d4d;
    }

    p {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }

  svg {
    margin-left: auto;
    color: #cbcbd6;
  }
`;

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;

  p {
    margin-top: 20px;
  }
`;

export const Content = styled.div`
  width: 550px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #df1f3d;
`;

export const Avatar = styled.img`
  margin-top: 32px;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background: green;
`;
