import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-for-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements OnInit {

  htmlfile:string;
  test = `<img
  src="http://image.message.americanexpress.com.bh/lib/fe98157073640d7877/m/10/34764_ma_reg-header.jpg"
   alt="Please confirm your registration"
  style="border:none;display:block;outline:none;text-decoration:none;width:620px;"
  width="620"
  class="mobile-responsive">`;

  constructor(private http: HttpClient) { 
    this.getHTML('./assets/html/creating-templates.html');
  }

  ngOnInit() {
    
  }

  getHTML(link){
    this.http.get(link, {responseType: 'text'}).subscribe(data => this.htmlfile = data);
    return this.htmlfile;
  }

}
