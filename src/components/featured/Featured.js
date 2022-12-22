import React from 'react'
import './Featured.css'

const Featured = ({ item }) => {
    const imageHost = "https://image.tmdb.org/t/p/original";

    let year = new Date(item.first_air_date);
    let generos = [];

    for (let i in item.genres) {
        generos.push(item.genres[i].name)
    }

    let description = item.overview;
    if(description.length > 200){
        description = description.substring(0, 200)+'...'
    }

   

    return (
        <section className='featured' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${imageHost}${item.backdrop_path})`
        }}>
            <div className='featured--vertical'>
                <div className='featured--horizontal'>
                    <div className='featured--name'>{item.original_name}</div>
                    <div className='featured--info'>
                        <div className='featured--points'>{item.vote_average} pontos</div>
                        <div className='featured--year'>{year.getFullYear()}</div>
                        <div className='featured--seasons'>{item.number_of_seasons} temporada{item.number_of_seasons != 1 ? 's' : ''}</div>
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