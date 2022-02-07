import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Income from "./pages/income/Income";
import Expense from "./pages/expense/Expense";
import Home from "./pages/home/Home";
import AuthContext from "./contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {

    const [token, setToken] = useState('');
    const [name, setName] = useState('');

    return(
        <AuthContext.Provider value={{setToken, token, setName, name}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<SignIn />}/>
                    <Route path='/Cadastro' element={<SignUp />}/>
                    <Route path='/Home' element={<Home />}/>
                    <Route path='/NovaEntrada' element={<Income />}/>
                    <Route path='/NovaSaida' element={<Expense />}/>
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}