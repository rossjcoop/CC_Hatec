
import store from "../store";
import axios, { AxiosRequestConfig, AxiosPromise } from "axios";
import * as actionValues from './actionValues';


const api = "https://jsonplaceholder.typicode.com/"


export interface GetAll {
    type: actionValues.GET_ALL;
}

export interface GetPostsAndComments {
    type: actionValues.POST_AND_COMMENTS;
}

export type DataRetrieval = GetAll | GetPostsAndComments;


export function getAllData(): GetAll { 
    return axios.all([
        axios.get(api + 'posts');
        axios.get(api + 'users')
      ])
      .then(axios.spread(function (userResponse, reposResponse) {
        //... but this callback will be executed only when both requests are complete.
        console.log('User', userResponse.data);
        console.log('Repositories', reposResponse.data);
      }));
        type: actionValues.GET_ALL
    }
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    }
}

axios.all([
    axios.get('https://api.github.com/users/codeheaven-io');
    axios.get('https://api.github.com/users/codeheaven-io/repos')
  ])
  .then(axios.spread(function (userResponse, reposResponse) {
    //... but this callback will be executed only when both requests are complete.
    console.log('User', userResponse.data);
    console.log('Repositories', reposResponse.data);
  }));