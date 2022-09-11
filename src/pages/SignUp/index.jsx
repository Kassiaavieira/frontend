import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { TiHomeOutline } from "react-icons/ti";
import { TbMapPin } from "react-icons/tb";

import { api } from '../../services/api';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles';

export function SignUp() {
  const [nome, setNome] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [logradouro, setLogradouro] = useState(""); 

  const navigate = useNavigate();

  function handleSignUp() {
    if (!nome || !email || !password || !cep || !cidade || !uf || !logradouro) {
      return alert("Preencha todos os campos");
    }

    // enviado para a api 
    api.post("/users", { nome, email, password, cep, cidade, uf, logradouro }) 
    .then(() => {
      alert("Usuário cadastrado com sucesso!");
      navigate("/") // aqui esta levante para a pagina principal   
    })
    .catch(error => {
      // verificando se existe uma resposta no backend
      if(error.response) {
        alert(error.response.data.message);
      } else {
        // se não tiver no backend, mostraremos uma mensagem genérica
        alert("Não foi possível cadastrar");
      }
    });
  }
  
  return (
    <Container>
      <Background />
      <Form>

        <h2>Crie sua conta</h2>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={e => setNome(e.target.value)}
        />

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />
        <Input
          placeholder="Cep"
          type="text"
          icon={TbMapPin}
          onChange={(e) => setCep(e.target.value)}
        />

        <Input
          placeholder="Cidade"
          type="text"
          icon={TiHomeOutline}
          onChange={(e) => setCidade(e.target.value)}
        />
        <Input
          placeholder="Uf"
          type="text"
          icon={TiHomeOutline}
          onChange={(e) => setUf(e.target.value)}
        />
        <Input
          placeholder="Logradouro"
          type="text"
          icon={TiHomeOutline}
          onChange={(e) => setLogradouro(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp}/>

        <Link to="/">
          Voltar para o login
        </Link>
      </Form>

    </Container>
  );
}