import Name from './components/Name';
import { useState } from 'react'

function App() {
  const [aluno, setAluno] = useState('Developer')
  function handleChangeName() {
    alert('Clickado!')
  }
  return (
    <div>
      <h1>Meu primeiro App</h1><br />
      <h2>Olá: {aluno}</h2>
      <button onClick={handleChangeName}>Muda nome</button>
    </div >
  );
}
export default App;
