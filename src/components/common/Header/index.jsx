import React from 'react'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core'

const styles = theme => ({
  root: {
    flexGrow: 1,
    color: 'white',
  },
  appBar: {
    background: 'transparent',
  },
  toolbar: {
    display: 'flex',
  },
  title: {
    flex: 1,
    color: '#949494',
    textAlign: 'center',
    textTransform: 'uppercase',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
    },
  },
})

const Header = ({ classes }) =>
  <header className={classes.root}>
    <AppBar className={classes.appBar} elevation={0}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="secondary" className={classes.title}>
          <Link to="/">set schedule</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  </header>

Header.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Header)
