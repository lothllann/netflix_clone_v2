import React from 'react'
import filmes, { getMovieInfo, getMovies } from '../../api';
import './Featured.css'

const Featured = () => {
    const imageHost = "https://image.tmdb.org/t/p/original";
    const [featuredData, setFeaturedData] = React.useState({})




    const chooseFeatured = async (_items) => {
        try {
            const data = await getMovies(filmes.find(
                (i) => (i.slug === 'originals')
            ).items);
            const movies = data?.results;
            const randomIndex = Math.floor(Math.random() * data.results.length);
            const chosen = movies[randomIndex];
            const chosenInfo = await getMovieInfo(chosen.id, 'tv')
            setFeaturedData(chosenInfo);
           
        } catch (error) { console.log(error) }
    }

    React.useEffect(() => {
        chooseFeatured();
    }, []);


    const year = new Date(featuredData.first_air_date);
    const generos = [];

    for (let i in featuredData.genres) {
        generos.push(featuredData.genres[i].name)
    }



    // function truncate(str) {
    //     return str?.length > 50 ? str.subtr(0, 50) + '...' : str;
    // }
    // let description = truncate(featuredData?.overview);


    return (
        <section className='featured' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${imageHost}${featuredData.backdrop_path})`
        }}>
            <div className='featured--vertical'>
                <div className='featured--horizontal'>
                    <div className='featured--name'>{featuredData.name || featuredData.title || featuredData.original_name}</div>
                    <div className='featured--info'>
                        <div className='featured--points'>{featuredData.vote_average} pontos</div>
                        <div className='featured--year'>{year.getFullYear()}</div>
                        <div className='featured--seasons'>{featuredData.number_of_seasons} temporada{featuredData.number_of_seasons != 1 ? 's' : ''}</div>
                    </div>
                    <div className='featured--description'>{featuredData?.overview}</div>
                    <div className='featured--buttons'>
                        <button className='featured--watchButton'>► Assistir</button>
                        <button className='featured--myListButton'>+Minha lista</button>
                    </div>
                    <div className='featured--genres'><strong>Generos:</strong> {generos.join(', ')}</div>
                </div>
            </div>
        </section>
    )
}

export default Featured