import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { environment  as env} from "src/environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  videos:any[]=[];
  channelID:string = 'UCWOA1ZGywLbqmigxE4Qlvuw';
  searchTerm!: any;
  unsubscribe$ = new Subject();
  p:number = 1;
  key?:string;
  reverse:boolean = false;
  date?:string;
  videoData:any;


  constructor(
    private getVideosService:HttpService) { }

  ngOnInit(): void {

    this.getVideosService.getVideos(env.channelId,env.maxResults)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(lista => {
      for(let element of lista["items"]) {
        this.videos.push(element);
      }
    })
  }

  // Sorting Data

  sort(key:string){
    this.key = key;
    this.reverse = !this.reverse;
  }


}
