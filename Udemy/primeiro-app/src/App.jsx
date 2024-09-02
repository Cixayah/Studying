import userEvent from '@testing-library/user-event';
import { useState } from 'react'


function App() {
  const [name, setName] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');


  const [user, setUser] = useState({});

  function handleRegister(e) {
    e.preventDefault();
    alert('Usuário registrado com sucesso!')
    setUser({
      nome: name,
      idade: idade,
      email: email,
    })
  }
  return (
    <div className='formulario'>
      <h1>Cadastrando Usuário</h1>
      <form onSubmit={handleRegister}>
        <label>Nome:</label>
        <input placeholder='Digite seu nome'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Idade:</label>
        <input
          placeholder='Digite sua idade'
          value={idade}
          onChange={(e) => setIdade(e.target.value)} />

        <label>Email:</label>
        <input
          placeholder='Digite seu email'
          value={email}
          onChange={(e) => setEmail(e.target.value)} />

        <button type="submit">Registrar</button>
      </form>
      <div>
        <span>Bem vindo, {user.nome}</span> <br/>
        <span>Sua idade é {user.idade} anos!</span><br/>
        <span>E-mail: {user.email}</span><br/>
      </div>
    </div>


  );
}
export default App;
