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
  id?:string;
  data:any;
  video!:any;
  object!:any;
  bg!:string;
  public form!: FormGroup;
  rating3: number;



  constructor(private fb: FormBuilder,
              private router:Router,
              private route:ActivatedRoute,
              private videosService:HttpService) {
                route.params.subscribe((params)=> {
                  if(params.id)
                  this.data = videosService.getVideoByID(params.id)
                  .subscribe(res => {
                    this.object = { ...res.items[0] };
                    console.log(this.object);
                  });
                });
                this.rating3 = 0;
                this.form = this.fb.group({
                  rating: ['', Validators.required],
                });
                }

  ngOnInit(): void {
  }



}
