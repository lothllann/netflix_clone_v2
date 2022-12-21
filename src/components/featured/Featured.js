import React from 'react'
import './Featured.css'

const Featured = ({ item }) => {
    const imageHost = "https://image.tmdb.org/t/p/original";
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
                        <div className='featured--year'>2099</div>
                        <div className='featured--seasons'>{item.number_of_seasons} temporada{item.number_of_seasons != 1 ? 's' : ''}</div>
                    </div>
                    <div className='featured--description'>{item.overview}</div>
                    <div className='featured--buttons'>
                        <button>Assistir</button>
                        <button>Minha lista</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Featured