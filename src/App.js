import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import Contents from './components/Contents';

const App = () => {
  const [activeTab, setActiveTab] = useState('default');

  return (
    <div>
      <Header activeTab={activeTab} />
      <Contents activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;
