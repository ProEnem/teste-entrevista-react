import styled from 'styled-components'
import { shade } from 'polished'

export const SContainer = styled.div`
    > header {
        height: 144px;
        background: #28262e;

        display: flex;
        align-items: center;

        div {
            width: 100%;
            max-width: 1120px;
            margin-left: 1445px;

            svg {
                color: #999591;
                width: 24px;
                height: 24px;
            }
        }
    }
`

export const SContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: -176px auto 0;

    place-content: center;

    width: 100%;

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;
        display: flex;
        flex-direction: column;

        h1 {
            margin-top: 24px;
            margin-bottom: 24px;
            font-size: 20px;
            text-align: center;
        }
    }

    .name {
        font-size: 23px;

        svg {
            margin-right: 10px;
            margin-bottom: -5px;
            align-items: center;
        }
    }

    .email {
        font-size: 23px;

        svg {
            margin-right: 10px;
            margin-bottom: -5px;
            align-items: center;
        }
    }

    .courses {
        width: 100%;
        margin-top: 25px;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        span {
            font-size: 40px;
        }
    }

    .cards {
        width: 100%;
        padding: 0 120px;

        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }

    > a {
        color: #f4ede8;
        display: block;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.2s;

        display: flex;
        align-items: center;

        svg {
            margin-right: 16px;
        }

        &:hover {
            color: ${shade(0.2, '#F4EDE8')};
        }
    }
`
export const SAvatarInput = styled.div`
    margin-bottom: 32px;
    position: relative;
    align-self: center;

    img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }
`
