import React, { useState, useEffect } from 'react'
import Header from '../components/NavigationBar/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import FeaturedMovies from '../components/FeaturedMovieSection/FeaturedMovies';
import FeaturedTVShows from '../components/FeaturedTvSection/FeaturedTVShows';
import Content from '../components/ContentSection/Content';
import img1 from '../assets/img/content1.jpg';
import img2 from '../assets/img/content2.jpg';
import Footer from '../components/Footer/Footer';

import Loader from '../components/LoaderComponent/CustomizedLoader'


const HomePage = () => {

    const [featuredMovies, setFeaturedMovies] = useState([]);
    const [featuredTVShows, setFeaturedTVShows] = useState([]);

    const [isloading, setIsLoading] = useState(false);

    useEffect(() => {
        getFeaturedMovies();
        getFeaturedTVShows();
    }, [])

    const getFeaturedMovies = () => {
        fetch(`https://view-fakedatabase.herokuapp.com/movies?isFeatured=true`)
            .then((res) => {
                setIsLoading(true);
                return res.json();
            })
            .then((data) => {
                setFeaturedMovies(data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    const getFeaturedTVShows = () => {
        fetch(`https://view-fakedatabase.herokuapp.com/tvshows?isFeatured=true`)
            .then((res) => {
                setIsLoading(true);
                return res.json();
            })
            .then((data) => {
                setFeaturedTVShows(data);
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
                <HeroSection />
                <hr />
                {isloading ? (<Loader />) : <FeaturedMovies movies={featuredMovies} />}
                <hr />
                <Content image={img1} />
                <hr />
                {isloading ? (<Loader />) : <FeaturedTVShows tvshows={featuredTVShows} />}
                <hr />
                <Content image={img2} />
                <hr />
            </main>
            <Footer />
        </div>
    )
}

export default HomePage
