import { useState } from "react";
import {
    AppBar,
    Menu,
    IconButton,
    Toolbar,
    InputBase,
    Container,
    Box,
    MenuItem,
    Typography,
} from "@material-ui/core";
import { MoreVert, Search as SearchIcon } from "@material-ui/icons";
import { useStyles } from "./styles";
import instagram from "../assets/images/instagram.png";
import facebook from "../assets/images/Facebook.png";
import lineLogo from "../assets/images/lineLogo.png";
import assignment from "../assets/images/assignment.png";
import logo from "../assets/images/logo.png";
import search from "../assets/images/search.png";
import Cart from "../assets/images/cart.png";
import frame from "../assets/images/Frame.png";

const Header = () => {
    const classes = useStyles();

    const mobileMenuId = "primary-search-account-menu-mobile";
    const menuId = "primary-search-account-menu";
    const setAnchorEl = useState(null)[1];
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
            className={classes.mobileMenu}
        >
            <MenuItem>
                <IconButton
                    aria-label="show 4 new mails"
                    className={classes.btnRegister}
                >
                    Register
                </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton
                    aria-label="show 17 new notifications"
                    className={` ${classes.btnsignin} ${classes.btnMobilesignin}`}
                >
                    <Typography>Sign In</Typography>
                </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    className={` ${classes.btnsignin} ${classes.btnMobilesignin}`}
                >
                    <img src={assignment} alt="assignment" />
                    <Typography>Orders</Typography>
                </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    className={` ${classes.btnsignin} ${classes.btnMobilesignin}`}
                    onClick={handleProfileMenuOpen}
                >
                    <img src={Cart} alt="hello" />
                    <Typography>Cart</Typography>
                </IconButton>
            </MenuItem>
        </Menu>
    );

    return (
        <>
            <Box className={classes.headerMainWrap}>
                <Container>
                    <Box
                        className={classes.headerMain}
                        display="flex"
                        alignItems="center"
                        justifyContent="flex-end"
                    >
                        <Box display="flex" alignItems="center">
                            <img src={frame} alt="frame" />
                            <Typography>ENG</Typography>
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            className={classes.headerSocial}
                        >
                            <img src={instagram} alt="instagram" />
                            <img src={facebook} alt="facebook" />
                            <img src={lineLogo} alt="lineLogo" />
                        </Box>
                    </Box>
                    <AppBar className={classes.appbarMain} position="static">
                        <Toolbar className={classes.toolbarMain}>
                            <Box className={classes.toolbarLogo} display="flex">
                                <img
                                    src={logo}
                                    alt="logo"
                                    className={classes.logoBanner}
                                />
                                <Box className={classes.search}>
                                    <Box
                                        className={classes.searchIcon}
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="flex-end"
                                    >
                                        <SearchIcon />
                                    </Box>
                                    <Box
                                        className={classes.searchMain}
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="flex-end"
                                    >
                                        <InputBase
                                            placeholder="Search Products"
                                            classes={{
                                                root: classes.inputRoot,
                                                input: classes.inputInput,
                                            }}
                                            inputProps={{ "aria-label": "search" }}
                                        />
                                        <img src={search} alt="search" />
                                    </Box>
                                </Box>
                            </Box>
                            <Box className={classes.sectionDesktop}>
                                <IconButton
                                    aria-label="show 4 new mails"
                                    className={classes.btnRegister}
                                >
                                    Register
                                </IconButton>
                                <IconButton
                                    aria-label="show 17 new notifications"
                                    className={classes.btnsignin}
                                >
                                    <Typography>Sign In</Typography>
                                </IconButton>
                                <IconButton
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    className={classes.btnsignin}
                                >
                                    <img src={assignment} alt="assignment" />
                                    <Typography>Orders</Typography>
                                </IconButton>
                                <IconButton
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    className={classes.btnsignin}
                                    onClick={handleProfileMenuOpen}
                                >
                                    <img src={Cart} alt="hello" />
                                    <Typography>Cart</Typography>
                                </IconButton>
                            </Box>
                            <Box className={classes.sectionMobile}>
                                <IconButton
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    color="inherit"
                                >
                                    <MoreVert />
                                </IconButton>
                            </Box>
                        </Toolbar>
                    </AppBar>
                </Container>
            </Box>
            {renderMobileMenu}
        </>
    );
};

export default Header;
