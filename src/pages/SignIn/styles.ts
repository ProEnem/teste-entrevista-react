import styled, { keyframes } from 'styled-components'

import signInBackgroundImg from '../../assets/undraw_book_reading_kx9s.svg'

export const SContainer = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`

export const SContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 700px;

    img {
        height: 100px;
    }
`

const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }

`

export const SAnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    animation: ${appearFromLeft} 1s;

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
        }
    }
`

export const SBackground = styled.div`
    flex: 1;
    background: url(${signInBackgroundImg}) no-repeat center;
    background-size: cover;
`
