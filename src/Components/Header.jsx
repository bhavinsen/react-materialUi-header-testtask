import { useState } from "react";
import { AppBar, Menu, IconButton, Toolbar, makeStyles, alpha, InputBase, Badge, Container, Box, MenuItem } from "@material-ui/core";
import { MoreVert, Search as SearchIcon } from '@material-ui/icons';
import instagram from '../assets/images/instagram.png';
import facebook from '../assets/images/Facebook.png';
import lineLogo from '../assets/images/lineLogo.png';
import assignment from '../assets/images/assignment.png';
import logo from '../assets/images/logo.png';
import search from '../assets/images/search.png';
import Cart from '../assets/images/cart.png';
import frame from '../assets/images/Frame.png';
import './style.css';


const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            marginLeft: "-40px",
        },
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    logoBanner: {
        [theme.breakpoints.down('md')]: {
            width: "150px",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: '#656565',
        fontSize: "19px",
        fontWeight: "bold",
        width: "470px",
        height: "65px",
        [theme.breakpoints.down('md')]: {
            width: "300px",
        },
        [theme.breakpoints.down('sm')]: {
            width: "245px",
            height: "50px",
        },
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        transition: theme.transitions.create('width'),
        padding: '0px 10px 0px 20px',
        width: '100% !important',
        height: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
        background: "#fff",
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            alignItems: 'center',
        },
    },
    sectionMobile: {
        display: 'flex',
        color: "#000",
        fontSize: "19px",
        justifyContent: "flex-end",
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    IconButton: {
        color: "#000",
    },
}));

const Header = () => {

    const classes = useStyles();

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const menuId = 'primary-search-account-menu';
    const [anchorEl, setAnchorEl] = useState(null);
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
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
            className="mobileMenu"
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" className="btnRegister">
                    Register
                </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 17 new notifications" className="btnsignin">
                    Sign In
                </IconButton>
            </MenuItem>
            <MenuItem >
                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    className="btnsignin"
                >
                    <img src={assignment} alt="" />
                    <span>Orders</span>
                </IconButton>
            </MenuItem >
            <MenuItem>
                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    className="btnsignin"
                    onClick={handleProfileMenuOpen}
                >
                    <img src={Cart} alt="hello" />
                    <span>Cart</span>
                </IconButton>
            </MenuItem>
        </Menu>
    );


    return (
        <>
            <Container>
                <div className="headerMain">
                    <div className="headerLang">
                        <img src={frame} alt="" />
                        <h4>ENG</h4>
                    </div>
                    <div className="headerWrap">
                        <img src={instagram} alt="" />
                        <img src={facebook} alt="" />
                        <img src={lineLogo} alt="" />
                    </div>
                </div>
                <AppBar className="appbarMain" position="static">
                    <Toolbar className="toolbarMain">
                        <div className="toolbarLogo">
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="open drawer"
                            >
                            </IconButton>
                            <img src={logo} alt="" className={classes.logoBanner} />
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <Box className="searchMain">
                                    <InputBase
                                        placeholder="Search Products"
                                        classes={{
                                            root: classes.inputRoot,
                                            input: classes.inputInput,
                                        }}
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                    <img src={search} alt="" />
                                </Box>
                            </div>
                        </div>
                        <div className={classes.sectionDesktop}>
                            <IconButton aria-label="show 4 new mails" className="btnRegister">
                                Register
                            </IconButton>
                            <IconButton aria-label="show 17 new notifications" className="btnsignin">
                                Sign In
                            </IconButton>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                className="btnsignin"
                            >
                                <img src={assignment} alt="" />
                                <span>Orders</span>
                            </IconButton>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                className="btnsignin"
                                onClick={handleProfileMenuOpen}
                            >
                                <img src={Cart} alt="hello" />
                                <span>Cart</span>
                            </IconButton>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreVert />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </Container>
            {renderMobileMenu}
        </>
    );
}

export default Header