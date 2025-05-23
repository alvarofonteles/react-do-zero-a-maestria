import './App.css'

import MyForm from './components/MyForm'

function App() {

  return (
    <>
      <h2>Forms</h2>
      <MyForm user={
        {
          name: 'Alvaro',
          email: 'alvaro@hotmail.com',
          bio: 'Olá sou Engenheiro de Software FullStack',
          role: 'user'
        }
      } />
    </>
  )
}

export default App
