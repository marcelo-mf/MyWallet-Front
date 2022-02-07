import { Container2, Header } from "../../components";
import { LogOutOutline } from 'react-ionicons';
import { AddCircleOutline } from 'react-ionicons';
import { RemoveCircleOutline } from 'react-ionicons';
import {RegistrosContainer, EntradaSaidaContainer, ContainerItem, ContainerDateDesc} from "./Style";
import AuthContext from "../../contexts/AuthContext";
import { useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

export default function Home() {

    const navigate = useNavigate();
    const [list, setList] = useState([]);
    const { token, name } = useContext(AuthContext);

    const config = {headers: {"Authorization": `Bearer ${token}`}};

    useEffect(() => {
        
        const promise = axios.get('http://localhost:5000/list', config);

        promise.then(response => {

            setList(response.data);
        })
        promise.catch(console.log('erro'));
    }, []);

    console.log(list);

    let saldo = 0;

    for(let i = 0; i < list.length; i++) {
        saldo = saldo + list[i].value
    }


    return(

        <Container2>
            <Header >
                <h1>Olá, {name}</h1>
                <LogOutOutline className="logout-icon" onClick={() => navigate('/')} color={'#FFFFFF'} height="30px" width="28px"/>
            </Header>
            <RegistrosContainer>
                <div className="conatiner-itens">
                    {(list.length !== 0) ?
                    
                        list.map(item => (
                            <ContainerItem key={item._id}>
                                <ContainerDateDesc>
                                    <p className="date">{item.date}</p>
                                    <p className="description">{item.description}</p>
                                </ContainerDateDesc>
                                <p className={(item.value > 0) ? 'green' : 'red'}>{item.value}</p>
                            </ContainerItem>
                        ))

                    : 
                    <div className="vazio">
                        <p>Não há registros de<br/>entrada ou saída</p>
                    </div>
                    
                    } 
                </div>
                {(list.length !== 0) &&
                    <div className="footer">
                        <p className="saldo">SALDO</p>
                        <p className={(saldo > 0) ? 'green' : 'red'}>{saldo}</p>
                    </div>
                }
            </RegistrosContainer>
            <EntradaSaidaContainer>
                <div onClick={() => navigate('/NovaEntrada')}>
                    <AddCircleOutline color={'#FFFFFF'} height="22px" width="22px"/>
                    <h2>Nova<br/>Entrada</h2>
                </div>
                <div onClick={() => navigate('/NovaSaida')}>
                    <RemoveCircleOutline color={'#FFFFFF'} height="22px" width="22px"/>
                    <h2>Nova<br/>Saída</h2>
                </div>
            </EntradaSaidaContainer>
        </Container2>
    )
}