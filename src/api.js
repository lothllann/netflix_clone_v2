const API_KEY = "3ac9cf3432fa24a5d8a37ee5283869a2";
const API_BASE = `https://api.themoviedb.org/3`;


const filmes = [
    {
        slug: 'originals',
        title: 'Originais da Netflix',
        items: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=pt-BR`
    },
    {
        slug: 'trending',
        title: 'Recomendados para Voce',
        items: `/trending/all/day?api_key=${API_KEY}&language=pt-BR`
    },
    {
        slug: 'topRated',
        title: 'Em Alta',
        items: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`
    },
    {
        slug: 'action',
        title: 'Ação',
        items: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=pt-BR`
    },
    {
        slug: 'comedy',
        title: 'Comédia',
        items: `/discover/tv?api_key=${API_KEY}&with_genres=35&language=pt-BR`
    },
    {
        slug: 'horror',
        title: 'Terror',
        items: `/discover/tv?api_key=${API_KEY}&with_genres=27&language=pt-BR`
    },
    {
        slug: 'documentary',
        title: 'Documentario',
        items: `/discover/tv?api_key=${API_KEY}&with_genres=99&language=pt-BR`
    },
    {
        slug: 'romance',
        title: 'Romance',
        items: `/trending/all/day?api_key=${API_KEY}&with_genres=10749&language=pt-BR`
    },

];

export const getMovies = async (endpoint) => {
    try {
        const req = await fetch(`${API_BASE}${endpoint}`);
        return await req.json();

    } catch (error) {
        console.log(error)
    }
}

export const getMovieInfo = async (movieId, type) => {
    let info = {};

    if (movieId) {
        switch (type) {
            case 'movie':
                info = await getMovies(`/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`)
                break;
            case 'tv':
                info = await getMovies(`/tv/${movieId}?api_key=${API_KEY}&language=pt-BR`)

                break;

            default:
                info = null
                break;
        }
    }

    return info;
}

export default filmes;






