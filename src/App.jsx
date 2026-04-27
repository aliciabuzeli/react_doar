import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import CadastroOng from "./pages/CadastroOng.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CadastroDoador from "./pages/CadastroDoador.jsx";
import CadastroAdm from "./pages/CadastroAdm.jsx";
import EsqueciSenha from "./pages/EsqueciSenha.jsx";
import VerificarCodigoSenha from "./pages/VerificarCodigoSenha.jsx";
import TelaErro from "./pages/TelaErro.jsx";
import RedefinirSenha from "./pages/RedefinirSenha.jsx";
import AreaRestrita from "./pages/AreaRestrita.jsx";
import ConfirmarEmail1 from "./components/ConfirmarEmail1/ConfirmarEmail1.jsx";
import Atualizacao from "./pages/Atualizacao.jsx";
import EditarAtualizacao from "./pages/EditarAtualizacao.jsx";
import DashboardDaOng from "./pages/DashboardDaOng.jsx";
import AprovarOngs from "./pages/AprovarOngs.jsx";
import EdicaoOng from "./pages/EdicaoOng.jsx";
import AprovacoesReprovacoes from "./pages/AprovacoesReprovacoes.jsx";
import Teste from "./pages/Teste.jsx";
import DashboardDoador from "./pages/DashboardDoador.jsx";
import EditarProjeto from "./pages/EditarProjetos.jsx";
import CriacaoProjetos from "./pages/CriacaoProjetos.jsx";
import BuscarOngs from "./pages/BuscarOngs.jsx";

export default function App() {
  return (
      <BrowserRouter>
          <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/cadastroOng" element={<CadastroOng/>} />
            <Route path="/cadastroDoador" element={<CadastroDoador/>} />
            <Route path="/cadastroAdm" element={<CadastroAdm/>} />
            <Route path={"/confirmaremail"} element={<ConfirmarEmail1/>} />
            <Route path="/esqueciSenha" element={<EsqueciSenha/>} />
            <Route path="/redefinirSenha" element={<RedefinirSenha/>} />
            <Route path="/verificarCodigo" element={<VerificarCodigoSenha/>} />
            <Route path="/*" element={<TelaErro/>} />
            <Route path="/dashboard" element={<AreaRestrita/>} />
            <Route path="/postagem" element={<Atualizacao/>} />
            <Route path="/editarPostagem" element={<EditarAtualizacao/>} />
            <Route path="/dashboardOng" element={<DashboardDaOng/>} />
            <Route path="/aprovarOngs" element={<AprovarOngs/>} />
            <Route path="/editarOng" element={<EdicaoOng/>} />
            <Route path="/aprovarReprovar" element={<AprovacoesReprovacoes/>} />
            <Route path="/teste" element={<Teste/>} />
            <Route path="/dashboardDoador" element={<DashboardDoador/>} />
            <Route path="/editarProjetos" element={<EditarProjeto/>} />
            <Route path="/criacaoProjetos" element={<CriacaoProjetos/>} />
            <Route path="/buscarOngs" element={<BuscarOngs/>} />



        </Routes>
          <Footer/>
      </BrowserRouter>
  )
}