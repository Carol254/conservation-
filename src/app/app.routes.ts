import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Gallery } from './gallery/gallery';
import { Stories } from './stories/stories';
import { About } from './about/about';
import { Flora } from './flora/flora';
import { Fauna } from './fauna/fauna';

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
    },
    {
        path:'about',
        component:About
    },
    {
        path:'flora',
        component:Flora
    },
    {
        path:'fauna',
        component:Fauna
    }

];
