import React from 'react'
import filmes, { getMovieInfo, getMovies } from '../../api';
import './Featured.css'

const Featured = () => {
    const imageHost = "https://image.tmdb.org/t/p/original";
    const [featuredData, setFeaturedData] = React.useState({})



    React.useEffect(() => {
        const chooseFeatured = async () => {
            try {
                const data = await getMovies(filmes.find(
                    (i) => (i.slug === 'originals')
                ).items);
                const movies = data?.results;
                const randomIndex = Math.floor(Math.random() * data.results.length);
                const chosen = movies[randomIndex];
                const chosenInfo = await getMovieInfo(chosen.id, 'tv')
                setFeaturedData(chosenInfo);
                console.log(featuredData)
            } catch (error) { console.log(error)}
        }
        chooseFeatured();
    }, []);


    let year = new Date(featuredData.first_air_date);
    let generos = [];

    for (let i in featuredData.genres) {
        generos.push(featuredData.genres[i].name)
    }

    let description = featuredData.overview;
    if(description.length > 200){
        description = description.substring(0, 200)+'...'
    }

    return (
        <section className='featured' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${imageHost}${featuredData.backdrop_path})`
        }}>
            <div className='featured--vertical'>
                <div className='featured--horizontal'>
                    <div className='featured--name'>{featuredData.original_name}</div>
                    <div className='featured--info'>
                        <div className='featured--points'>{featuredData.vote_average} pontos</div>
                        <div className='featured--year'>{year.getFullYear()}</div>
                        <div className='featured--seasons'>{featuredData.number_of_seasons} temporada{featuredData.number_of_seasons != 1 ? 's' : ''}</div>
                    </div>
                    <div className='featured--description'>{description}</div>
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