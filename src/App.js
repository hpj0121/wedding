import React from 'react';
import { useRef } from 'react';

import './App.css';
import NavBar from './components/NavBar'
import ScrollAni from './components/ScrollAni';
import Directions from 'components/Directions';
import WeddingHall from 'components/WeddingHall';
import AccountNumber from 'components/AccountNumber';
import ShareKakao from 'components/ShareKakao';
import SimpleSlider from 'components/SimpleSlider';
import Invitation from 'components/Invitation';

const App = () => {
    const galleryRef = useRef(null);
    const mapRef = useRef(null);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    const onClickNavMenu = (e) => {
      const { menu } = e.currentTarget.dataset;
      if(menu === "gallery") galleryRef.current.scrollIntoView({ behavior: 'smooth' });
      else if(menu === "map") mapRef.current.scrollIntoView({ behavior: 'smooth' });
      else scrollToTop();
    }

    return (
      <div className="container">
        <NavBar onClickNavMenu={onClickNavMenu}></NavBar>
        <ScrollAni></ScrollAni>
        <Invitation></Invitation>
        <SimpleSlider galleryRef={galleryRef}></SimpleSlider>
        <Directions mapRef={mapRef}></Directions>
        <WeddingHall></WeddingHall>
        <AccountNumber></AccountNumber>
        <ShareKakao></ShareKakao>
      </div>
    );
}

export default App;
