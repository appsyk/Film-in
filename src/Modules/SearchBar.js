// import React from 'react';

// class SearchBar extends React.Component {

//     state = { term: '' };

//     onSubmitHandle = (event) => {
//         event.preventDefault();

//         this.props.onFormSubmitProp(this.state.term);
//     }

//     render() {
//         return (
//             <div className="Search-Bar ui segment" style={{ background: '#5E5E5F', height:'67px' }}>
//                 <div className='ui grid'>
//                     <div className='one wide column' style={{ marginTop:'-6.8px' }} >
//                         <img src='https://image.flaticon.com/icons/svg/190/190441.svg' width='50px' height='50px' />
//                     </div>
//                     <div className='five wide column'>
//                         <h1>Film-In</h1>
//                     </div>
//                     <div className='nine wide column'>

//                         <form onSubmit={this.onSubmitHandle} className="ui form">
                    
//                         <input
//                                 style={{ color: 'black' }}
//                                 className="field"
//                                 type='text'
//                                 // onChange={this.onChangeHandle}
//                                 onChange={e => { this.setState({ term: e.target.value }) }}
//                                 value={this.state.term}
//                                 placeholder='Search for video'
//                             />
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default SearchBar;
