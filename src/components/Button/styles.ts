import styled from 'styled-components'
import { shade } from 'polished'

export const SContainer = styled.button`
    background: #df1d3d;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #312e38;
    width: 80%;
    font-weight: 500;
    margin-top: 16px;
    transition: background-color 0;

    &:hover {
        background: ${shade(0.2, '#DF1D3D')};
    }
`
