import React from 'react';
import {Link} from 'react-router-dom';


export default class MovieDetailContainer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const centerAlign = {'textAlign':'center'}
        const {
            Title,
            Plot,
            Release,
            RunTime,
            Genre,
            Metascore,
            imdbRating,
            Poster,
            noResult,
        } = this.props;
        console.log(Title);
        return(
            <div>
                <div className="row">
                    <div className="col col-md-12">
                        <h1 style={centerAlign}>Movie Detail</h1>
                        <Link to={'/'}>
                        <p>Go Back</p>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-md-4">
                        <img src={Poster} />
                    </div>
                    <div className="col col-md-6">
                        <div className="card">
                            <h1 className="card-header">MOVIE DETAILS</h1>
                            <div className="card-body">
                                <h5 className="card-title">{Title}</h5>
                                <p className="card-text">{Plot}</p>
                                <h5>METASCORE:{Metascore}</h5>
                                <h5>IMDB:{imdbRating}</h5>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}