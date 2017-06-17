import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HowtoComponent } from "app/howto/howto.component";
import { ExamplesComponent } from "app/examples/examples.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'howto', component: HowtoComponent},
  { path: 'examples', component: ExamplesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
