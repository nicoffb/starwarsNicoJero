import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialImportsModule } from './material-imports/material-imports.module';
import { PersonajesComponent } from './componentes/personajes/personajes.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { EspeciesComponent } from './componentes/especies/especies.component';
import { NavesComponent } from './componentes/naves/naves.component';
import { VehiculosComponent } from './componentes/vehiculos/vehiculos.component';
import { PlanetasComponent } from './componentes/planetas/planetas.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    PeliculasComponent,
    EspeciesComponent,
    NavesComponent,
    VehiculosComponent,
    PlanetasComponent,
    MenuComponent
  ],
  imports: [
    MaterialImportsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
