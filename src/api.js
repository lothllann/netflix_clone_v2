const API_KEY = "3ac9cf3432fa24a5d8a37ee5283869a2";
const API_BASE = `https://api.themoviedb.org/3`;


const basicFetch = async (endpoint) => {
    try {
        const req = await fetch(`${API_BASE}${endpoint}`);
        const json = await req.json();
        return json;
    } catch (error) {
        console.log(error)
    }
}



export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                items: await basicFetch(`/discover/tv?api_key=${API_KEY}&with_networks=213&language=pt-BR`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Voce',
                items: await basicFetch(`/trending/all/day?api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'topRated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?api_key=${API_KEY}&with_genres=28&language=pt-BR`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/tv?api_key=${API_KEY}&with_genres=35&language=pt-BR`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/tv?api_key=${API_KEY}&with_genres=27&language=pt-BR`)
            },
            {
                slug: 'documentary',
                title: 'Documentario',
                items: await basicFetch(`/discover/tv?api_key=${API_KEY}&with_genres=99&language=pt-BR`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/trending/all/day?api_key=${API_KEY}&with_genres=10749&language=pt-BR`)
            },

        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if (movieId) {
            switch (type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`)
                    break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?api_key=${API_KEY}&language=pt-BR`)

                    break;

                default:
                    info = null
                    break;
            }
        }

        return info;
    }
}





