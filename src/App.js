import React from 'react';
import RowMovie from './components/lists/RowMovie.js';
import './App.css'
import Featured from './components/featured/Featured.js';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import filmes from './api.js';


const App = () => {

  return (
    <div className='page'>
      <Header />
      <Featured />

      <section className='lists'>
        {filmes.map((i, key) => {
          return <RowMovie
            key={key}
            title={i.title}
            items={i.items}
          />
        })}
      </section>

      <Footer />
    </div>

  )
}

export default App;
