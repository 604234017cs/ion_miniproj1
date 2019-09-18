import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NowPlayingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-now-playing',
  templateUrl: 'now-playing.html',
})
export class NowPlayingPage {
  
   movieArray: any = [];
   imgPath = 'https://image.tmdb.org/t/p/original/';

  constructor(public navCtrl: NavController, public navParams: NavParams, public nowmovie: MovieProvider) {
    this.loadNowdata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NowPlayingPage');
  }


  loadNowdata(){
    this.nowmovie.getNowPlaying().subscribe(nowmovie=>{
      this.movieArray=nowmovie['results'];
    }) ;
  }

  Moviedetail(nowmovie){
    this.navCtrl.push("MovieDetailPage",nowmovie);
  }
}