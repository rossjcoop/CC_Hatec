
import axios from "axios"
import * as actionValues from './actionValues'


const url = "https://jsonplaceholder.typicode.com/"


export interface GetAll {
    type: actionValues.GET_ALL;
}

export interface GetPostsAndComments {
    type: actionValues.POST_AND_COMMENTS;
}

export type DataRetrieval = GetAll | GetPostsAndComments;


export function getAllData(): GetAll {
    
    
    
    return {
        type: actionValues.GET_ALL
    }
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    }
}

