import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public list:any [] = []
  public key:string = ""
  constructor() { }

  ngOnInit() {
  }
  handleAdd(){
    if(this.key!==""){
      var obj:any = {}
      obj.name = this.key
      obj.ischecked = false
      this.list.push(obj)
      this.key = ""
    }
  }
  handleDel(item){
    this.list = this.list.filter(val=>val!==item)
  }
  sum(){
    var sum = this.list.filter(item=>item.ischecked)
    return sum.length
  }

}
