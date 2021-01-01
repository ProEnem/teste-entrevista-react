import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

import logoImg from '../../assets/proenem.svg';

import { Container } from './styles';

const Header: React.FC = () => {
  const history = useHistory();

  const signOut = useCallback(() => {
    localStorage.removeItem('@Proenem:token');
    localStorage.removeItem('@Proenem:credentials');

    history.push('/');
  }, [history]);

  return (
    <Container>
      <img src={logoImg} alt="proenem" />
      <button type="button" onClick={signOut}>
        <FiLogOut size={16} />
        Logout
      </button>
    </Container>
  );
};

export default Header;
