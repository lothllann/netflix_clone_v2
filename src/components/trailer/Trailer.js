import React from 'react'
import './Trailer.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AddIcon from '@mui/icons-material/Add';
import LikeIcon from '@mui/icons-material/ThumbUpOffAlt';
import UnlikeIcon from '@mui/icons-material/ThumbDownOffAlt';
import MoreIcon from '@mui/icons-material/ExpandMore';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';


const Trailer = ({movie, setMovieSelected}) => {
  const [trailerUrl, setTrailerUrl] = React.useState('');
  
  
  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setMovieSelected(null);
  }

  React.useEffect(() => {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || '')
        .then((url) => {
          setTrailerUrl(url)
        })
        .catch((error) => {
          console.log('Erro ao pegar o trailer do filme: ' + error)
        });
  }, [])


  const date = new Date(movie.release_date);
  const yaer = date.getFullYear();
  const month = date.getMonth() + 1;
  const votes = movie.vote_average.toFixed(1)

  
  return (
    <div className='container-trailer' onClick={handleOutsideClick}>
      <div className='modal-trailer' >
        <ReactPlayer
          url={trailerUrl}
          playing={true}
          controls={true}
          width={'680px'}
          height={'382px'}
        />
        <div className='buttonsAndAbout'>
          <div className='buttons'>
            <div className='actions'>
              <div className='playIcon'>
                <PlayCircleIcon sx={{ fontSize: 42, color: '#CBD2D2' }} />
              </div>
              <div className='addIcon'>
                <AddIcon sx={{ fontSize: 29, color: '#CBD2D2' }} />
              </div>
              <div className='avaliation'>
                <LikeIcon sx={{ fontSize: 25, color: '#CBD2D2' }} />
                <div className='unlikeIcon'>
                  <UnlikeIcon sx={{ fontSize: 26, color: '#CBD2D2' }} />
                </div>
              </div>
            </div>

            <div className='moreIcon'>
              <MoreIcon fontSize='large' />
            </div>
          </div>
          <div className='about'>
            <div className='votos'>{votes} pontos</div>
            <div className='releaseDate'> Data de Lançamento: {`${month}/${yaer}`} </div>
            <div className='generos'><strong>{movie.title}</strong></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trailer;