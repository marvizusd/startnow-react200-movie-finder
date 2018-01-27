import axios from 'axios';

export function getDetails(details){
    return {
        type:'GET_DETAILS',
        payload: axios
        .get(
            `/api/i/${details}`
        )
        .then(function(res){
            // console.log(res.data)
            return res.data
        })
        .catch(function(err){
            // console.log(err)
        })
    }

}