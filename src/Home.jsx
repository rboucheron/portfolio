import React from 'react';
import Header from './components/Header';
import Title from './components/Title';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';

function Home(props) {
    return (
        <>
            < Header /> 
            < Title />
            < About />
            < Skills />
            < Project />
        </>
    );
}

export default Home;