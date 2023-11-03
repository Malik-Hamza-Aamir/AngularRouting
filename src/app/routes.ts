import { Routes } from "@angular/router";
import { Page1Component } from "./components/page1/page1.component";
import { Page2Component } from "./components/page2/page2.component";
import { HomeComponent } from "./components/home/home.component";

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    }
];

export default routeConfig;