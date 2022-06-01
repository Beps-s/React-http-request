import React from "react";

import Movie from "./Movie";
import classes from './MoviesList.module.css'

const MoviesList = (props) => {
    return(
        <ul className={classes['movies-list']}>
            {props.movies.map((movies) => (
                <Movie
                key={movies.id}
                title={movies.title}
                releaseDate={movies.releaseDate}
                openingText={movies.openingText}
                />
            ))}
        </ul>
    );
};

export default MoviesList;