import {Component} from "angular2/core";

@Component({
    
    selector: "my-app",
    template: "<h1>My First Angular 2 App</h1>"

})
export class AppComponent {
    
    name: string = "Sourrue";
    surname: string = "Kévin";

    constructor(){
        
        console.log("ok");
        
    }
    
}
