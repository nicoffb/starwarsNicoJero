export interface PeliculasRespuesta{

    count: number;
    next: null;
    previous: null;
    results: Pelicula[];
}

export interface Pelicula {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
    url: string;
}