import React from 'react';
import Layout from './components/layout/Layout';
import Hero from '../src/sections/Hero';
import AllFeatures from '../src/sections/AllFeatures';
import Security from '../src/sections/Security';
import Benefits from '../src/sections/Benefits';
import Testimonials from '../src/sections/Testimonials';
import Appp from './Appp'
import Ap from './Ap'
import Ap1 from './Ap1'
import App2 from './App2'
import App3 from './App3'


const App = () => {
  return (
    <Layout>
      <Hero />
      <Appp />
      <Ap />
      <Ap1 />
      <App2 />
      <App3 />
    
    </Layout>
  );
};

export default App;