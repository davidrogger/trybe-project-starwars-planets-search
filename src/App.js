import React from 'react';
import Header from './components/Header';
import { StarwarsProvider } from './context/StarwarsProvider';

function App() {
  return (
    <main>
      <StarwarsProvider>
        <Header />
      </StarwarsProvider>
    </main>
  );
}

export default App;
