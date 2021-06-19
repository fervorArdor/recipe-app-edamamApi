import React from 'react'
import Home from '../Home/Home'
import Recipe from '../Recipes/Recipe/Recipe'
import useStyles from './styles'

const Recipes = ({ recipes }) => {
    const classes = useStyles()
    
    return (
        <div>
            {recipes.length <= 0 && <Home />}
            <div className={classes.displayFlex}>
                {recipes.map(recipe => (
                    <Recipe key={recipe.recipe.url} {...recipe.recipe}/>
                ))}
            </div>
        </div>
    )
}

export default Recipes
