import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import logo from '../../assets/logo_medium.png'
import useStyles from './styles'

const Navbar = ({totalItems}) => {
    const classes = useStyles()
    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title} color='inherit'>
                            <img src={logo} alt='MidEastern Commerce' height='25px' className={classes.image}/>
                            Mid Eastern Chrome Stop
                        </Typography>
                        <div className={classes.grow}/>
                        <div className={classes.button}>
                            <IconButton aria-label='Show Cart Items' color='inherit'>
                                <Badge badgeContent={totalItems} color='secondary'>
                                    <ShoppingCart/>
                                </Badge>


                            </IconButton>
                        </div>
                </Toolbar>

            </AppBar>
        </>
    )
}

export default Navbar
