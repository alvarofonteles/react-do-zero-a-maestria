import { useState } from 'react'
import './MyForm.css'

const MyForm = ({ user }) => {
    const [nome, setNome] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')

    const [bio, setBio] = useState(user ? user.bio : '')
    const [role, setRole] = useState(user ? user.role : '')

    const handleName = (e) => setNome(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault(); // <- previne o reload da página
        console.log(nome, email, bio, role === 'user' ? "Usuário" : role)
        setNome('')
        setEmail('')
        setBio('')
        setRole('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='nome'>Nome</label>
                    <input
                        type='text'
                        name='nome'
                        placeholder='Digite seu nome'
                        onChange={handleName}
                        value={nome}
                    />
                </div>
                <div>
                    <label>
                        <span>E-mail</span>
                        <input
                            type="email"
                            name="email"
                            placeholder='Digite seu e-mail'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </label>
                    <label>
                        <span>Bio</span>
                        <textarea
                            name="bio"
                            placeholder='Digite sua Bio.'
                            onChange={(e) => setBio(e.target.value)}
                            value={bio}
                        ></textarea>
                    </label>
                </div>
                <div>
                    <label>
                        <span>Fuções do Sistema.</span>
                        <select name="role" onChange={(e) => setRole(e.target.value)} value={role} >
                            <option value=""></option>
                            <option value="admin">Administrador</option>
                            <option value="user">Usuário</option>
                            <option value="edit">Editor</option>
                        </select>
                    </label>
                </div>
                <p />
                <input type="submit" value='Criar' />
            </form>
        </>
    )
}

export default MyForm