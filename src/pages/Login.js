import React, { useState } from 'react'
import './Login.css'
import api from '../services/api'
import logo from '../assets/logo.svg'

export default function Login({ history }) {
    const [username, setUsername] = useState('')

    async function handleSubmit(event) {
        event.preventDefault()  //Previni o comportamento padrão do formulário no submit (enviar para outra pagina)

        const response = await api.post('/devs', { username })
        
        const { _id } = response.data.dev
        /*
        [history] é um tipo de propriedade que todos os componentes herdam por padrão
        e com ele é possível realizar o roteamento entre as paginas da aplicação
         */
        history.push(`/dev/${_id}`)         //Roteando para a rota "/dev" passando por parametro o ID do dev logado

    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev" />
                <input
                    placeholder="Digite seu usuário no GitHub"
                    value={username}
                    onChange={event => setUsername(event.target.value)} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}