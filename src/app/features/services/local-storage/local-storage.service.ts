import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  favoriteList:any[] = [];
  constructor() { }

  addVidToLocalStore(item:any){
      this.favoriteList.push(item);
      localStorage.setItem('favorites',JSON.stringify(this.favoriteList));
  }

}
