import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Hidden,
  List,
  ListItem,
  Drawer,
  Divider,
  ListItemText,
  Link,
  Typography,
} from "@material-ui/core";

import { Link as LinkS } from "react-scroll";
//import Fade from "react-reveal/Fade";


// Importamos los principales componentes
import NavbarHome from "./NavbarHome";
import Footer from "./Footer";
import CarouselBooks from "./CarouselBooks";

// Importamos los estilos de color del boton
// import theme from "../ThemeConfig"; 

export const Home = () => {
  // Sección para personalizar componentes UI

  const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    root: {
      display: "flex",
    },
    botonPersonalizado: {
      margin: theme.spacing(1),
      backgroundImage: "none",
      textTransform: "none",
    },
    drawer: {
      [theme.breakpoints.down("sm")]: {
        width: 240,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      [theme.breakpoints.down("sm")]: {
        width: 240,
        flexShrink: 0,
        color: "#FFF",
        background: "hsl(222, 13%, 15%)",
      },
    },
    content: {
      flexGrow: 1,
    },
    submenu: {
      margin: "0 1.5em",
      "&:active": {
        color: "#C0B3A0",
      },
    },
    title: {
      color: '#3F3250',
      fontWeight: '400',
      margin: '20px',
    },    
    subtitle: {
      textAlign: 'left',
      color: '#3F3250',
      paddingLeft: '1em',
      fontWeight: '300',
      margin: '10px',
    }
  }));

  const classes = useStyles();

  // Funciones para abrir y cerrar el menu responsive
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    console.log(mobileOpen);
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <>
      <div className={classes.root}>
        <NavbarHome openDrawer={handleDrawerToggle} />
        {/* Esta parte es del menu responsive */}
        <Hidden smUp>
          <Drawer
            className={classes.drawer}
            variant="temporary"
            classes={{ paper: classes.drawerPaper }}
            open={mobileOpen}
            onClose={handleDrawerToggle}
          >
            <div className={classes.offset}></div>
            <Divider></Divider>
            <List component="nav">
              <ListItem button>
                <ListItemText>
                  <LinkS
                    className={classes.submenu}
                    to="home-slider"
                    spy={true}
                    smooth={true}
                    offset={-56}
                    duration={1000}
                  >
                    Biblioteca
                  </LinkS>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>
                  <LinkS
                    className={classes.submenu}
                    to="home-what-is-readit"
                    spy={true}
                    smooth={true}
                    offset={-56}
                    duration={1000}
                  >
                    Mis Libros
                  </LinkS>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>
                  <LinkS
                    className={classes.submenu}
                    to="home-services"
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={1000}
                  >
                    Mis notas
                  </LinkS>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>
                  <Link
                    href="/login"
                    color="inherit"
                    underline="none"
                    className={classes.submenu}
                  >
                    Mi Cuenta
                  </Link>
                </ListItemText>
              </ListItem>
            </List>
          </Drawer>
        </Hidden>
        {/* Cuerpo de la página */}
        <main className={classes.content}>
            <div className={classes.offset}></div>
            <Typography variant="h2" component="h1" className={classes.title}>Biblioteca</Typography>
            <Typography variant="h3" component="h2" className={classes.subtitle}>Catálogo</Typography>
            <CarouselBooks/>
            <Typography variant="h3" component="h2" className={classes.subtitle}>Buscador</Typography>
            <Footer />
        </main>
      </div>
    </>
  );
};
