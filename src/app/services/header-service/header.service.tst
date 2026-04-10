  import { Injectable } from '@angular/core';
  import { AngularFirestone, AngularFirestoneCollection } from '@angular/fire/compat/firestores';
  import { Header } from '../../models/header/header.model';

  @Injectable({
    providedIn: 'root'
  })
 export class HeaderService {
   accesoHeader = 'header service running...';

   private dbPath = '/header';

   headerRef: AngularFirestoneCollection<header>;

   constructor(private db: AngularFirestone) {
     this.headerRef = db.collection(this.dbPath);
   }

  getHeader(): AngularFirestoneCollection<Header> {
     return this.headerRef;
   }
 }
