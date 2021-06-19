import useStyles from './styles'
import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { meals } from '../constants/filterBy'
import { Avatar, Typography, Tabs, Tab, Menu, MenuItem } from '@material-ui/core'
import Recipes from '../Recipes/Recipes'

const Navbar = (props) => {
    const classes = useStyles()
    const { history } = props
    const [currentTab, setCurrentTab] = useState(0)
    const [menu, setMenu] = useState(null)
    const [mealType, setMealType] = useState('')

    const APP_ID = process.env.REACT_APP_ID
    const APP_KEY = process.env.REACT_APP_KEY 
    const [recipes, setRecipes] = useState([])

    const url = `https://api.edamam.com/search?q=&mealType=${mealType}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`

    useEffect(async () => {
        const response = await fetch(url)
        const data = await response.json()
        setRecipes(data.hits)
    }, [mealType])

    const handleChange = (e, newValue) => {
        setMealType('')
        setCurrentTab(newValue)
    }

    const handleClick = (e) => {
        setMenu(e.currentTarget)
    }

    const handleClose = () => {
        setMenu(null)
    }

    return (
        <div>

            <div style={{ marginBottom: '20px' }} className={classes.displayFlex}>
                <div className={classes.displayFlex}>
                    <Avatar style={{ backgroundColor: '#f50057'}}>C</Avatar>
                    <Typography style={{ marginLeft: '20px' }} variant='h4'>Cooking</Typography>
                </div>
                <Tabs
                    value={currentTab}
                    indicatorColor="secondary"
                    textColor="secondary"
                    onChange={handleChange}
                    aria-label="menu"
                    >
                    <Tab label="Home" onClick={() => history.push('/')} />
                    <Tab label="Recipes" aria-controls='simple-menu' aria-haspopup='true' onClick={handleClick}/>
                    <Tab label="Blog" onClick={() => history.push('/blog')}/>
                    <Tab label="About" onClick={() => history.push('/about')}/>
                    <Tab label="Contact" onClick={() => history.push('/contact')}/>
                </Tabs>
                <Menu
                    id="simple-menu"
                    anchorEl={menu}
                    keepMounted
                    open={Boolean(menu)}
                    onClick={handleClose}
                    >
                    {meals.map(meal => (
                        <MenuItem key={meal} onClick={() => setMealType(meal)} onClose={handleClose}>{meal}</MenuItem>
                        ))}
                </Menu>
            </div>
            {recipes ? recipes.length > 0 && <Recipes recipes={recipes} /> : [] }
        </div>
    )
}

export default withRouter(Navbar)
