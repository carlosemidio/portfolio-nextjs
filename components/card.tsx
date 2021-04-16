import React from "react";

import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      margin: "0 20px",
    },
    media: {
      height: 240,
    },
  })
);

function MediaCard(props) {
  const classes = useStyles();
  const { image, link, headline, description, isMoving } = props;

  return (
    <a
      onClick={(e) => {
        if (isMoving) {
          e.preventDefault();
        }
      }}
      href={link}
      target="_blank"
    >
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} image={image} title={headline} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {headline}
            </Typography>
            <Typography component="p">{description}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <Button size="small" color="primary">
            Share
          </Button> */}
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </a>
  );
}
export default MediaCard;
