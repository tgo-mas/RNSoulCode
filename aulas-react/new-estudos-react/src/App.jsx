import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { LoginContext } from './contexts/loginContext';
import { Home } from './pages/Home/Home';
import { Blog } from './pages/Blog/Blog';
import { Contato } from './pages/Contato/Contato';
import { Usuarios } from './components/Usuarios/Usuarios';
import { Login } from './pages/Login/Login';
import { NotFound } from "./pages/NotFound/NotFound"
import { Root } from "./pages/Root/Root"
import { Section } from './components/Section/Section';
import { EditaUsuario } from './pages/EditaUsuario/EditaUsuario';
import { PerfilUsuario } from './pages/PerfilUsuario/PerfilUsuario';
import { Equipamentos } from './pages/Equipamentos/Equipamentos';
import { Pokemon } from "./pages/Pokemon/Pokemon"
import { Heroi } from './pages/Heroi/Heroi';

function App() {
  const [logado, setLogado] = useState(false);

  return (
    <div className="App">
      <LoginContext.Provider value={{ logado, setLogado }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Root />}>
              <Route path='/' element={<Home />}>
                <Route path='/1' element={
                  <Section
                    title="Seção 1">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus ducimus ipsa eum facere aspernatur culpa nesciunt iusto sit fugit voluptas corrupti assumenda deleniti, facilis fuga a, vero earum vel enim!
                  </Section>
                } />
                <Route path='/2' element={
                  <Section
                    title="Seção 2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus ducimus ipsa eum facere aspernatur culpa nesciunt iusto sit fugit voluptas corrupti assumenda deleniti, facilis fuga a, vero earum vel enim!
                  </Section>
                } />
                <Route path='/3' element={
                  <Section
                    title="Seção 3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus ducimus ipsa eum facere aspernatur culpa nesciunt iusto sit fugit voluptas corrupti assumenda deleniti, facilis fuga a, vero earum vel enim!
                  </Section>
                } />
              </Route>
              <Route path='/blog' element={<Blog />} />
              <Route path='/contato' element={<Contato />} />
              <Route path='/usuarios' element={<Usuarios />} />
              <Route path='/pokemon' element={<Pokemon />} />
              <Route path='/heroi' element={<Heroi />} />
              <Route path='/equipamentos' element={<Equipamentos />} />
              <Route path='/usuario/edit/:id' element={<EditaUsuario />} />
              <Route path='/usuario/perfil/:id' element={<PerfilUsuario />} />
              <Route path='/login' element={<Login />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
