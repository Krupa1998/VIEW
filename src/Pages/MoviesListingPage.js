import React, { useEffect, useState } from 'react'
import Header from '../components/NavigationBar/Header';
import MoviesListing from '../components/MoviesListingSection/MoviesListing';
import Footer from '../components/Footer/Footer';

import Loader from '../components/LoaderComponent/CustomizedLoader'

const MoviesListingPage = () => {

    const [movies, setMovies] = useState([]);

    const [isloading, setIsLoading] = useState(false);

    useEffect(() => {
        getMovies();
    }, [])

    const getMovies = () => {
        fetch(`https://view-fakedatabase.herokuapp.com/movies`)
            .then((res) => {
                setIsLoading(true);
                return res.json();
            })
            .then((data) => {
                setMovies(data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    return (
        <div className="container">
            <Header />
            <main>
                {isloading ? (<Loader />) : <MoviesListing movies={movies} />}
                <hr />
            </main>
            <Footer />
        </div>
    )
}

export default MoviesListingPage
