import React, { useState, useEffect } from 'react'
import Header from '../components/NavigationBar/Header';
import TVShowsListing from '../components/TVShowsListingSection/TVShowsListing';
import Footer from '../components/Footer/Footer';

import Loader from '../components/LoaderComponent/CustomizedLoader'
import { flushSync } from 'react-dom';

const TVShowsListingPage = () => {

    const [tvshows, setTvshows] = useState([]);

    const [isloading, setIsLoading] = useState(false);

    useEffect(() => {
        getTVShows();
    }, [])

    const getTVShows = () => {
        fetch(`https://view-fakedatabase.herokuapp.com/tvshows`)
            .then((res) => {
                setIsLoading(true);
                return res.json();
            })
            .then((data) => {
                setTvshows(data);
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
                {isloading ? (<Loader />) : <TVShowsListing tvshows={tvshows} />}
                <hr />
            </main>
            <Footer />
        </div>
    )
}

export default TVShowsListingPage
