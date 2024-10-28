import React from 'react';
import FeaturedBadge from './components/FeaturedBadge';
import FeatureList from './components/FeatureList';
import ActionButton from './components/ActionButton';
import PhoneScreens from './components/PhoneScreens';

function App() {
  return (
    <div className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-center text-white p-6">
      <div className="md:w-1/2 space-y-4">
        <FeaturedBadge />
        <h1 className="text-4xl font-bold leading-tight">
          ALL THE FEATURES IN ONE APP
        </h1>
        <FeatureList />
        <ActionButton />
      </div>
      <PhoneScreens />
    </div>
  );
}

export default App;
