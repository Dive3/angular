import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

postsRemote : any;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.postsRemote = this.data.getPosts();
    /*this.dataServ.getPosts().subscribe(posts => {
      console.log(posts);
    });*/
  }

  onClickPadre(id){
    console.log(id);
  }

}
