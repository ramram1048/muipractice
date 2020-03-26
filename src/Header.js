import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Toolbar, Grid, Link, InputBase, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  title: {
    variant: 'h2',
  },
  topbar: {
    justifyContent: 'flex-end',
    overflowX: 'auto',
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  topbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    border: `1px solid`,
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
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));


export default function Header(props) {
  const classes = useStyles();
  const { topbarItems } = props;

  return (
    <React.Fragment>
      <Toolbar component="nav" variant="dense" className={classes.topbar}>
        {topbarItems.map((item) => (
          <Link
            color="inherit"
            noWrap
            key={item.title}
            variant="body2"
            href={item.url}
            className={classes.topbarLink}
          >
            {item.title}
          </Link>
        ))}
      </Toolbar>
      <Grid container direction="row" justify="space-evenly" alignItems="center">
          <Typography className={classes.title}>Long-Long-Title</Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <img width="200px" height="100px" src="https://source.unsplash.com/random" alt="ads here"/>
      </Grid>
    </React.Fragment>
  );
}