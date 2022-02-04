import styled from 'styled-components';

const RegistrosContainer = styled.div`

    height: 446px;
    width: 326px;

    margin-top: -18px;

    background-color: white;

    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p{
        color: #868686;
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        text-align: center;
    }

`

const EntradaSaidaContainer = styled.div`

    display: flex;

    gap: 15px;

    div {

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;

        margin-top: -20px;

        padding-left: 8px;

        height: 114px;
        width: 155px;

        background-color: #A328D6;

        border-radius: 5px;

        h2{
            color: white;
            font-size: 17px;
            font-weight: 700;
            line-height: 20px;
        }


    }

`

export {RegistrosContainer, EntradaSaidaContainer};