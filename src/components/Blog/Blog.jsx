import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import superfoodImage from '../../assets/superfood_blog.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={superfoodImage}
          title="10 SuperFood"
          style={{ height: '300px' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            10 Super Foods
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            What are superfoods and why should you eat them? ... The term “superfood” is a fairly new term referring to foods that offer maximum nutritional benefits for minimal ...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
