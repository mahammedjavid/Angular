import { Component, OnInit } from '@angular/core';

interface Book {
  name : string,
  author : string,
  description : string
  amount : number
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  books:Book[] = [
    {
    name : "FirstBook",
    author : "Javid",
    description : "Acts as a placeholder that Angular dynamically fills based on the current router state. See more... See alsolink · Routing tutorial. RouterLink.",
    amount : 800
    },
    {
    name : "SecondBook",
    author : "Mahammed",
    description : "Acts as a placeholder that Angular dynamically fills based on the current router state. See more... See alsolink · Routing tutorial. RouterLink.",
    amount : 900
    },
    {
    name : "ThirdBook",
    author : "Aizan",
    description : "Acts as a placeholder that Angular dynamically fills based on the current router state. See more... See alsolink · Routing tutorial. RouterLink.",
    amount : 700
    }
  ]


  // name :string =  "Mahammed"
  // name2:string = "Javid"
  // place : string = "Kaup"
  // place2 : string = "Mangalore"
  // name3 :string = "Aizan"
  // place3 : string = "Katpadi"
  isDesabled:boolean = false
  myName :string =""

  HandleClick(){
    this.isDesabled = true
  }

  isShowing:boolean = true

  constructor() { }

  ngOnInit(): void {
  }

}
