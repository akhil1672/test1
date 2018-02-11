import { Routes } from "@angular/router";

export const appRoutes:Routes=[
    { path: 'user', loadChildren: './user/user.module#UserModule'},
    {path:'',redirectTo:'user',pathMatch:'full'}
]