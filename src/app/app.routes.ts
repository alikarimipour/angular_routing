import { Routes } from '@angular/router';
import {Admin1Component} from "./admin1/admin1.component";
import {AdminParentComponent} from "./admin-parent/admin-parent.component";
import {Admin2Component} from "./admin2/admin2.component";

export const routes: Routes = [

  {path:'admin',component:AdminParentComponent ,children:[
      {path:'1',component:Admin1Component},
      {path:'2',component:Admin2Component}
    ]},
  {path:'',component:AdminParentComponent}
];
