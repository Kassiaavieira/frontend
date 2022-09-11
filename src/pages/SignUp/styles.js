import styled from 'styled-components';
import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Form = styled.form `
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  
  > h1 {
    font-size: 24px;
    margin-block: 48px;
    //margin-bottom: 150px;
  }
  > a {
    margin-top: 20px;
    margin-bottom: 15px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;