import { Component, OnInit } from '@angular/core';

export interface MenuItem {
  label: string;
  path: string;
}

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
})
export class SidebarMenuComponent implements OnInit {
  items: MenuItem[] = [
    {
      label: 'Home',
      path: '/home',
    },
    {
      label: 'Services',
      path: '/services',
    },
    {
      label: 'News',
      path: '/news',
    },
    {
      label: 'Blog',
      path: '/blog',
    },
    {
      label: 'Contact',
      path: '/contact',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
