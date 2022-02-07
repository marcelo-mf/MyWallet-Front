import { useContext, useState } from "react"
import api from "../../services/api";
import AuthContext from "../../contexts/AuthContext";
import { Container2, Form, Button, Input, Header } from "../../components"
import { useNavigate } from "react-router";

export default function Income() {

    const [formData, setFormData] = useState({value: '', description:''})
    const [isLoading, setisLoading] = useState(false);
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();

        setisLoading(true)

        api.Income({...formData, token: token}).then(() => {

            setisLoading(false);
            navigate('/Home');
            
        }).catch(()=> {

            setisLoading(false);

        });
    }

    return(
        <Container2>
            <Header>
                <h1>Nova Entrada</h1>
            </Header>
            <Form onSubmit={handleSubmit}>
                <Input type='value' placeholder='Valor' name='value' onChange={handleChange} disabled={isLoading} required/>
                <Input type='description' placeholder='Descrição' name='description' onChange={handleChange} disabled={isLoading} required/>
                <Button type="submit">Salvar entrada</Button>
            </Form>
        </Container2>
    )
}