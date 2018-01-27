import React from 'react';
import {Link} from 'react-router-dom';
import { getMovies, updateSearch } from './movieSearchActions';
import { getDetails } from '../MovieDetail/movieDetailActions';

export default class MovieSearchContainer extends React.Component {
    constructor(props){
        super(props);

        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.handleDetailsClick = this.handleDetailsClick.bind(this);
    }

    handleSearchInput(event) {
        const {dispatch} = this.props
        const value = event.target.value;
        dispatch(updateSearch(value))
    }

    handleSearchClick(event){
        const {dispatch, search} = this.props;
        dispatch(getMovies(search))
    }

    handleDetailsClick(event){
        const { dispatch } = this.props
        const movieID = event.target.value
        console.log(movieID)
        dispatch(getDetails(movieID))
    }

    render() {
        const centerAlign = {'textAlign':'center'}
        const search = this.props;
        console.log(search)
        // console.log(PROCESS.ENV.OMDb_API_Key)
        return (
            <div>
            <div className="row">
                <div className="col col-md-12">
                <div className="jumbotron">
                <h1 style={centerAlign}>Movie Search</h1>  
                </div>
                <div className="input-group mb-3">
                    <input onChange={this.handleSearchInput} type="text" className="form-control"
                    placeholder="Search Movie" aria-label="Recipient's username"
                    aria-describedby="basic-addon2" value={search.search} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary"
                         type="button"
                         onClick={this.handleSearchClick}
                         >Search</button>
                    </div>
                </div>
                </div>
            </div>
            <div className="row">
            <div className="col col-md-12">
            <div className="card-deck">
            {
                search.top5.map((item) => {
                    return <div key={item.imdbID} className="card cardMovies">
                        <img className="card-img-top" src={item.Poster} alt="Card image cap" />
                        <div className="card-body">
                        <h5 className="card-title">{item.Title}</h5>
                        <Link to={`/movie/${item.imdbID}`} >
                        <button onClick={this.handleDetailsClick} type="button" value={item.imdbID} className="btn btn-info">More Info</button>
                        </Link>
                        <p className="card-text"><small className="text-muted">{item.Year}</small></p>
                        </div>
                    </div>
                } )
            }
                {/* <div className="card">
                    <img className="card-img-top" src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg" alt="Card image cap" />
                    <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text">SUMMARY</p>
                    <p className="card-text"><small className="text-muted">RELEASE YEAR</small></p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg" alt="Card image cap" />
                    <div className="card-body">
                    <h5 className="card-title">MOVIE TITLE</h5>
                    <p className="card-text">SUMMARY</p>
                    <p className="card-text"><small className="text-muted">RELEASE YEAR</small></p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg" alt="Card image cap" />
                    <div className="card-body">
                    <h5 className="card-title">MOVIE TITLE</h5>
                    <p className="card-text">SUMMARY</p>
                    <p className="card-text"><small className="text-muted">RELEASE YEAR</small></p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg" alt="Card image cap" />
                    <div className="card-body">
                    <h5 className="card-title">MOVIE TITLE</h5>
                    <p className="card-text">SUMMARY</p>
                    <p className="card-text"><small className="text-muted">RELEASE YEAR</small></p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg" alt="Card image cap" />
                    <div className="card-body">
                    <h5 className="card-title">MOVIE TITLE</h5>
                    <p className="card-text">SUMMARY</p>
                    <p className="card-text"><small className="text-muted">RELEASE YEAR</small></p>
                    </div>
                </div> */}

                </div>
            </div>
            </div>
            </div>
        )
    }
}

