import React from "react";
import Head from "next/head";
import clsx from "clsx";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles({
  list: {
    width: 250,
    backgroundColor: "#708090",
    height: "100%",
    color: "#ffffff",
  },
  menuLink: {
    color: "#ffffff",
    textDecoration: "none",
  },
  menu: {
    zIndex: 99,
    color: "#ffffff",
    position: "absolute",
    top: 15,
    left: 15,
  },
});

const menus = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "Quem sou",
    link: "#about",
  },
  {
    name: "Oque faço",
    link: "#whatido",
  },
  {
    name: "Portifólio",
    link: "#portfolio",
  },
  {
    name: "Fale Comigo",
    link: "#contact",
  },
];

export default function SwipeableTemporaryDrawer(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { children } = props;

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  const list = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menus.map((menu, index) => (
          <a
            href={menu.link}
            key={"menu-" + menu.name}
            className={classes.menuLink}
          >
            <ListItem button key={menu.name}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={menu.name} />
            </ListItem>
          </a>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key="left">
        <Head>
          <title>Carlos Emídio</title>
        </Head>
        <IconButton
          className={classes.menu}
          color="inherit"
          aria-label="Menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <SwipeableDrawer
          anchor="left"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
        {children}
      </React.Fragment>
    </div>
  );
}
