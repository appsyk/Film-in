import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
// import FilmIn from './components/App';
import CuTube from './Cutube';
// import SearchBar from './SearchBar';
import FilmInfo from './components/FilmInfo';


class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path='/' component={CuTube} />
            <Route path='/${}' component={FilmInfo} />
          </div>
        </BrowserRouter>
        {/* <Helper /> */}
      </div>
    );
  }
}
export default App;