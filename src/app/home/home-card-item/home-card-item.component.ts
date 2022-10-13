import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-card-item',
  templateUrl: './home-card-item.component.html',
  styleUrls: ['./home-card-item.component.scss'],
})
export class HomeCardItemComponent implements OnInit {
  @Input() item!: {
    title: string;
    desc: string;
    thumbnail: string;
  };

  constructor() {}

  ngOnInit(): void {}
}
