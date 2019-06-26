import React from 'react';

class SearchBar extends React.Component {

    state = { term: '', spin: false, spn: false, time: new Date().toLocaleString()};

    onSubmitHandle = (event) => {
        event.preventDefault();
        this.setState({ spin: true,spn: !this.state.spn });


        this.props.onFormSubmitProp(this.state.term);

    }

        componentDidMount() {
          this.intervalID = setInterval(
            () => this.spinner(),
            1000
          );
        }
        componentWillUnmount() {
          clearInterval(this.intervalID);
          
        }
        spinner() {
            if(this.props.spinStop === 'True' || this.props.spinStop === 'False'){
          this.setState({
            spin: false 
          });
        }
        }
   

    render(props) {
        return (

            <div style={{ marginRight: '1%', marginLeft: '1%', marginTop: '0.5%' }}>
                <nav className="navbar navbar-expand-md navbar-dark navbar-fixed-top bg-dark, navBackColor">
                    <img className='offspin' src='http://icons.iconarchive.com/icons/alecive/flatwoken/128/Apps-Google-Movies-icon.png' alt="u r watching" width='50px' height='50px' />
                
                    <a href='/'><h2 className="filmIn logoName" style={{ color: '#02CBFC', marginTop: '2vh' }} >FilmIn</h2></a>

                    <form className="form-inline, searchBar myHomefont" onSubmit={this.onSubmitHandle}>
                        <input className="form-control mr-sm-4 col-sm-12"
                            type='search'
                            onChange={e => { this.setState({ term: e.target.value }) }}
                            value={this.state.term}
                            placeholder='Search for movies ....'
                            aria-label="Search"
                        />

                    </form>
                    <div className="myHomefont" style={{ marginLeft: '0.5%' }}>
                        {(this.state.spin === true && this.props.spinStop === null) || (this.state.spin === true && this.props.spinStop === 'True') || (this.state.spin === true && this.props.spinStop === 'False')
                         ? (<div className="clearfix">
                            <div className="spinner-border text-light float-right" role="status">
                            </div>
                        </div>) : (<div className='offspin'><i style={{ color: 'white' }} className="fa fa-search fa-2x float-right" onClick={this.onSubmitHandle} aria-hidden="true"></i></div>)}
                    </div>

                </nav><br /><br />
            </div>
        );
    }
}

export default SearchBar;
