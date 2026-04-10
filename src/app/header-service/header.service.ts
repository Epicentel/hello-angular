1 import { Injectable } from '@angular/core';
2 import { Component } from'../services/header-service/header-service';
3 @Injectable({
4 providedIn: 'root'
5 })
6 export class HeaderService {
7   accesoHeader = 'header service running...';
8  
9   constructor() { }
10 }
11  constructor(public headerService: HeaderService)
12  {
13    console.log(this.headerService);
14  }
