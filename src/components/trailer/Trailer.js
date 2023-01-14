import React from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AddIcon from '@mui/icons-material/Add';
import LikeIcon from '@mui/icons-material/ThumbUpOffAlt';
import UnlikeIcon from '@mui/icons-material/ThumbDownOffAlt';
import MoreIcon from '@mui/icons-material/ExpandMore';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';


const Trailer = (movie) => {
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
  return (
    <div className='container-trailer'>
                    <div className='modal-trailer'>
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
                                <div className='votos'> 0.0 pontos</div>
                                <div className='temporadas'> tempo </div>
                                <div className='generos'><strong>Generos:</strong> drama, açao, aventura</div>
                            </div>
                        </div>
                    </div>

                </div>
  )
}

export default Trailer