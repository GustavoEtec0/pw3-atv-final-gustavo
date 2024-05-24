import './App.css'
import Home from './views/Home'
import Turmas from './views/Turmas'
import NovaTurma from './views/NovaTurma/'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Container from './components/Container'
import Editarturma from './views/EditarTurma/'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="/turmas" element={<Turmas />} />
              <Route path="/nova-turma" element={<NovaTurma />} />
              <Route path="/editar-turma/:id" element={<Editarturma />} />
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  )
}

export default App
