import './App.css';
import styled from 'styled-components';
import List from './components/List/index';
import Header from './components/Header';
import Profile from './components/Profile';

import { useState } from 'react';

const Division = styled.div`
  display: flex:
  flex-direction: column;
  justify-content: center;
  align-content: center;
  
  width: 500px;
  margin: 30px 450px;

  background-color: ${(props) => (props.isLight ? "white" : "black")};
  color: ${(props) => (props.isLight ? "black" : "white")};

`

const DivisionTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
`

const SelectMode = styled.button`
    width: 80px;
    height: 30px;
    background-color: white;
    border: 1px solid;
    border-radius: 5px;
    padding: 5px;

    &:hover{
        background-color: black;
        color: white;
        border: 1px white solid;
    }`

function App() {

  const [isLight, setMode] = useState(true);

  return (
    <div className="App">
      <Division  isLight={isLight}>
        <DivisionTitle>
          <Header title="Overreacted"/>
          <SelectMode onClick={() =>setMode(!isLight)}>Dark mode</SelectMode>
        </DivisionTitle>
        <Profile urlImage="https://miro.medium.com/max/3150/1*xxVEfOOAmIKHWOUloRKLhw.jpeg" 
          text1="Personal blog by Dan Abramov."
          text2="I explain with words and code."/>
        <List article="npm audit: Broken by Design" subtitle="Found 99 vulnerabilities (84 moderately irrilevant, 15 highly irrilevant)"/>
        <List article="Before You memo()" subtitle="Rendering optimizations that comes naturally."/>
      </Division>
      
    </div>
  );
}

export default App;
