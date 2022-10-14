import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspeciesComponent } from './componentes/especies/especies.component';
import { NavesComponent } from './componentes/naves/naves.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { PersonajesComponent } from './componentes/personajes/personajes.component';
import { PlanetasComponent } from './componentes/planetas/planetas.component';
import { VehiculosComponent } from './componentes/vehiculos/vehiculos.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path: '' , component: MenuComponent, pathMatch: 'full'},
  {path: 'personajes' , component: PersonajesComponent},
  {path: 'peliculas' , component: PeliculasComponent},
  {path: 'naves' , component: NavesComponent},
  {path: 'vehiculos' , component: VehiculosComponent},
  {path: 'especies' , component: EspeciesComponent},
  {path: 'planetas' , component: PlanetasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
