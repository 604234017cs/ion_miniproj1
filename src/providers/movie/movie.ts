import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  public baseURL="https://api.themoviedb.org/3/";
  public apikey="api_key=db9cace4a17ad4844c5ad2fbf1a7b1d5";
  
  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  } 


  getNowPlaying(){
  const url = this.baseURL + 'movie/now_playing?' + this.apikey;
  return this.http.get(url);
  }

  getUpComing(){
    const url = this.baseURL + 'movie/upcoming?' + this.apikey;
    return this.http.get(url);
  }

  getPopular(){
    const url = this.baseURL + 'movie/popular?' + this.apikey;
    return this.http.get(url);
}

getTopRated(){
  const url = this.baseURL + 'movie/top_rated?' + this.apikey;
  return this.http.get(url);
}

searchMovie(query){
  const url = this.baseURL + 'search/movie?query=' + query +'&' + this.apikey;
  return this.http.get(url);
}

getMovieDetails(movieID){
  const url = this.baseURL + 'movie/' + movieID + '?' + this.apikey + '&language=en-US';
  return this.http.get(url);
} 

getVideos(movieID){
  const url = this.baseURL + 'movie/' + movieID + '/videos?' + this.apikey + '&language=en-US';
  return this.http.get(url);
}


}
