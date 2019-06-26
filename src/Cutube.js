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
import SpinSearch from './Modules/SpinSearch';

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
        language: null,
        website: null,
        runTime: null
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
            language: response1.data.Language,
            website: response1.data.Website,
            runTime: response1.data.Runtime


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
            <div className="" style={{ backgroundColor: '#031b2b' }}>
                <div className="">

                    <SearchBar onFormSubmitProp={this.onTermSubmit} spinStop={this.state.response} />
                    {this.state.response ? (
                        <div className='' >
                            <div className=''>
                                <div>
                                    <div>

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
                                            website={this.state.website}
                                            runtime={this.state.runTime}
                                        />
                                    </div>
                                </div>
                                <div><VideoDetail video={this.state.selectedVid} /></div>
                                {/* <div className="row" style={{ margin: '20px auto' }}>
                                    <div className="col-md-offset-3 col-md-6 col-xs-12, vidRend ">
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <VideoDetail video={this.state.selectedVid} />

                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className='col-md-6 col-sm-12'>
                                <VideoDetail video={this.state.selectedVid} />

                                </div> */}
                                <div className='col-md-3 col-sm-6, vidListAlign' >
                                    <VideoList onSelectVid={this.onVidSelect} vidList={this.state.vids} />
                                </div>

                                {/* <div className="col-md-3 col-sm-6">
                                    <img src="https://www.nilfiskcfm.com/wp-content/uploads/2016/12/placeholder.png" />
                                </div> */}
                                <SpinSearch />

                            </div>

                        </div>
                    ) : (
                            <div >
                                <section id="slider">

                                    <div style={{ margin: '1%' }} id="carousel-example-generic" className="carousel slide carousel-fade" data-ride="carousel" data-interval="1900">
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
                                                    <img className="blog-img" src="https://wallpapersite.com/images/pages/pic_w/11297.jpg" title="Wonder Woman" alt="Wonder Woman"></img>
                                                    <div className="carousel-caption">
                                                        <div className="slider_text" style={{ marginTop: '-63%' }}>
                                                            <h3 className='logoName'>FilmIn</h3>
                                                            <h2 className='logoName'>Search for movies</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {Images.map((img) => {
                                                return (
                                                    <div className="item" key={img.alte}>
                                                        <div className="slider_overlay">
                                                            <img className="blog-img" src={img.imgUrl} alt={img.alte} title={img.alte} key={img.alte} ></img>
                                                            <div className="carousel-caption">
                                                                <div className="slider_text navbar-fixed-center" style={{ marginTop: '-63%' }}>
                                                                    <h3 className='logoName'>FilmIn</h3>
                                                                    <h2 className='logoName'>Search for movies</h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    
                                                );
                                            })
                                            }
                                        </div>
                                        <SpinSearch />

                                        {/* <!--End of Carousel Inner--> */}
                                    </div>
                                    <div>
                                        <Helper />
                                    </div>
                                </section>

                            </div>

                        )}
                </div>

            </div>
        );
    }
}

export default CuTube;