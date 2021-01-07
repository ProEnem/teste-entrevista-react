import styled, { css } from 'styled-components'

import Tooltip from '../Tooltip'

interface IContainerProps {
    isFocused: boolean
    isFilled: boolean
    isErrored: boolean
}

export const SContainer = styled.div<IContainerProps>`
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    color: #666360;

    display: flex;
    align-items: center;

    & + div {
        margin-top: 8px;
    }

    ${(props) =>
        props.isErrored &&
        css`
            border-color: #c53030;
        `}

    ${(props) =>
        props.isFocused &&
        css`
            color: #1ddf37;
            border-color: #1ddf37;
        `}

    ${(props) =>
        props.isFilled &&
        css`
            color: #1ddf37;
        `}

    input {
        flex: 1;
        background: transparent;
        border: 0;
        color: #f4ede8;

        &&::placeholder {
            color: #666360;
        }
    }
    svg {
        margin-right: 16px;
    }
`

export const SError = styled(Tooltip)`
    height: 20px;
    margin-left: 16px;

    svg {
        margin: 0;
    }

    span {
        background: #c53030;
        color: #fff;

        &::before {
            border-color: #c53030 transparent;
        }
    }
`
