import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class Profile {

  profileRewards:any[];

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Profile Page');
  }
  ionViewWillEnter() {
    this.getElementForCircles();
    this.loadingPage();
  }
  getElementForCircles() {
    let elem:any = document.querySelectorAll('.chart-progress');
    console.log(elem);
    for (let i:number = 0; i < elem.length; i++) {
      this.loadCircle(elem[i]);
    }
  }

  loadCircle(id) {

    var el:any = id; // get canvas

    var options:any = {
      percent: el.getAttribute('data-percent') || 25,
      size: el.getAttribute('data-size') || 220,
      lineWidth: el.getAttribute('data-line') || 15,
      rotate: el.getAttribute('data-rotate') || 0,
      className: el.getAttribute('data-class') || 'label-circle'
    }

    var canvas:any = document.createElement('canvas');
    var span:any = document.createElement('span');
    span.className = options.className;
    span.textContent = options.percent + '%';

    var ctx:any = canvas.getContext('2d');
    canvas.width = canvas.height = options.size;

    el.appendChild(span);
    el.appendChild(canvas);

    ctx.translate(options.size / 2, options.size / 2); // change center
    ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

    var img:any = ctx.getImageData(0, 0, 240, 240);
    ctx.putImageData(img, 0,0);
    var radius:any = (options.size - options.lineWidth) / 2;
    this.drawCircle(ctx, radius, '#38475C', options.lineWidth, 100 / 100);
    this.drawCircle(ctx, radius, '#50DA17', options.lineWidth, options.percent / 100);
  }

  drawCircle(ctx:any, radius:any, color:any, lineWidth:any, percent:any) {
    percent = Math.min(Math.max(0, percent || 1), 1);
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
    ctx.strokeStyle = color;
    ctx.lineCap = 'round'; // butt, round or square
    ctx.lineWidth = lineWidth
    ctx.stroke();
  }
  loadingPage(){
    this.profileRewards = [
      {
        id: 1,
        orgName: 'Азбука Вкуса',
        orgLogo: 'img/av.jpg',
        orgBg: 'img/cezar.jpg',
        cardChartPercent: 65,
        dopItems: [
          {id: 1, avatar: 'img/ava1.jpg', description: 'Вино столовое', descriptionPercent: 15}]
      },
      {
        id: 2,
        orgName: 'Re Store',
        orgLogo: 'img/re-store_logo.png',
        orgBg: 'img/re-store_bg.jpg',
        cardChartPercent: 25,
        dopItems: [
          {id: 1, avatar: 'img/ava2.jpg', description: 'Приведи друга', descriptionPercent: 50},
          {id: 2, avatar: 'img/ava3.jpg', description: 'Iphone 8G', descriptionPercent: 18}]
      },
    ];
  }

}
