import React from 'react'
import { BrowserRouter } from 'react-router-dom' // BrowserHouter pode ser substituído pelo HashRouter (que por sinal é melhor e dará menos erros)
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
// import Main from '../components/template/Main' // OBS: O Main já contém o Header
// import Home from '../components/home/Home' // OBS: O Home contém o Main que contém o Header
import Routes from './Routes' // OBS: Routes contém Home que contém Main que contém Header
import Footer from '../components/template/Footer'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>