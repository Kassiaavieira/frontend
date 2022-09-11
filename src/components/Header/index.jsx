import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth';

//import { api } from '../../services/api';

import { Container, Profile, Logout } from './styles'

export function Header() {
  const { signOut, user } = useAuth();

  //const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
      <Profile to="/profile">
        
        <div>
          <span>Bem-vindo ao melhor software de recrutamento</span>
        </div>
      </Profile>
      
      <Logout to="/" onClick={signOut} >
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}