import React, { useState, useEffect } from 'react'
import { cuisineType, dishType, dietLabel } from '../constants/filterBy'
import { Search } from '@material-ui/icons'
import Recipes from '../Recipes/Recipes'
import { TextField, InputAdornment, MenuItem, Grid } from '@material-ui/core'

const Searchbar = () => {
    const APP_ID = process.env.REACT_APP_ID
    const APP_KEY = process.env.REACT_APP_KEY 
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('')
    const [cuisine, setCuisine] = useState('By Cuisine')
    const [dish, setDish] = useState('By Dish Type')
    const [diet, setDiet] = useState('By Diet Label')

    useEffect(() => {
        getRecipes()
    }, [query, diet, cuisine, dish])

    const test1 = dish !== 'By Dish Type' ? `&dishType=${dish}` : ''
    const test2 = diet !== 'By Diet Label' ? `&diet=${diet}` : ''
    const test3 = cuisine !== 'By Cuisine' ? `&cuisineType=${cuisine}` : ''
    const url = `https://api.edamam.com/search?q=${query}${test1}${test2}${test3}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`

    const getRecipes = async () => {
        console.log(url)
        const response = await fetch(url)
        const data = await response.json()
        setRecipes(data.hits)
        console.log(recipes)
    }

    const updateSearch = (e) => {
        setSearch(e.target.value)
    }

    const updateQuery = (e) => {
        e.preventDefault()
        setQuery(search)
        setSearch('')
    }

    const handleCuisineType = (e) => {
        setCuisine(e.target.value)
        setDish('By Dish Type')
        setDiet('By Diet Label')
    }

    const handleDishType = (e) => {
        setDish(e.target.value)
        setCuisine('By Cuisine')
        setDiet('By Diet Label')
    }

    const handleDietLabel = (e) => {
        setDiet(e.target.value)
        setCuisine('By Cuisine')
        setDish('By Dish Type')
    }

    return (
        <div>
        <form onSubmit={updateQuery}>
            <Grid container spacing={2} style={{ marginBottom: '20px' }}>
                <Grid item xs={3}>
                    <TextField
                        id="search"
                        variant='outlined'
                        placeholder='Search'
                        onChange={updateSearch}
                        fullWidth
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><Search /></InputAdornment>,
                        }}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        id="cuisine-type"
                        select
                        fullWidth
                        value={cuisine}
                        onChange={handleCuisineType}
                        variant='outlined'
                        >
                        {cuisineType.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        id="dish-type"
                        select
                        fullWidth
                        value={dish}
                        onChange={handleDishType}
                        variant='outlined'
                        >
                        {dishType.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        id="diet-label"
                        select
                        fullWidth
                        value={diet}
                        onChange={handleDietLabel}
                        variant='outlined'
                        >
                        {dietLabel.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
            </Grid>
            <button style={{ opacity: 0 }} type='submit'>Submit</button>
        </form>
        <Recipes recipes={recipes}/>
        </div>
    )
}

export default Searchbar
