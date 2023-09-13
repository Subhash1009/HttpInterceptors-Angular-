import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  txt?: string;
  txt1? : string;
  constructor() { }
  ngOnInit():void{ 
    const promise = new Promise(resolve =>{
      console.log('Promise Call......')
      this.txt = 'Promise Call'
      setTimeout(() => {
        resolve('Promise is working')
        this.txt = 'Promise Working'
        
      }, 2000);
    })
    // promise.then(result =>{  //Listen to the consumer
    //   console.log(result)
    // })


     //observable()
  //  const observable = new Observable(subscribe =>{
  //   console.log('Obervable Call....')
  //   this.txt1 = 'Observable Call'
  //   setTimeout(() => {
  //     subscribe.next('Observable is working')
  //     this.txt1 = 'Observable is working'
      
  //   }, 4000);
  // })
  // observable.subscribe(result =>{
  //   console.log(result)
  // })
  // }
} }





  // ngOnInit(): void {  // Emit only single value
  //   let promise = new Promise((x) => {
  //     setTimeout(() => {
  //       x("Promise");
  //       x("Promise1");
  //       x("Promise2");

  //     }, 2000);
  //   })
  //   promise.then(value => { //Listen to the consumer
  //     console.log(value)
  //     this.txt = "Promises emits Single value"

  //   })

  //   let test = new Observable((x)=>{ //Emits Multiple Values
  //     setTimeout(() => {
  //       x.next("Multiple 1")
  //       x.next("Multiple 2")
  //       x.next("Multiple 3")
        
  //     }, 1000);
     
  //   })
  //   test.subscribe(value =>{
  //     console.log(value);
  //     this.txt1= "Observables emits Multple values"
  //   })
  // }
  // }





//   ngOnInit(): void {
//     let ob = new Observable((observer)=>{
//       setTimeout(() => {
//         console.log("Calling Next");
//         observer.next("First Call")
        
        
//       }, 3000);
//     });
//       let sub = ob.subscribe(value=>{
//         console.log(value);
      
//     });
//     sub.unsubscribe()
    
//   }
// }
