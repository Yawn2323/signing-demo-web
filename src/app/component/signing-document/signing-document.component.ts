import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signing-document',
  templateUrl: './signing-document.component.html',
  styleUrls: ['./signing-document.component.css']
})
export class SigningDocumentComponent implements OnInit {

  selectedFile:any;
  fileToUpload:any;

  constructor() {

   }




  ngOnInit(): void {
  }

  onSelectFile(event:any) {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = event2 => {
        this.selectedFile = (event2.target as FileReader).result;
    }
  }


}
