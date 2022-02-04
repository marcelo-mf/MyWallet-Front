import { Container2, Header } from "../../components";
import { LogOutOutline } from 'react-ionicons';
import { AddCircleOutline } from 'react-ionicons';
import { RemoveCircleOutline } from 'react-ionicons';
import {RegistrosContainer, EntradaSaidaContainer} from "./Style";

export default function Home() {
    return(

        <Container2>
            <Header>
                <h1>Olá, Fulano</h1>
                <LogOutOutline color={'#FFFFFF'} height="30px" width="28px"/>
            </Header>
            <RegistrosContainer>
                <p>Não há registros de<br/>entrada ou saída</p>
            </RegistrosContainer>
            <EntradaSaidaContainer>
                <div>
                    <AddCircleOutline color={'#FFFFFF'} height="22px" width="22px"/>
                    <h2>Nova<br/>Entrada</h2>
                </div>
                <div>
                    <RemoveCircleOutline color={'#FFFFFF'} height="22px" width="22px"/>
                    <h2>Nova<br/>Saída</h2>
                </div>
            </EntradaSaidaContainer>
        </Container2>
    )
}