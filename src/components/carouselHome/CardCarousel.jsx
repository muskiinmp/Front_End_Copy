import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Carousel from "react-elastic-carousel";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const tutorialSteps = [
  {
    label: "teste",
    imgPath:
      "https://static.wixstatic.com/media/36ee3b_3e32e5ee4b694f2388ac6446eeba1e72~mv2.jpg/v1/fill/w_280,h_420,al_c,q_85,usm_0.66_1.00_0.01/36ee3b_3e32e5ee4b694f2388ac6446eeba1e72~mv2.webp",
    c: "512",
    desc: "this is a TV of 32 inch not for you"
  },
  {
    label: "teste",
    imgPath:
      "https://static.wixstatic.com/media/36ee3b_2d9533e5e5aa47db8bff11f33dffd977~mv2.jpg/v1/fill/w_236,h_420,al_c,q_85,usm_0.66_1.00_0.01/36ee3b_2d9533e5e5aa47db8bff11f33dffd977~mv2.webp",
    c: "312",
    desc: "this is a TV of 32 inch not for you"
  },
  {
    label: "teste",
    imgPath:
      "https://static.wixstatic.com/media/36ee3b_1824214de30b430f885e699f710ab296~mv2.jpg/v1/fill/w_280,h_420,al_c,q_85,usm_0.66_1.00_0.01/36ee3b_1824214de30b430f885e699f710ab296~mv2.webp",
    c: "412",
    desc: "this is a TV of 32 inch not for you"
  },
  {
    label: "teste",
    imgPath:
      "https://static.wixstatic.com/media/36ee3b_f7c4befdfc63400598dbb1657bbfdce6~mv2.jpg/v1/fill/w_280,h_420,al_c,q_85,usm_0.66_1.00_0.01/36ee3b_f7c4befdfc63400598dbb1657bbfdce6~mv2.webp",
    c: "132",
    desc: "this is a TV of 32 inch not for you"
  },
  {
    label: "teste",
    imgPath:
      "https://static.wixstatic.com/media/36ee3b_83da74e02c14400cbe9a0a204e0309f3~mv2.jpg/v1/fill/w_280,h_418,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ED5A1591_JPG.jpg",
    c: "112",
    desc: "this is a TV of 32 inch not for you"
  }
];

const useStyles = makeStyles({
  root: {
    margin: "10px 10px",
    display: "inline-block"
  },
  header: {
    flexGrow: 1
  },
  media: {
    height: 258,
    
  },
  paper: {
    width: 200
  },
  image: {
    width: "100%"
  },
  typo: {
    textAlign: "center"
  },
  mx: {
    margin: "6px 0px"
  },
  card: {
    width: 242
  }
});

const Cards = () => {
  const classes = useStyles();
  return (
    <Carousel classeName={classes.root}>
      {tutorialSteps.map((item, i) => (
        <CardSwipeable key={i} item={item} />
      ))}
    </Carousel>
  );
};

function CardSwipeable(props) {
  const classes = useStyles();
  return (
    <div classes={classes.root}>
      <Card className={`${classes.root} ${classes.card}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.item.imgPath}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              className={classes.typo}
              gutterBottom
              variant="h6"
              component="h6"
              color="secondary"
            >
              ${props.item.c}
            </Typography>
            <Typography
              className={`${classes.typo} ${classes.mx}`}
              variant="h5"
              color="inherit"
              component="h3"
            >
              {props.item.label}
            </Typography>
            <Typography
              className={classes.typo}
              color="textSecondary"
              component="p"
            >
              {props.item.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={`${classes.root} ${classes.card}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.item.imgPath}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              className={classes.typo}
              gutterBottom
              variant="h6"
              component="h6"
              color="secondary"
            >
              ${props.item.c}
            </Typography>
            <Typography
              className={`${classes.typo} ${classes.mx}`}
              variant="h5"
              color="inherit"
              component="h3"
            >
              {props.item.label}
            </Typography>
            <Typography
              className={classes.typo}
              color="textSecondary"
              component="p"
            >
              {props.item.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={`${classes.root} ${classes.card}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.item.imgPath}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              className={classes.typo}
              gutterBottom
              variant="h6"
              component="h6"
              color="secondary"
            >
              ${props.item.c}
            </Typography>
            <Typography
              className={`${classes.typo} ${classes.mx}`}
              variant="h5"
              color="inherit"
              component="h3"
            >
              {props.item.label}
            </Typography>
            <Typography
              className={classes.typo}
              color="textSecondary"
              component="p"
            >
              {props.item.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Cards;