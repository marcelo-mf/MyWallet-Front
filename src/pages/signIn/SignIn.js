import { Container, Form, Button, Input, StyledLink } from "../../components"
import logo from "../../assets/MyWallet.png"
import { useContext, useState } from "react"
import { useNavigate } from "react-router";
import api from "../../services/api";
import AuthContext from "../../contexts/AuthContext";


export default function SignIn() {

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({email:'', password:''});
    const navigate = useNavigate();
    const { setToken, setName } = useContext(AuthContext);

    function handleChange(e) {

        setFormData({...formData, [e.target.name]: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();

        setIsLoading(true);

            api.SignIn({...formData}).then(response => {

                setIsLoading(false)
                setName(response.data.name)
                setToken(response.data.token)
                navigate('/Home')

            }).catch(() => {

                setIsLoading(false);
                alert('Erro, tente novamente!');
            })
    }


    return(
        <Container>
            <img src={logo} alt="logo"/>
            <Form onSubmit={handleSubmit}> 
                <Input type='email' placeholder='email' name='email'onChange={handleChange} disabled={isLoading} required/>
                <Input type='password' placeholder='senha' name='password' onChange={handleChange} disabled={isLoading} required/>
                <Button type="submit">Entrar</Button>     
            </Form>

            <StyledLink onClick={() => navigate('/Cadastro')}>Primeira Vez? Cadastre-se!</StyledLink>
        </Container>
    )
}