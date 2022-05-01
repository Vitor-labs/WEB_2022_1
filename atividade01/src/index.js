import React from 'react';
import ReactDOM from 'react-dom';

// internal imports, not modify
import './index.css';
import { baki_url, yujiro_url, aldo_url, mcgregor_url, whindersson_url, popo_url } from './components/constants';
import World from './components/World';
import Arena from './components/Arena';
import Hero from './components/Hero';
import Enemy from './components/Enemy';

ReactDOM.render(
  <React.StrictMode>
    <World>
      <Arena arena="baki anime" status={true}>
        <Hero name="Baki Hanma" subtitle="The son of the Ogre" image={baki_url} />
        <Enemy name="Yujiro" subtitle="The Ogre Himself" image={yujiro_url} />
      </Arena>
      <br />
      <Arena arena="ufc 194">
        <Hero name="Aldo" subtitle="Devia ter ganhado" image={aldo_url} />
        <Enemy name="McGregor" subtitle="The best fighter" image={mcgregor_url} />
      </Arena>
      <br />
      <Arena arena="massacre">
        <Hero name="Whindersson" subtitle="soco na cara nunes" image={whindersson_url} />
        <Enemy name="Popo" subtitle="não nocauteou pq não quis" image={popo_url} />
      </Arena>
    </World>
  </React.StrictMode>,
  document.getElementById('root')
);
