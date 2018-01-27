const defaultState = {
    search:'',
    top5: [],
    noResult:false
}

export default function MovieSearchReducer(state = defaultState, action){
    const { type, payload } = action;
    // console.log(type,payload)

    switch(type){
        case 'GET_MOVIES_FULFILLED':{
            const copy5 = [];
            payload.Search.forEach(function(item,i){
                if(i<5){
                    copy5.push(item);
                } else{
                    return
                }
              });
            // console.log(copy5)
            if(payload) {
                // console.log(payload.Title, 'REDUCER WORKS');
                return {
                    ...state,
                    top5: copy5,
                    noResult:false
                };
            } else{
                return {
                    ...state,
                    noResult: true,
                };
            }
            break;
        }
        case 'UPDATE_SEARCH':{
            if(payload){
                return {
                    ...state,
                    search:payload
                }
            }
        }
        default: {
            return state;
        }
    }
}