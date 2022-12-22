import React from 'react';
import api from './api.js';
import RowMovie from './components/lists/RowMovie.js';
import './App.css'
import Featured from './components/featured/Featured.js';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';


const App = () => {
  const [movieList, setMovieList] = React.useState([]);
  const [featuredData, setFeaturedData] = React.useState(null);
  const [blackHeader, setBlackHeader] = React.useState(false);

  React.useEffect(() => {
    const loadAll = async () => {

      //pegando a lista TOTAL
      let list = await api.getHomeList();
      setMovieList(list);

      //pegando o FEATURED

      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await api.getMovieInfo(chosen.id, 'tv')


      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);


  React.useEffect(() => {
    const scrollListener = () =>{
      if (window.scrollY > 50) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return ()=>{
    window.removeEventListener('scroll', scrollListener);
    }
  }, [])
  

  return (
    <div className='page'>

      <Header blackHeader={blackHeader}/>

      {featuredData && <Featured item={featuredData} />}

      <section className='lists'>
        {movieList.map((item, key) => (
          <RowMovie key={key} title={item.title} items={item.items} />
        ))}
      </section>


     <Footer />     
    </div>

  )
}

export default App;
