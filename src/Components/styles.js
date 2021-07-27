import { alpha, makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      marginLeft: '-40px'
    }
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  logoBanner: {
    [theme.breakpoints.down('md')]: {
      width: '150px'
    },
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      textAlign: 'left'
    }
  },
  headerMainWrap: {
    paddingBottom: '50px',
    boxShadow: '0px 4px 8px rgb(0 0 0 / 10%)'
  },
  appbarMain: {
    backgroundColor: '#fff',
    color: '#fff',
    boxShadow: 'none',
    '& .MuiToolbar-root': {
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'space-between',
        alignItems: 'end'
      }
    }
  },
  headerMain: {
    padding: '10px 0px 15px 0px',
    '& p': {
      fontSize: '15px',
      fontWeight: 'bold',
      margin: '0px 10px',
      paddingLeft: '10px',
      borderLeft: '1px solid #000'
    }
  },
  headerSocial: {
    '& img': {
      margin: '0px 4px'
    }
  },
  searchMain: {
    boxShadow: '0px 4px 7px rgba(0, 0, 0, 0.1)',
    '& img': {
      paddingRight: '20px',
      [theme.breakpoints.down('xs')]: {
        width: '16px'
      }
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none'
  },
  inputRoot: {
    color: '#656565',
    fontSize: '19px',
    fontWeight: 'bold',
    width: '470px',
    height: '65px',
    [theme.breakpoints.down('md')]: {
      width: '270px'
    },
    [theme.breakpoints.down('sm')]: {
      width: '245px',
      height: '50px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '180px',
      height: '50px'
    }
  },
  inputInput: {
    transition: theme.transitions.create('width'),
    padding: '0px 10px 0px 20px',
    width: '100% !important',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0px 10px 0px 10px',
      fontSize: '16px'
    },
    background: '#fff'
  },
  toolbarLogo: {
    [theme.breakpoints.down('xs')]: {
      display: 'block'
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center'
    }
  },
  sectionMobile: {
    display: 'flex',
    color: '#000',
    fontSize: '19px',
    justifyContent: 'flex-end',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  IconButton: {
    color: '#000'
  },
  btnRegister: {
    background: '#2D9CDB',
    boxShadow: '0px 4px 10px rgb(0 0 0 / 20%)',
    borderRadius: '8px',
    color: '#fff',
    fontWeight: '700',
    padding: '5px',
    height: '40px',
    fontSize: '19px',
    [theme.breakpoints.down('md')]: {
      fontSize: '15px'
    },
    '&:hover': {
      background: '#86c1e3'
    }
  },
  btnsignin: {
    '& p': {
      color: '#000',
      fontSize: '19px',
      fontWeight: 'bold',
      margin: '0px 7px',
      [theme.breakpoints.down('md')]: {
        fontSize: '15px'
      }
    },
    '& img': {
      marginRight: '5px'
    }
  },
  btnMobilesignin: {
    margin: '0px',
    padding: '12px 0px'
  }
}))
