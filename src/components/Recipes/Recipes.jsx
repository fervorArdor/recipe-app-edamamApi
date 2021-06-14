import React, { useState, useEffect } from 'react'
import Home from '../Home/Home'
import Searchbar from './Searchbar/Searchbar'
import Recipe from '../Recipes/Recipe/Recipe'
import useStyles from './styles'

const Recipes = () => {
    const classes = useStyles()
    const APP_ID = process.env.REACT_APP_ID
    const APP_KEY = process.env.REACT_APP_KEY 
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('')

    useEffect(() => {
        getRecipes()
    }, [query])

    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`

    const getRecipes = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setRecipes(data.hits)
    }

    const updateSearch = (e) => {
        setSearch(e.target.value)
    }

    const updateQuery = (e) => {
        e.preventDefault()
        setQuery(search)
        setSearch('')
    }

    return (
        <div>
            <form onSubmit={updateQuery}>
                <Searchbar updateSearch={updateSearch}/>
                <button style={{ opacity: 0 }} type='submit'>Submit</button>
            </form>
            {query === '' && <Home />}
            <div className={classes.displayFlex}>
                {recipes.map(recipe => (
                    <Recipe key={recipe.recipe.url} {...recipe.recipe}/>
                ))}
            </div>
        </div>
    )
}

export default Recipes
