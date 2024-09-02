import { useState } from 'react'


function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = uIeState('');


  return (
    <div>
      <h1>Cadastrando Usuário</h1>
      <form>
        <label>Nome:</label>
        <input placeholder='Digite seu nome'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email:</label>
        <input
          placeholder='Digite seu email'
          value={email}
          onChange={(e) => setEmail(e.target.value)} />

        <label>Idade:</label>
        <input
          placeholder='Digite sua idade'
          value={idade}
          onChange={(e) => setIdade(e.target.value)} />

        <button type="submit">Registrar</button>
      </form>
    </div>

  );
}
export default App;
