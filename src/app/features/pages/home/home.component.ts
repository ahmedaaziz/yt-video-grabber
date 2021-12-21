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
      console.log(this.videos)
    })
  }

  // Search(){
  //   if(this.searchTerm = "") {
  //     this.ngOnInit()
  //   } else {
  //     console.log('changed');
  //     this.videos = this.videos.filter(res => {
  //       return res.title.toLocaleLowerCase().match(this.searchTerm.toLocaleLowerCase())
  //     });
  //     // let name = this.videos.filter(item => item.title);
  //     // return name.toLocalLowerCase().match(this.searchTerm.toLocaleLowerCase())
  //   }
  // }

  // Sorting Data

  sort(key:string){
    // console.log('changed');
    this.key = key;
    this.reverse = !this.reverse;
  }


}
