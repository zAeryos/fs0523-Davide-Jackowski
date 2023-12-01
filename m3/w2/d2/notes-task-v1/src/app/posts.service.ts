import { Injectable } from '@angular/core';
import { IPosts } from './models/iposts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts:IPosts[] = [
    {
      id:0,
      mainText:'Ah boh',
      subText: 'xxLorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corrupti corporis doloribus in! Vero eius qui fuga culpa ratione, maiores ea tempore perferendis at deleniti, nulla vitae sequi, eaque quas!',
      isActive: true
    },
    {
      id:1,
      mainText:'Ah boh',
      subText: 'zzLorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corrupti corporis doloribus in! Vero eius qui fuga culpa ratione, maiores ea tempore perferendis at deleniti, nulla vitae sequi, eaque quas!',
      isActive: true
    },
    {
      id:2,
      mainText:'Ah boh',
      subText: 'ccLorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corrupti corporis doloribus in! Vero eius qui fuga culpa ratione, maiores ea tempore perferendis at deleniti, nulla vitae sequi, eaque quas!',
      isActive: false
    },
    {
      id:3,
      mainText:'Ah boh',
      subText: 'aaLorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corrupti corporis doloribus in! Vero eius qui fuga culpa ratione, maiores ea tempore perferendis at deleniti, nulla vitae sequi, eaque quas!',
      isActive: true
    },
    {
      id:4,
      mainText:'Ah boh',
      subText: 'qqLorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corrupti corporis doloribus in! Vero eius qui fuga culpa ratione, maiores ea tempore perferendis at deleniti, nulla vitae sequi, eaque quas!',
      isActive: false
    },
    {
      id:5,
      mainText:'Ah boh',
      subText: 'rrLorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corrupti corporis doloribus in! Vero eius qui fuga culpa ratione, maiores ea tempore perferendis at deleniti, nulla vitae sequi, eaque quas!',
      isActive: true
    },
    {
      id:6,
      mainText:'Ah boh',
      subText: 'ggLorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corrupti corporis doloribus in! Vero eius qui fuga culpa ratione, maiores ea tempore perferendis at deleniti, nulla vitae sequi, eaque quas!',
      isActive: false
    },
  ];

  constructor() { }

}
