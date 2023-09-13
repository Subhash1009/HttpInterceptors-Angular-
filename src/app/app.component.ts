import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) { }
  title = 'HttpInterceptors';

  ngOnInit(): void {
    this.http.post('https://fakestoreapi.com/products', { name: "ms" }).subscribe(
      (data) => {
        console.log(data)
      }
    )


    // this.http.get('https://fakestoreapi.com/products').subscribe(
    //   (data) => {
    //     console.log(data)
    //   }
    // )
  }
}
