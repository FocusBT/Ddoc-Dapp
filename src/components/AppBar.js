import "./AppBar.css";
import * as React from "react";
import { Link } from "react-router-dom";
import Wallet from "./Wallet";
import myImage from "./assets/02.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import { useEffect, useState } from "react";

import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const pages = ["Home", "Admin", "Client"];
const pageLinks = ["/", "/admin", "/client"];
const ButtonAppBar = (props) => {
  var count = 0;
  const [isLoading, setIsLoading] = useState();
  const [anchorElNav, setAnchorElNav] = React.useState();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    setIsLoading(true);

    console.log(props.AdminAddress, props.currentAccount);
    if (props.AdminAddress === props.currentAccount) {
      console.log("it is admin");
      const previousSecondElementOfTheArray = pages.splice(2, 1);
      const hehe = pageLinks.splice(2, 1);
    } else {
      count++;
      if (count == 1) {
        const previousSecondElementOfTheArray = pages.splice(1, 1);
        const hehe = pageLinks.splice(1, 1);
      } else {
      }
      console.log("it is user");
    }

    setIsLoading(false);

    // }
  }, []);

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <>
          {" "}
          <AppBar position="static" style={{ backgroundColor: "#002D74" }}>
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  <img src={myImage} alt="My Image" className="logo123" />
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    {pages.map((page, i) => (
                      <Link
                        to={pageLinks[i]}
                        style={{ textDecoration: "none" }}
                      >
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                          <Typography
                            textAlign="center"
                            sx={{ color: "#002D74" }}
                          >
                            {page}
                          </Typography>
                        </MenuItem>
                      </Link>
                    ))}
                  </Menu>
                </Box>

                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href=""
                  sx={{
                    mr: 2,
                    display: { xs: "flex", md: "none" },
                    flexGrow: 1,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  <img src={myImage} alt="My Image" className="logo123" />
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  {pages.map((page, i) => (
                    <Link
                      to={pageLinks[i]}
                      style={{
                        textDecoration: "none",
                        borderLeft: "1px solid #767373",
                        padding: "0rem 2rem",
                        boxShadow: "inset black 0px 0px 17px 0px",
                      }}
                    >
                      <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{
                          my: 2,
                          color: "white",
                          display: "block",
                          fontStyle: "italic",
                        }}
                      >
                        {page}
                      </Button>
                    </Link>
                  ))}
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </>
      )}
    </>
  );
};

export default ButtonAppBar;
