import { useState } from 'react';
import { FiMail, FiLock} from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles';

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, loading, setLoading } = useAuth();

  function handleSignIn() {
    signIn({email, password})
  }

  return (
    <Container>
      <Form>
        <h1>Recruta aqui</h1>
        <p>Software de recrutamento para empresas.</p>

        <h2>Faça seu login</h2>

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

        <Button
          disabled={loading}
          title={loading ? 'Carregando...' : 'Entrar'} 
          onClick={handleSignIn}
        />

        <Link to="/register">
          Criar conta
        </Link>
      </Form>

      <Background />
    </Container>
  );
}