import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diploma4',
  templateUrl: './diploma4.component.html',
  styleUrls: ['./diploma4.component.scss']
})
export class Diploma4Component implements OnInit {
  diploma='assets/imgs/diploma4.jpg';
  nota=14;
  nombre='Angel Breña';
  constructor() { }

  ngOnInit(): void {
  }

}
