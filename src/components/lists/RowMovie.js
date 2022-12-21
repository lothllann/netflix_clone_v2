import React from 'react'
import './RowMovie.css'

const RowMovie = ({ title, items }) => {
    const imageHost = "https://image.tmdb.org/t/p/";

    return (
        <div className='movieRow'>
            <h2>{title}</h2>
            <div className='movieRow--listarea'>
                <div className='movieRow--list'>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div className='movieRow--item' key={key}>
                            <img src={`${imageHost}w300${item.poster_path}`} alt={item.title} />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default RowMovie;