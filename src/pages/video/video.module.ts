import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import VideoPage from './video';

@NgModule({
  declarations: [
    VideoPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoPage),
  ],
})
export class VideoPageModule {}
