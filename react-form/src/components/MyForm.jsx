import React, { useState } from 'react'

const MyForm = ({ valor }) => {
    const [nome, setNome] = useState(valor ? valor.name : '')
    const [email, setEmail] = useState(valor ? valor.email : '')

    const handleName = (e) => setNome(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault(); // <- previne o reload da página
        console.log(nome, email)
        setNome('')
        setEmail('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome</label>
                    <input
                        type='text'
                        name='nome'
                        placeholder='Digite seu nome'
                        onChange={handleName}
                        value={nome}
                    />
                </div>
                <div>
                    <label>E-mail</label>
                    <input
                        type="email"
                        name="email"
                        placeholder='Digite seu e-mail'
                        onChange={(e) => { setEmail(e.target.value) }}
                        value={email}
                    />
                </div>
                <p />
                <input type="submit" value='Criar' />
            </form>
        </>
    )
}

export default MyForm