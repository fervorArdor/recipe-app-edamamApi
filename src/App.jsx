import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Blog from './components/Blog/Blog'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Recipes from './components/Recipes/Recipes'
import './App.css'

const App = () => {
    return (
        <div className='root'>
                <Navbar />
                <Switch>
                    <Route exact path='/' render={props => <Recipes {...props} />} />
                    <Route exact path='/blog' render={props => <Blog {...props} />} />
                    <Route exact path='/about' render={props => <About {...props} />} />
                    <Route exact path='/contact' render={props => <Contact {...props} />} />
                </Switch>
        </div>
    )
}

export default App
