import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

<<<<<<< HEAD
import { CounterModule } from './counter/component/counter/counter.module';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
=======
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GifsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
>>>>>>> eb6afdb (Fin sección 7)
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
<<<<<<< HEAD
    CounterModule,
    DbzModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

=======
    HttpClientModule,
    GifsModule,
    SharedModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
>>>>>>> eb6afdb (Fin sección 7)
export class AppModule { }
