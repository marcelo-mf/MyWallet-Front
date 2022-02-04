import { Container, Form, Button, Input, StyledLink } from "../../components"
import logo from "../../assets/MyWallet.png"



export default function SignIn() {

    return(
        <Container>

            <img src={logo} alt="logo"/>

            <Form>
                <Input type='email' placeholder='email' name='email' />
                <Input type='password' placeholder='senha' name='password' />
                <Button>Entrar</Button>
                
            </Form>

            <StyledLink>Primeira Vez? Cadastre-se!</StyledLink>
        </Container>
    )
}