import { Container2, Form, Button, Input, Header } from "../../components"

export default function Expense() {

    return(
        <Container2>
            <Header>
                <h1>Nova Saída</h1>
            </Header>
            <Form>
                <Input type='value' placeholder='Valor' name='value' />
                <Input type='description' placeholder='Descrição' name='description' />
                <Button>Salvar saída</Button>
            </Form>
        </Container2>
    )
}