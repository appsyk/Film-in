// import React from 'react';
// import axios from 'axios';
// import SearchBar from '../Modules/SearchBar';
// import FilmInfo from './FilmInfo';
// import Helper from './Helper';

// class FilmIn extends React.Component{
//     state = {
//         title: null,
//         poster: null,
//         actors: null,
//         country: null,
//         director: null,
//         release_date: null,
//         year: null,
//         genre: null,
//         response: null,
//         plot: null,
//         boxoffice: null,
//         imdbRating: null,
//         production: null,
//         language: null
//     };

//     onTermSubmit = async (term) => {
//         const response = await axios.get(`https://www.omdbapi.com/?t=${term}&apikey=aabca0d`,{
//             params: {query: term },
//         //     headers: {
//         //         Authorization:apikey=fd574310cecaa419aa9e790f5d669f66
//         //         'Client-Id '
//         //     }
//         });
//         // .then( 
//         //     (response) => { console.log(response) },
//         //     (error) => { console.log(error) }
//         // );
//             this.setState({
//                 title: response.data.Title,
//                 poster: response.data.Poster,
//                 actors: response.data.Actors,
//                 year: response.data.Year,
//                 director: response.data.Director,
//                 genre: response.data.Genre,
//                 country: response.data.Country,
//                 release_date: response.data.Released,
//                 response: response.data.Response,
//                 plot: response.data.Plot,
//                 boxoffice: response.data.BoxOffice,
//                 production: response.data.Production,
//                 imdbRating: response.data.imdbRating,
//                 language: response.data.Language
//             });
//     }

//     render(){
//         //console.log(response.data.Response);
//         return(
//             <div className="ui center center fluid container, search-style">
//                 <SearchBar onFormSubmitProp={this.onTermSubmit}/>
//                 <FilmInfo
//                     poster={this.state.poster}
//                     actors={this.state.actors}
//                     title={this.state.title}
//                     year={this.state.year}
//                     director={this.state.director}
//                     genre={this.state.genre}
//                     // country={this.state.country}
//                     release_date={this.state.release_date}
//                     response = {this.state.response}
//                     plot={this.state.plot}
//                     // boxoffice={this.state.boxoffice}
//                     // production={this.state.production}
//                     imdbRating={this.state.imdbRating}
//                     language={this.state.language}
//                 />
//                 {/* <Helper /> */}
//             </div>
//         );
//     }
// }

// export default FilmIn;


const Images = [
    {
        imgUrl:'https://images8.alphacoders.com/101/thumb-1920-1010617.jpg',
        alte: 'Ironman'
    },
    {
        imgUrl:'https://initiate.alphacoders.com/images/674/stretched-1366-768-674351.jpg?5581',
        alte: 'Avatar'
    },
    {
        imgUrl:'https://initiate.alphacoders.com/images/375/cropped-1366-768-375999.jpg?8462',
        alte: '300'
    },
    {
        imgUrl:'https://initiate.alphacoders.com/images/513/cropped-1366-768-513335.jpg?2466',
        alte: 'Frozen'
    },
    {
        imgUrl:'https://initiate.alphacoders.com/images/550/cropped-1366-768-550715.jpg?1681',
        alte: 'humpty sharma ki dulhaniya'
    },
    {
        imgUrl:'https://wallpapersite.com/images/pages/pic_w/16872.jpg',
        alte: 'avenger'
    },
    {
        imgUrl:'https://wallpapersite.com/images/pages/pic_w/7179.jpg',
        alte: 'Bahubali'
    }
    
];

export default Images;