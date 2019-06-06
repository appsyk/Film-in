import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
// import FilmIn from './components/App';
import CuTube from './Cutube';
// import SearchBar from './SearchBar';
import Helper from './components/Helper';


class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <div>
          {/* <SearchBar /> */}
        {/* <Route path='/search' component={SearchBar} /> */}
        <div>
          {/* <Route exact path='/movie' component={FilmIn} /> */}
          <Route path='/' component={CuTube} />
          </div>
          <Helper />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
