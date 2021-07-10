import React, { useState } from 'react'
import './MoviesListing.css';
import { Link, useParams } from "react-router-dom";
import MovieDetailsPage from '../../Pages/MovieDetailsPage';

const MoviesListing = ({ movies }) => {


    return (
        <div className="container movieListContainer">

            <h1 className="center">Movies</h1><br />

            <div className="row justify-content-first movieItemContainer">

                {movies.map((movie) => (
                    <div className="col-md-4 col-lg-2 movieItemContainer">

                        <div className="text-center">

                            <Link to={`/movie/${movie.id}`}>
                                <img className="rounded movieListImage" src={movie.poster} alt={movie.title} />
                            </Link>

                        </div>

                    </div>
                ))}

            </div>

        </div >
    )
}

export default MoviesListing
