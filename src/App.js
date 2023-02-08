import React, { useState } from 'react';
import AddressInput from './components/AddressInput';
import Weather from './components/Weather';

function App() {

  return (
    <div>
      <AddressInput/>
      <Weather/>
    </div>
  );
}

export default App;
