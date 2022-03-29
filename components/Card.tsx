import React from 'react';
import Image from 'next/image';

import makeStyles from '@material-ui/core/styles/makeStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      margin: '0 5px',
      height: 400,
    },
    cardLink: {
      textDecoration: 'none',
      color: 'inherit',
    },
    cardLinkLess: {
      cursor: 'default',
    },
    text: {
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  })
);

function MediaCard(props) {
  const classes = useStyles();
  const { image, link, headline, description, isMoving, openModal } = props;

  return (
    <Card className={classes.card}>
      {link ? (
        <a
          className={classes.cardLink}
          onClick={(e) => {
            if (isMoving) {
              e.preventDefault();
            }
          }}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardActionArea style={{ cursor: link && 'pointer' }}>
            <div style={{width: '100%', height: '240px', position: 'relative'}}>
              <Image
                src={image}
                alt={headline}
                layout='fill'
                objectFit='contain'
              />
            </div>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.text}
              >
                {headline}
              </Typography>
            </CardContent>
          </CardActionArea>
        </a>
      ) : (
        <>
          <div style={{width: '100%', height: '240px', position: 'relative'}}>
            <Image
              src={image}
              alt={headline}
              layout='fill'
              objectFit='contain'
            />
          </div>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.text}
            >
              {headline}
            </Typography>
          </CardContent>
        </>
      )}
      <CardActions className={classes.content}>
        <Button
          onClick={openModal}
          size="small"
          color="primary"
          className={classes.text}
        >
          Ver detalhes
        </Button>
      </CardActions>
    </Card>
  );
}
export default MediaCard;
