import styled from 'styled-components';

const RegistrosContainer = styled.div`

    height: 446px;
    width: 326px;

    margin-top: -18px;
    padding: 10px 5px;

    background-color: white;

    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    p{
        color: #868686;
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        text-align: center;
    }

    .conatiner-itens{
        width: 100%;
    }

    .vazio{

        height: 446px;
        width: 326px;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .green {
        font-weight: 400;
        color: green;
        font-size: 16PX;
    }

    .red{
        font-weight: 400;
        color: red;
        font-size: 16PX;
    }

    .footer{
        width: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 1px 10px;

        .saldo{
            font-weight: 700;
            color: black;
            font-size: 17px;
        }
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

    div:hover{
        cursor: pointer;
    }

`

const ContainerItem = styled.div`

    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1px 10px;

    .date{
        font-weight: 400;
        color: #C6C6C6;
        font-size: 16PX;

        margin-right: 15px;
    }

    .description{
        font-weight: 400;
        color: #000000;
        font-size: 16PX;
    }

    .green {
        font-weight: 400;
        color: green;
        font-size: 16PX;
    }

    .red{
        font-weight: 400;
        color: red;
        font-size: 16PX;
    }

`

const ContainerDateDesc = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

`

export {RegistrosContainer, EntradaSaidaContainer, ContainerItem, ContainerDateDesc};