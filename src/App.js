import React from 'react';
import Header from './components/Header';
import Table from './components/Table';
import { StarwarsProvider } from './context/StarwarsProvider';

function App() {
  return (
    <main>
      <StarwarsProvider>
        <Header />
        <Table />
      </StarwarsProvider>
    </main>
  );
}

export default App;
