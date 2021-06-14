import useStyles from './styles'
import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { categories } from '../constants/categories'
import { Avatar, Typography, Tabs, Tab, Menu, MenuItem } from '@material-ui/core'

const Navbar = (props) => {
    const classes = useStyles()
    const { history } = props
    const [currentTab, setCurrentTab] = useState(0)
    const [menu, setMenu] = useState(null)

    const handleChange = (e, newValue) => {
        console.log(newValue)
        setCurrentTab(newValue)
    }

    const handleClick = (e) => {
        setMenu(e.currentTarget)
    }

    const handleClose = () => {
        setMenu(null)
    }

    return (
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
                onClose={handleClose}
            >
                {categories.map(category => (
                    <MenuItem key={category.title} onClose={handleClose}>{category.title}</MenuItem>
                ))}
            </Menu>
        </div>
        
    )
}

export default withRouter(Navbar)
