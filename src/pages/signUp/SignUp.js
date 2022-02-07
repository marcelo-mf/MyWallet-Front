import { Container, Form, Button, Input, StyledLink } from "../../components"
import logo from "../../assets/MyWallet.png"
import api from "../../services/api";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import { useNavigate } from "react-router";



export default function SignUp() {

    const [formData, setFormData] = useState({name: '', email: '', password: '', confirmPassword: ''});
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    async function handleSubmit(e) {
        e.preventDefault();

        setIsLoading(true);

        try{

            await api.signUp({...formData});

            setIsLoading(false);
            navigate('/');

        } catch{

            setIsLoading(false);
            alert('Erro, tente novamente!');

        }
    }

    return(
        <Container>

            <img src={logo} alt="logo"/>

            <Form onSubmit={handleSubmit}>
                <Input type='name' placeholder='Nome' name='name' onChange={handleChange} disabled={isLoading} required/>
                <Input type='email' placeholder='E-mail' name='email' onChange={handleChange} disabled={isLoading} required/>
                <Input type='password' placeholder='Senha' name='password' onChange={handleChange} disabled={isLoading} required/>
                <Input type='password' placeholder='Confirma a senha' name='confirmPassword' onChange={handleChange} disabled={isLoading} required/>
                <Button type="submit" disabled={isLoading}>
                    {isLoading ? <ThreeDots type="ThreeDots" color="#FFFFFF" height={50} width={50} /> : "Cadastrar"}
                </Button>    
            </Form>

            <StyledLink onClick={() => navigate('/')}>Já tem uma conta? Entre agora!</StyledLink>
        </Container>
    )
}