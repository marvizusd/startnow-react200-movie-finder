const defaultState = {
    Title:'',
    Plot:'',
    Release:'',
    RunTime:'',
    Genre:'',
    Metascore:'',
    imdbRating:'',
    Poster:'',
    noResult:false
}

export default function MovieSearchReducer(state = defaultState, action){
    const { type, payload } = action;
    // console.log(type,payload)

    switch(type){
        case 'GET_DETAILS_FULFILLED': {
            // console.log(copy5)
            if(payload) {
                // console.log(payload.Title, 'REDUCER WORKS');
                return {
                    ...state,
                    Title:payload.Title,
                    Plot:payload.Plot,
                    Release:payload.Release,
                    RunTime:payload.RunTime,
                    Genre:payload.Genre,
                    Metascore:payload.Metascore,
                    imdbRating:payload.imdbRating,
                    Poster:payload.Poster,
                    noResult:false
                };
            } else{
                return {
                    ...state,
                    noResult: true,
                };
            }
        }
        default: {
            return state;
        }
    }
}