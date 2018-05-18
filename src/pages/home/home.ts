import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

declare var Swiper

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  swiper: any;
  // @ViewChild('ion-content') ionContent: Slides;
  // @ViewChild('contentSlides') contentSlides: Slides;
  @ViewChild('contentSlides') ionContent: Slides;

  // items: Array<any> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0, 1, 2, 3, 4, 5, 6, 7, 8, 0, 1, 2, 3, 4, 5, 6, 7, 8];

  menus: Array<string> = ["最新", "热门", "性感", "小清新","萝莉","摄影"]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab3Page');
    this.initSwiper();
  }
  initSwiper() {
    this.swiper = new Swiper('.pageMenuSlides .swiper-container', {
      slidesPerView: 6,
      spaceBetween: 10,
      // breakpoints: {
      //   1024: {
      //     slidesPerView: 6,
      //     spaceBetween: 0
      //   },
      //   768: {
      //     slidesPerView: 6,
      //     spaceBetween: 0
      //   },
      //   640: {
      //     slidesPerView: 6,
      //     spaceBetween: 0
      //   },
      //   320: {
      //     slidesPerView: 6,
      //     spaceBetween: 0
      //   }
      // }
    });
  }

  selectPageMenu($event, index) {
    this.setStyle(index);
    this.ionContent.slideTo(index);
  }
  slideChanged() {
    let index = this.ionContent.getActiveIndex();
    this.setStyle(index);
    this.swiper.slideTo(index, 300);
  }

  setStyle(index) {
    var slides = document.getElementsByClassName('pageMenuSlides')[0].getElementsByClassName('swiper-slide');
    console.log(slides)
    if (index < slides.length) {
      for (var i = 0; i < slides.length; i++) {
        var s = slides[i];
        s.className = "swiper-slide titles";
      }
      slides[index].className = "swiper-slide bottomLine titles";
    }
  }
}
