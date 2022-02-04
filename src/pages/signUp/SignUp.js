import { Container, Form, Button, Input, StyledLink } from "../../components"
import logo from "../../assets/MyWallet.png"
import { useState } from "react";



export default function SignUp() {

    const [formData, setFormData] = useState({name: '', email: '', password: '', confirmPassword: ''});

    function handleChange(e) {
        console.log(e)
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit() {


    }

    return(
        <Container>

            <img src={logo} alt="logo"/>

            <Form onSubmit={handleSubmit}>
                <Input type='name' placeholder='Nome' name='name' onChange={handleChange} />
                <Input type='email' placeholder='E-mail' name='email' onChange={handleChange} value={formData.email}/>
                <Input type='password' placeholder='Senha' name='password' onChange={handleChange} value={formData.password}/>
                <Input type='password' placeholder='Confirma a senha' name='confirmPassword' onChange={handleChange} value={formData.confirmPassword}/>
                <Button type="submit">Cadastrar</Button>
                
            </Form>

            <StyledLink>Já tem uma conta? Entre agora!</StyledLink>
        </Container>
    )
}