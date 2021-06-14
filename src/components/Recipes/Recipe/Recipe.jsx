import React, { useState } from 'react'
import { Card, CardHeader, CardContent, CardActions, CardMedia, IconButton, Typography, Collapse, Button ,Chip } from '@material-ui/core'
import { MoreVert, FavoriteBorder, Share, BookmarkBorder, ExpandMore } from '@material-ui/icons'
import clsx from 'clsx'
import useStyles from './styles'

const Recipe = (props) => {
    const classes = useStyles()
    const { label, image, cuisineType, ingredients, url, calories } = props
    const { ENERC_KCAL, FAT, PROCNT, CHOCDF } = props.totalNutrients
    const [expanded, setExpanded] = useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    return (
        <Card className={classes.root} key={url}>
            <CardMedia 
                title={label}
                image={image}
                style={{height: 0, paddingTop: '56.25%'}}
            />
            <CardHeader 
                action={
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                }
                title={label}
                subheader={cuisineType ? cuisineType[0] : ' '}
            />
            <CardContent>
                <Typography variant='subtitle2' style={{ marginBottom: '10px', fontWeight: 600 }}>CALORIES: {Math.round(calories)} cal</Typography>
                <Chip
                    label={`${ENERC_KCAL.label} ${Math.round(ENERC_KCAL.quantity)} ${ENERC_KCAL.unit} `}
                />
                <Chip
                    label={`${FAT.label} ${Math.round(FAT.quantity)} ${FAT.unit} `}
                />
                <Chip
                    label={`${CHOCDF.label} ${Math.round(CHOCDF.quantity)} ${CHOCDF.unit} `}
                />
                <Chip
                    label={`${PROCNT.label} ${Math.round(PROCNT.quantity)} ${PROCNT.unit} `}
                />
                <div style={{ marginTop: '20px' }}>
                    <Button variant='contained' size='large' color='secondary'>View Recipe</Button>
                </div>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteBorder />
                </IconButton>
                <IconButton aria-label="share">
                    <Share />
                </IconButton>
                <IconButton aria-label="bookmark">
                    <BookmarkBorder />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}  
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMore />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant='h6'>Ingredients:</Typography>
                    {ingredients && ingredients.map((ingredient) => (
                        <Typography paragraph>{ingredient.text}</Typography>
                    ))}
                </CardContent>
            </Collapse>
        </Card>
    )
}

export default Recipe
