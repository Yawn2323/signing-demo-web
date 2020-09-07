import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import SignaturePad from 'signature_pad';
import { DomSanitizer } from '@angular/platform-browser';
import { HelperService } from '../../services/helper.service';


@Component({
  selector: 'app-signing-document',
  templateUrl: './signing-document.component.html',
  styleUrls: ['./signing-document.component.css']
})
export class SigningDocumentComponent implements OnInit {

  isDone: boolean;
  @ViewChild('signaturePad', {static: true}) signaturePad:any;
  selectedFile:any;
  fileToUpload:any;
  dpr: number = window.devicePixelRatio;
  padW: number = 376;
  padH: number = 176;
  scale: number = 1;
  basePadW: number = 376;
  basePadH: number = 176;
  signatureImg:string;


  constructor(private domSanitizer: DomSanitizer, private helperService:HelperService) {
      this.isDone = false;

   }


   bypassSecurityTrustUrl = this.domSanitizer.bypassSecurityTrustUrl;


  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.signaturePad = new SignaturePad(this.signaturePad.nativeElement);
  }


  onClearSignature(){
      this.signaturePad.clear();
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    // console.log(this.signaturePad.toDataURL('image/png'));
    // console.log(this.signaturePad.toDataURL('image/svg+xml'));

    const svgBase64 = this.signaturePad.toDataURL('image/svg+xml');
    // console.log(svgBase64);
    let svg = HelperService.base64toUtf8(svgBase64.split(';')[1].split(',')[1]);
    // let patterns = [RegExp('width=\"([^"]*)\"'), RegExp('height=\"([^"]*)\"'), RegExp('viewBox=\"([^"]*)\"')]
    // patterns.forEach(pattern => { svg = svg.replace(pattern, '') });

    // let pattern = RegExp('width=\"([^"]*)\"');
    // svg = svg.replace(pattern, 'width="376"');
    // pattern = RegExp('height=\"([^"]*)\"');
    // svg = svg.replace(pattern, 'height="176"');
    // pattern = RegExp('viewBox=\"([^"]*)\"');
    // svg = svg.replace(pattern, 'viewBox="0 0 ' + this.padW + ' ' + this.padH + '"');
    const fullSvgBase64 = HelperService.utf8toBase64(svg);
    this.signatureImg = 'data:image/svg+xml;base64,' + fullSvgBase64;
}


  onSelectFile(event:any) {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = event2 => {
        this.selectedFile = (event2.target as FileReader).result;
    }
  }


  changeColor() {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    const color = 'rgb(' + r + ',' + g + ',' + b + ')';
    this.signaturePad.penColor = color;
  }


  drawSignature() {
    console.log(this.dpr);
    const imgCanvas = <HTMLCanvasElement>document.getElementById('signature-img');
    imgCanvas.width = this.basePadW * this.dpr;
    imgCanvas.height = this.basePadH * this.dpr;
    imgCanvas.style.width = '376px';
    imgCanvas.style.maxWidth = '90%';
    const ctx = imgCanvas.getContext('2d');
    console.log(imgCanvas);
    ctx?.scale(this.dpr, this.dpr);
    ctx?.clearRect(0, 0, imgCanvas.width, imgCanvas.height);
    const signatureImgObj: HTMLImageElement = document.createElement('img');
    signatureImgObj.src = this.signatureImg;
    signatureImgObj.width = this.basePadW;
    signatureImgObj.height = this.basePadH;
    console.log(signatureImgObj);
    setTimeout(() => {
      ctx?.drawImage(signatureImgObj, 0, 0, signatureImgObj.width, signatureImgObj.height);
    }, 100);
    console.log(signatureImgObj);
}


  savePNG() {
    if (this.signaturePad.isEmpty()) {
      alert('Please provide a signature first.');
    } else {
      const dataURL = this.signaturePad.toDataURL();
      this.download(dataURL, 'signature.png');
    }
  }


  download(dataURL:any, filename:any) {
    if (navigator.userAgent.indexOf('Safari') > -1 && navigator.userAgent.indexOf('Chrome') === -1) {
      window.open(dataURL);
    } else {
      const blob = this.dataURLToBlob(dataURL);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;

      document.body.appendChild(a);
      a.click();

      window.URL.revokeObjectURL(url);
    }
  }

  dataURLToBlob(dataURL:any) {
    // Code taken from https://github.com/ebidel/filer.js
    const parts = dataURL.split(';base64,');
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);
    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], { type: contentType });
  }

  doneSign(){
      this.isDone = true;
      const imgCanvas = <HTMLCanvasElement>document.getElementById('signature-pad');
      var ctx = imgCanvas.getContext('2d');
      var img = new Image();
      img.src = imgCanvas.toDataURL();
      this.signatureImg = img.src

  }

}
