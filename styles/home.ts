import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundImage: "url('/background.png')",
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center top',
      backgroundAttachment: 'fixed',
      position: 'relative',
      zIndex: 0,
      '&::after': {
        content: '""',
        opacity: '.7',
        zIndex: -1,
        backgroundColor: '#000000',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
      },
    },
    navbar: {
      listStyle: 'none',
      color: '#ffffff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 80,
      paddingBottom: 80,
      '& > li': {
        marginLeft: 40,
        '& > a': {
          color: '#ffffff',
          fontSize: 24,
          fontFamily: 'Montserrat-Regular',
          textDecoration: 'none',
        },
      },
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    profileImage: {
      width: 200,
      height: 200,
      borderRadius: '50%',
    },
    profileMobile: {
      paddingTop: 80,
      display: 'none',
      [theme.breakpoints.down('xs')]: {
        display: 'flex',
        justifyContent: 'center',
      },
    },
    backgroundBox: {
      position: 'relative',
      width: '100%',
      height: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    textFromLeft: {
      fontSize: 60,
      fontFamily: 'Montserrat-Regular',
      color: '#ffffff',
      animationName: '$fadeLeft',
      animationDuration: '3s',
      left: 0,
      padding: 15,
      [theme.breakpoints.down('xs')]: {
        fontSize: 28,
      },
    },
    textFromRight: {
      fontSize: 60,
      fontFamily: 'Montserrat-Regular',
      color: '#ffffff',
      animationName: '$fadeRight',
      animationDuration: '3s',
      left: 0,
      padding: 15,
      [theme.breakpoints.down('xs')]: {
        fontSize: 28,
      },
    },
    '@keyframes fadeLeft': {
      '0%': {
        transform: 'translateX(-400%)',
      },
      '100%': {
        transform: 'translateX(0%)',
      },
    },
    '@keyframes fadeRight': {
      '0%': {
        transform: 'translateX(400%)',
      },
      '100%': {
        transform: 'translateX(0%)',
      },
    },
    sectionTitle: {
      paddingTop: 40,
      width: '100%',
      fontSize: 100,
      fontFamily: 'Montserrat-Regular',
      textAlign: 'center',
      color: '#ffffff',
      [theme.breakpoints.down('xs')]: {
        fontSize: 60,
      },
    },
    aboutBox: {
      display: 'flex',
      justifyContent: 'center',
      padding: 15,
      width: '100%',
    },
    aboutText: {
      color: '#ffffff',
      fontSize: 24,
      fontFamily: 'Montserrat-Regular',
      maxWidth: 600,
    },
    services: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
      width: '100%',
    },
    servicesBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
      maxWidth: 1240,
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        padding: 0,
      },
    },
    serviceCard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: 15,
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        padding: 0,
      },
    },
    serviceTitle: {
      color: '#ffffff',
      fontFamily: 'Montserrat-Regular',
    },
    serviceText: {
      color: '#ffffff',
      fontSize: 24,
      fontFamily: 'Montserrat-Regular',
      maxWidth: '100%',
    },
  })
);

export default useStyles;
