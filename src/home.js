import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './App.css';

const StartBox = styled.div`
  text-align: center;
  background-color: rgba(128, 128, 128, 0.8);
  margin: 5% auto;
  width: 40%;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: white;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  margin-top: 2%;
  display: block;
  padding: 8px;
  background-color: #3498db;
  border-radius: 5px;
  &:hover {
    background-color: #2980b9;
  }
`;

const Home = () => {
  return (
    <div className="Home">
      <h1>Velg Hvor du vil starte</h1>

      <StartBox>
        <Title>Windows Server Guide</Title>
        <StyledLink to="/guide">Windows Server</StyledLink>
        <StyledLink to="/quiz">Quiz til Guide</StyledLink>
      </StartBox>
    </div>
  );
};

export default Home;
