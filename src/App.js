import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Container, useScrollTrigger, Toolbar, Box } from '@material-ui/core';
import Header from './Header';
import MainSlider from './MainSlider';
import TopMenu from './TopMenu';
import ProductCardBox from './ProductCardBox';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
      marginTop: theme.spacing(3),
    },
  }));

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const topbarItems = [
    { title: '로그인', url: '#' },
    { title: '회원가입', url: '#' },
    { title: '장바구니', url: '#' },
    { title: '디자인함', url: '#' },
    { title: '마이페이지', url: '#' },
    { title: '고객센터', url: '#' },
  ];
  
const mainSliderItems = [
  {id: 1, image: 'https://source.unsplash.com/random', title: 'A Nice Car'},
  {id: 2, image: 'https://source.unsplash.com/random', title: 'Delicious Coffee'},
  {id: 3, image: 'https://source.unsplash.com/random', title: 'A Beautiful Dog'},
];

export default function App(props) {
    const classes = useStyles();
  
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header topbarItems={topbarItems} />
          <ElevationScroll {...props}>
            <TopMenu />
          </ElevationScroll>
          <MainSlider mainSliderItems={mainSliderItems} />
          <ProductCardBox></ProductCardBox>
        </Container>
      </React.Fragment>
    );
  }