import React from 'react';
import api from './api.js';
import RowMovie from './components/lists/RowMovie.js';
import './App.css'


const App = () => {
  const [movieList, setMovieList] = React.useState([])

  React.useEffect(() => {
    const loadAll = async () => {
      let list = await api.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);

  return (
    <div className='page'>
      <section className='lists'>
        {movieList.map((item, key) => (
          <RowMovie key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>

  )
}

export default App;
