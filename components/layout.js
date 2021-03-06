import Head from 'next/head';
import styles from './layout.module.css';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssessmentIcon from '@material-ui/icons/Assessment';
import BuildIcon from '@material-ui/icons/Build';
import ErrorIcon from '@material-ui/icons/Error';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid'
import DrawerDemo from './DrawerDemo';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import ThumbUp from '@material-ui/icons/ThumbUp'
import ThumbDown from '@material-ui/icons/ThumbDown'
import ThumbsUpDown from '@material-ui/icons/ThumbsUpDown'
import { MemoryRouter as Router } from 'react-router'
import { Link as RouterLink } from 'react-router-dom'
import Copyright from '../components/copyright';



const name = 'System Status';
export const siteTitle = 'Next.js Demo';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function Layout({ children, home }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Bryce's project in Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <div className="App">
            <DrawerDemo/>  
            </div>
          </>
        ) : (
          <>
            <div className="App">
            <DrawerDemo/>  
            </div>

          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
          <br/>
          <br/>
          <Router>
          <Grid container spacing={1}  direction="row" alignItems="center">
            <Grid item>
              <ThumbsUpDown/>
            </Grid>
            <Grid item>
              <h3>Was this page helpful?</h3>
            </Grid>
          </Grid>
          <Grid container spacing={4} direction="row" alignItems="center">
            <Grid item>
              <Button startIcon={<ThumbUp />} variant='text' style={{borderColor: '#7E9EF5', color: "#FFFFFF" }} component={RouterLink} to="/">Yes</Button>
              </Grid>
            <Grid item>
              <Button startIcon={<ThumbDown />} variant='text' style={{borderColor: '#FFE4BD', color: "#FFFFFF" }} component={RouterLink} to="/">No</Button>
              </Grid>
          </Grid>
          <br/>
          
          </Router>
          <Copyright />
        </div>
        
      )}
    </div>
  )
}
