import './greenfair/css/style.css';
import './greenfair/css/isotope/style.css';
import './greenfair/css/animate.min.css';
import './greenfair/css/bootstrap.min.css';
import './greenfair/css/carousel.css';
import './greenfair/css/font-awesome.min.css';
import './greenfair/css/responsive.css';
// import './LoginStyle/style.css';

import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import Youtube from './API/Youtube';
import VideoList from './Modules/VideoList';
import VideoDetail from './Modules/VideoDetail';
import FilmInfo from './components/FilmInfo';
import Helper from './components/Helper';

import Images from './components/App';

class CuTube extends React.Component {

    state = {
        vids: [],
        selectedVid: null,
        title: null,
        poster: null,
        actors: null,
        country: null,
        director: null,
        release_date: null,
        year: null,
        genre: null,
        response: null,
        plot: null,
        boxoffice: null,
        imdbRating: null,
        production: null,
        language: null
    };


    onTermSubmit = async (term) => {

        const response1 = await axios.get(`https://www.omdbapi.com/?t=${term}&apikey=aabca0d`, {
            params: { query: term },
        });

        this.setState({
            title: response1.data.Title,
            poster: response1.data.Poster,
            actors: response1.data.Actors,
            year: response1.data.Year,
            director: response1.data.Director,
            genre: response1.data.Genre,
            country: response1.data.Country,
            release_date: response1.data.Released,
            response: response1.data.Response,
            plot: response1.data.Plot,
            boxoffice: response1.data.BoxOffice,
            production: response1.data.Production,
            imdbRating: response1.data.imdbRating,
            language: response1.data.Language
        });
        // console.log(response1)

        const response = await Youtube.get('/search', {
            params: {
                q: term
            }
        });


        this.setState({ vids: response.data.items });

    };
    onVidSelect = (video) => {
        this.setState({ selectedVid: video });
    }

    render() {
        // var name = this.state.title + this.state.year;

        return (
            <div style={{ backgroundColor: '#031b2b' }}>
                <div className="ui" style={{ marginLeft: '25px', marginRight: '25px', marginTop: '5px' }}>
                    <SearchBar onFormSubmitProp={this.onTermSubmit} />
                    {this.state.poster ? (
                        <div className="ui grid" >
                            <div className='ui row'>
                                <div>
                                    <div className="eight wide centered column">
                                        {/* <SearchBar onFormSubmitProp={this.onTermSubmit} /> */}

                                        <FilmInfo
                                            poster={this.state.poster}
                                            actors={this.state.actors}
                                            title={this.state.title}
                                            year={this.state.year}
                                            director={this.state.director}
                                            genre={this.state.genre}
                                            country={this.state.country}
                                            release_date={this.state.release_date}
                                            response={this.state.response}
                                            plot={this.state.plot}
                                            boxoffice={this.state.boxoffice}
                                            production={this.state.production}
                                            imdbRating={this.state.imdbRating}
                                            language={this.state.language}
                                        />
                                    </div>
                                </div>
                                <div className='twelve wide column'>
                                    <VideoDetail video={this.state.selectedVid} />
                                </div>
                                <div className='four wide column' style={{ marginTop: '-450px' }}>
                                    <h3 style={{ color: 'white' }} >Search Related Videos :</h3>;
                                <VideoList onSelectVid={this.onVidSelect} vidList={this.state.vids} />
                                </div>
                            </div>
                        </div>
                    ) : (
                            <div>
                                <section id="slider">

                                    <div id="carousel-example-generic" className="carousel slide carousel-fade" data-ride="carousel" data-interval="1900">
                                        <ol className="carousel-indicators">
                                            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                                            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                                            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                                            <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                                            <li data-target="#carousel-example-generic" data-slide-to="4"></li>
                                            <li data-target="#carousel-example-generic" data-slide-to="5"></li>
                                            <li data-target="#carousel-example-generic" data-slide-to="6"></li>
                                            <li data-target="#carousel-example-generic" data-slide-to="7"></li>
                                            <li data-target="#carousel-example-generic" data-slide-to="8"></li>

                                        </ol>

                                        <div className="carousel-inner" role="listbox" >
                                            <div className="item active">
                                                <div className="slider_overlay">
                                                    <img src="https://initiate.alphacoders.com/images/721/cropped-1366-768-721152.jpg?8" alt="Wonder Woman"></img>
                                                    <div className="carousel-caption">
                                                        <div className="slider_text" style={{ marginTop: '-200px' }}>
                                                            <h3>FilmIn</h3>
                                                            <h2>Search for movies</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {Images.map((img) => {
                                                return (
                                                    <div className="item">
                                                        <div className="slider_overlay">
                                                            <img src={img.imgUrl} alt={img.alte}></img>
                                                            <div className="carousel-caption">
                                                                <div className="slider_text" style={{ marginTop: '-200px' }}>
                                                                    <h3>FilmIn</h3>
                                                                    <h2>Search for movies</h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })
                                            }
                                        </div>
                                        {/* <!--End of Carousel Inner--> */}
                                    </div>
                                </section>
                            </div>
                        )}
                </div>
                <Helper />

            </div>
        );
    }
}

export default CuTube;
