import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Income from "./pages/income/Income";
import Expense from "./pages/expense/Expense";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SignIn />}/>
                <Route path='/Cadastro' element={<SignUp />}/>
                <Route path='/Home' element={<Home />}/>
                <Route path='/NovaEntrada' element={<Income />}/>
                <Route path='/NovaSaida' element={<Expense />}/>
            </Routes>
        </BrowserRouter>
    )
}