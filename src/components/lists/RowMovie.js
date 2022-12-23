import React from 'react'
import './RowMovie.css'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const RowMovie = ({ title, items }) => {
    const imageHost = "https://image.tmdb.org/t/p/";
    const [scrollX, setScrollX] = React.useState(0)



    
    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2.5);
        if(x > 0) x = 0; 
        setScrollX(x);
    }
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2.5);
        let listSize = items.results.length * 150;
        if((window.innerWidth - listSize) > x){
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

            <div className='movieRow--right' onClick={handleRightArrow}>
                <NavigateNextIcon style={{ fontSize: 50 }} />
            </div>

            <div className='movieRow--listarea'>
                <div className='movieRow--list' style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
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