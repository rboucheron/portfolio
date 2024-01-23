import React from 'react';
import Header from './components/Header';
import Title from './components/Title';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Home(props) {
    return (
        <>
            < Header /> 
            < Title />
            < About />
            < Skills />
            < Project />
            < Contact />
            < Footer />
        </>
    );
}

export default Home;