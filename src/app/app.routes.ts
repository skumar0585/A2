import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { GalleryComponent } from './gallery/gallery.component';


const APP_ROUTES = [
    { path: '', redirectTo:'/home', pathMatch: 'full' },
    { path: 'directory', component: DirectoryComponent},
    { path: 'home', component: HomeComponent},
    { path: 'gallery', component: GalleryComponent}
    
];

export const routing = RouterModule.forRoot(APP_ROUTES);