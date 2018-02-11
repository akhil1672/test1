import { LoginComponent } from "./login/login.component";
import { Routes } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";

export const userRoutes:Routes=[
    {path:'',children:[
        { path: 'login', component: LoginComponent },
        { path: 'signup', component: SignupComponent },
        { path: '', redirectTo: 'login', pathMatch: 'full'}
    ]}
    
]