import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {

   arr=[{id:1,name:"Praful",mail:"praful@gmail.com"},
   {id:2,name:"Wasu",mail:"wasu@gmail.com"},
   {id:3,name:"Aman",mail:"aman@gmail.com"},
   {id:4,name:"Yaman",mail:"yaman@gmail.com"},
   {id:5,name:"Manoj",mail:"manoj@gmail.com"},
   {id:6,name:"Vaibhav",mail:"vaibhav@gmail.com"}
  ];
   

  closeResult: string = '';
  
  constructor(private modalService: NgbModal) {}
    
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  ngOnInit(): void {
  }


}
