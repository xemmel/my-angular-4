# Morten la Cour's Angular 4 page

## Table of Content
1. [Getting started](#getting-started)
2. [Installing Foundation](#installing-foundation)
3. [Setup Routing](#setup-routing)

### Getting Started

>Create new project by executing the following command _**it is assumed that you have already accuired the lastest version of Angular CLI**_

```
ng new --routing --style=scss todos
```

[Back to Top](#table-of-content)

### Installing Foundation

To install the _**Foundation for sites**_ do the following...

[Back to Top](#table-of-content)


### Setup Routing

- Create a couple of new component (pages)

```
ng g c howto
ng g c examples
```

- Open **app-routing.module.ts** and edit the _routes_ as follows (remember that imports are required for each route-page)
```typescript
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
```

- Modify the **app.component.html** file (make sure that your **app.component.ts** (AppComponent) class contains a string variable (title))
```html
<header>
  <h1>{{title}}</h1>
  <nav>
    <ul>
      <li><a routerLink="howto">How To</a></li>
      <li><a routerLink="examples">Examples</a></li>

    </ul>
  </nav>
</header>

<router-outlet></router-outlet>
```


[Back to Top](#table-of-content)

