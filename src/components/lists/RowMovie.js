import React from 'react'
import './RowMovie.css'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { getMovies } from '../../api';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';


const RowMovie = ({ title, items }) => {
    const imageHost = "https://image.tmdb.org/t/p/";
    const [scrollX, setScrollX] = React.useState(0)
    const [movieList, setMovieList] = React.useState([]);
    const [trailerUrl, setTrailerUrl] = React.useState('');

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name || '')
                .then((url) => {
                    setTrailerUrl(url)
                })
                .catch((error) => {
                    console.log('Erro ao pegar o trailer do filme: ' + error)
                });
        }
    }


    const fetchMovies = async (_path) => {
        try {
            const data = await getMovies(_path);
            setMovieList(data?.results)
        } catch (error) { console.log('deu erro no fetch', error) }
    }

    React.useEffect(() => {
        fetchMovies(items)
    }, [items]);




    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2.5);
        if (x > 0) x = 0;
        setScrollX(x);
    }
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2.5);
        let listSize = movieList.length * 150;
        if ((window.innerWidth - listSize) > x) {
            x = (window.innerWidth - listSize) - 60;
        }
        setScrollX(x);
    }

    return (
        <div className='movieRow'>
            <h2>{title}</h2>

            <div className='movieRow--left' onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{ fontSize: 50 }} />
            </div>
            <div className='movieRow--right' onClick={handleRightArrow} >
                <NavigateNextIcon style={{ fontSize: 50 }} />
            </div>

            <div className='movieRow--listarea'>
                <div className='movieRow--list' style={{
                    marginLeft: scrollX,
                    width: movieList.length * 150,
                }}>
                    {movieList?.map((item, key) => (
                        <div className='movieRow--item' key={key}>
                            <img
                                src={`${imageHost}w300${item.poster_path}`}
                                alt={item.title}
                                onClick={() => handleClick(item)}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {trailerUrl &&
                <div className='container-trailer'>
                    <div className='modal-trailer'>
                        <ReactPlayer
                            url={trailerUrl}
                            playing={true}
                            controls={true}
                            width={'680px'}
                            height={'382px'}
                        />
                    </div>

                </div>}
        </div>
    )
}

export default RowMovie;