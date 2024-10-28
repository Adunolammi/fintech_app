import React from 'react';
import Badge from './components/Badge';
import HeadingSection from './components/HeadingSection';
import ActionButton from './components/ActionButton';
import PhoneCardSection from './components/PhoneCardSection';

function App() {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-black min-h-screen flex flex-col md:flex-row items-center justify-center text-white p-6">
      <div className="md:w-1/2 space-y-6">
        <Badge />
        <HeadingSection />
        <ActionButton />
      </div>
      <PhoneCardSection />
    </div>
  );
}

export default App;
