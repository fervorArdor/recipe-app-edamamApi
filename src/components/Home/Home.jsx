import React from 'react'
import { categories } from '../constants/categories'
import { Button, Typography } from '@material-ui/core'
import { Visibility as Views } from '@material-ui/icons'
import useStyles from './styles'

const Home = () => {
    const classes = useStyles()
    
    return (
        <div>
            <div className={classes.displayFlex}>
                {categories.map(category => (
                    <div key={category.title} className={classes.container}>
                        <img className={classes.images} src={category.img} alt={category.title} title={category.title}/>
                        <Button className={classes.button} size='large' variant='contained' color='secondary'>
                            {category.title}
                        </Button>
                        <div className={classes.view}>
                            <Views />
                            <Typography variant='subtitle1'>{category.views}</Typography>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
