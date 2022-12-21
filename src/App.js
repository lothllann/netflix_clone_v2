import React from 'react';
import api from './api.js';
import RowMovie from './components/lists/RowMovie.js';
import './App.css'
import Featured from './components/featured/Featured.js';


const App = () => {
  const [movieList, setMovieList] = React.useState([]);
  const [featuredData, setFeaturedData] = React.useState(null);

  React.useEffect(() => {
    const loadAll = async () => {

      //pegando a lista TOTAL
      let list = await api.getHomeList();
      setMovieList(list);

      //pegando o FEATURED
      //teste denovo
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await api.getMovieInfo(chosen.id, 'tv')


      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  return (
    <div className='page'>

      {featuredData &&
        <Featured item={featuredData} />
      }

      <section className='lists'>
        {movieList.map((item, key) => (
          <RowMovie key={key} title={item.title} items={item.items} />
        ))}
      </section>

    </div>

  )
}

export default App;
