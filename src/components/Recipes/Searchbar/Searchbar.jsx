import React, { useState } from 'react'
import { cuisineType, dishType, dietLabel } from '../../constants/filterBy'
import { Search } from '@material-ui/icons'
import { TextField, InputAdornment, MenuItem, Grid } from '@material-ui/core'

const Searchbar = ({ updateSearch }) => {
    const [cuisine, setCuisine] = useState('By Cuisine')
    const [dish, setDish] = useState('By Dish Type')
    const [diet, setDiet] = useState('By Diet Label')

    const handleCuisineType = (e) => {
        setCuisine(e.target.value)
    }

    const handleDishType = (e) => {
        setDish(e.target.value)
    }

    const handleDietLabel = (e) => {
        setDiet(e.target.value)
    }

    return (
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
    )
}

export default Searchbar
