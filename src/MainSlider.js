import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button } from '@material-ui/core';
import { Carousel, CarouselSlide } from 'material-ui-carousel'

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        flexGrow: 1,
        justify: 'center',
        spacing: 2,
    },
    cardRoot: {
        spacing: theme.spacing(2),
        width: 200,
    },
    cardMedia:{
        component: 'img',
        height: 200,
    },
}));


export default function MainSlider(props){
    const classes = useStyles();
    const { mainSliderItems } = props;

    return(
        <Carousel>
            <CarouselSlide>
                <Grid container direction="row" justify="space-evenly" alignItems="center">
                    {mainSliderItems.map((item) => (
                        <Card key={item.id} className={classes.cardRoot}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={item.image}
                                    title={item.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
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
                    ))}
                </Grid>
            </CarouselSlide>
            <CarouselSlide>
                <Typography variant='h2'>asdf</Typography>
            </CarouselSlide>
        </Carousel>
    )
}