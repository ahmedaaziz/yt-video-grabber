import { LocalStorageService } from './../../services/local-storage/local-storage.service';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public form!: FormGroup;
  id?:string;
  data:any;
  video!:any;
  result!:[];
  bg!:string;
  rating3: number;
  savedItem:boolean = false;



  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private localStorage:LocalStorageService,
              private videosService:HttpService) {
                this.rating3 = 0;
                this.form = this.fb.group({
                  rating: ['', Validators.required],
                });
                }

  ngOnInit(): void {
    this.loadVideoInfo();
  }

  loadVideoInfo(){
    this.videosService.getVideoByID(this.route.snapshot.params.id)
    .subscribe(
      res=>{
        this.video = res.items;
      }
    )
  }

  saveToFavorit(item:any){
    this.localStorage.addVidToLocalStore(item);
    this.savedItem = !this.savedItem;
  }

}
