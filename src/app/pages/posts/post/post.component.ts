import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input() postRemoto;
@Output() clickpost = new EventEmitter<number>();



  constructor() { }

  ngOnInit() {
  }

  onClickHijo(){
    this.clickpost.emit(this.postRemoto.id);
    //console.log(this.postRemoto.id);
  }

}
