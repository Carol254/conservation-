import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Gallery } from './gallery/gallery';
import { Stories } from './stories/stories';

export const routes: Routes = [
    {
        path:'',
        component:Home
    },
    {
        path:'gallery',
        component:Gallery
    },
    {
        path:'stories',
        component:Stories
    }

];
