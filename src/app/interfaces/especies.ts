export interface EspeciesRespuesta {
    count:    number;
    next:     string;
    previous: string;
    results:  Especie[];
}

export interface Especie {
    name:             string;
    classification:   string;
    designation:      Designation;
    average_height:   string;
    skin_colors:      string;
    hair_colors:      string;
    eye_colors:       string;
    average_lifespan: string;
    homeworld:        null | string;
    language:         string;
    people:           string[];
    films:            string[];
    created:          string;
    edited:           string;
    url:              string;
}

export enum Designation {
    Reptilian = "reptilian",
    Sentient = "sentient",
}
export interface InterfazEspecies {
}
