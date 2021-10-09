import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { red } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Router from 'next/router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '33%',
      [theme.breakpoints.down('md')]: {
        width: '49%',
        marginBottom: '15px!important',
      },
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        marginBottom: '15px!important',
      },
      // backgroundColor: [theme.palette.backgroundColor][0],
      // border: [theme.palette.border][0],
    },
    cardTitle: {
      '& > div > span': {
        fontFamily: 'Calibri-Regular!important',
        textAlign: 'center',
      },
    },
    cardDescription: {
      fontFamily: 'Calibri-Regular',
      textAlign: 'center',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
);

interface ModuleProps {
  name?: string;
  slug?: string;
  title?: string;
  info?: string;
  updated_at: Date;
}

interface ModuleCardProps {
  key: number;
  module: ModuleProps;
  avatarTitle?: string;
  avatarUrl?: string;
  imageTitle?: string;
  imageUrl?: string;
  moduleName?: string;
  moduleUrl?: string;
  modulePage?: string;
  moduleDescription?: string;
  handleOpen?: () => void;
  appFontSize?: number;
}

const Module = React.memo((props: ModuleCardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={props.avatarUrl && <Avatar src={props.avatarUrl} />}
        className={classes.cardTitle}  
        title={
          <p style={{ fontSize: 10 + props.appFontSize ? props.appFontSize : 16 }}>
            {props.module.title}
          </p>
        }
      />
      <CardActionArea
        onClick={(event) => {
          if (props.modulePage != undefined) {
            Router.push(`/${props.modulePage}/${props.module.slug}`);
          }
        }}
      >
        {props.imageUrl && (
          <CardMedia className={classes.media} image={props.imageUrl} />
        )}
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.cardDescription}
            component="p"
            style={{ fontSize: props.appFontSize ? props.appFontSize : 16 }}
          >
            {props.moduleDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
});

export default Module;
