import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class MyAuthGuard implements CanActivate {
    constructor(public router: Router) {}
    canActivate() {
        let token = sessionStorage.getItem("token");
        if(token != null) {
            return true;
        }
        else {
            alert("You are not signed in. Please sign in to access your portfolio.")
            this.router.navigate(["\login"]);
            return false;
        }
        
    }
}