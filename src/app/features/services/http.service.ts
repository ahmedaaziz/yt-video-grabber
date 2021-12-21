import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import  { map } from 'rxjs/operators';
import { environment as env } from "src/environments/environment";
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiKey:string = env.apiKey;
  constructor(public _http:HttpClient) { }

  getVideos(channel:string,maxResults:number):Observable<any>{
    // when youtube connect
    let url = `https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&channelId=${channel}&order=date&part=snippet&type=video,id&maxResults=${maxResults}`
    return this._http.get(url)
           .pipe(map((res) => {
            return res;
          }))
  }

  getVideoByID(id:string):Observable<any>{
    //supposed to follow this rq link
    //https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=YOUR_API_KEY&part=snippet,statistics
    let url = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${env.apiKey}&part=snippet,statistics,contentDetails`
    return this._http.get(url)
    .pipe(map(res =>{
      return res;
    }))
  }

}
