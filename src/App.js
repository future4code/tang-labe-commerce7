import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
import Cartao from './components/Cartao';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';



export default class App extends React.Component {
  
  render() {  

    return (
            
            <div className="App">
              <Header/>
              <Home />
              <Footer />

            </div>
        );

  }

}




