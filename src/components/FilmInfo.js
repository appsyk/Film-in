import './Circle.css';
import React from 'react';
// import Background from '../API/back_batty.jpg';


class FilmInfo extends React.Component {
    state = { selectedVid: null };

    onVidSelect = (video) => {
        this.setState({ selectedVid: video });
    }
    render(props) {
        if (this.props.response === null) {
            return (
                <div >
                <img src='http://www.dream-wallpaper.com/free-wallpaper/movie-wallpaper/the-dark-knight-rises-2012-wallpaper/1680x1050/free-wallpaper-12.jpg' alt="YOu are Watching..." height='800px' width='100%' />
                    <div id="notfound" >
                        <div className="notfound">
                            <div className="notfound-404">
                                <h1>Search</h1>
                            </div>
                            <h2 className="font-style">Search for a movie</h2>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else
            if (this.props.response === "True") {
                return (
                    <div className="ui">
                        <div style={{ textAlign: 'center', fontSize: '270%', color: ' #f5b61c ' }}>{this.props.title} ({this.props.year})</div><br />

                        <div className="ui grid">
                            <div className="ui row">
                                <div className='four wide column'>
                                    <img className="ui image" src={this.props.poster} alt={this.props.title} style={{ height: '340px', width: '230px', marginLeft: '20%', marginTop: '15%' }} />
                                </div>

                                <div className="six wide column" style={{ marginLeft: '80px', textAlign: 'center' }}>
                                    <div style={{ color: 'white', fontSize: '110%' }}>{this.props.genre}</div>
                                    <div style={{ color: '#E0E7E7' }}>{this.props.language}</div><br />
                                    <div style={{ color: 'white', fontSize: '120%' }}>{this.props.actors}</div><br />
                                    <div style={{ color: '#E0E7E7' }}>{this.props.plot}</div><br />
                                    <div className="ui two column centerd grid">
                                        {/* <div className="ui row"> */}
                                        <div className='column'>
                                            <div class="ui link card" style={{ background: '#3F8A9C' }} >
                                                <div class="content">
                                                    <div class="header">{this.props.release_date}</div>
                                                    <div class="meta">
                                                        <span class="category" style={{ color: 'white' }}>Released</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='column'>
                                            <div class="ui raised link card" style={{ background: '#3F8A9C' }} >
                                                <div class="content">
                                                    <div class="header">{this.props.imdbRating}</div>
                                                    <div class="meta">
                                                        <span class="category" style={{ color: 'white' }}>IMDB Ratings</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ui two column centerd grid">
                                        {/* <div className="ui row"> */}
                                        <div className='column'>
                                            <div class="ui raised link card" style={{ background: '#3F8A9C' }}>
                                                <div class="content">
                                                    <div class="header">{this.props.director}</div>
                                                    <div class="meta">
                                                        <span class="category" style={{ color: 'white' }}>Director</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='column'>
                                            <div class="ui raised link card" style={{ background: '#3F8A9C' }} >
                                                <div class="content">
                                                    <div class="header">{this.props.country}</div>
                                                    <div class="meta">
                                                        <span class="category" style={{ color: 'white' }}>Country</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ui two column centerd grid">
                                        <div className="ui row">
                                            <div className='column'>
                                                <div class="ui raised link card" style={{ background: '#3F8A9C' }}>
                                                    <div class="content">
                                                        <div class="header">{this.props.boxoffice}</div>
                                                        <div class="meta">
                                                            <span class="category" style={{ color: 'white' }}>BoxOffice Collection</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='column'>
                                                <div class="ui raised link card" style={{ background: '#3F8A9C' }} >
                                                    <div class="content">
                                                        <div class="header">{this.props.production}</div>
                                                        <div class="meta">
                                                            <span class="category" style={{ color: 'white' }}>Production</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/* <div className='four wide column' style={{ marginTop: '-450px' }}>
                                    <h3 style={{ color: 'white' }} >Search Related Videos :</h3>;
                                <VideoItem />
                                </div> */}
                            </div>

                        </div>
                    </div>
                );
            }
            else {
                return (
                    <div id="notfound" style={{ textAlign: 'center' }}>
                        <div className="notfound">
                            <div className="notfound-404">
                                <h1>Oops!</h1>
                                <img src='https://banner2.kisspng.com/20180418/ilw/kisspng-desktop-wallpaper-sorry-smiley-sorry-5ad70bb4221d48.6314340515240426761397.jpg' height='100px' width='100px' alt="Oops" />
                            </div>
                            <h2 className="font-style">This Movie {this.props.title} not found</h2>
                            <p>The movie you are looking for might have been wrong spelled or is temporarily unavailable.</p>

                        </div>
                    </div>
                );
            }
    }
}



export default FilmInfo;