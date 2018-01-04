import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/photos',
    pathMatch: 'full'
  },
  {
    path: 'photos',
    loadChildren: 'app/photos/photos.module#PhotosModule'
  },
  {
    path: 'files',
    loadChildren: 'app/files/files.module#FilesModule'
  },
  {
    path: 'sharing',
    loadChildren: 'app/sharing/sharing.module#SharingModule'
  },
  {
    path: 'links',
    loadChildren: 'app/links/links.module#LinksModule'
  },
  {
    path: 'events',
    loadChildren: 'app/events/events.module#EventsModule'
  },
  {
    path: 'get-started',
    loadChildren: 'app/get-started/get-started.module#GetStartedModule'
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ]
})
export class AppRoutingModule { }
