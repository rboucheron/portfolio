import React from 'react';
import Header from './components/Header';
import Title from './components/Title';
import About from './components/About';
import Skills from './components/Skills';

function Home(props) {
    return (
        <>
            < Header /> 
            < Title />
            < About />
            < Skills />
        </>
    );
}

export default Home;