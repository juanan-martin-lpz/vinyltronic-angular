import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { DetalleDiscosComponent } from './componentes/detalle-discos/detalle-discos.component';
import { ListadoDiscosComponent } from './componentes/listado-discos/listado-discos.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PieComponent } from './componentes/pie/pie.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
    { path: '', component: ListadoDiscosComponent },
    { path: 'lista', component: ListadoDiscosComponent },
    { path: 'lista/:grupo', component: ListadoDiscosComponent },
    { path: 'detalle', component: DetalleDiscosComponent },
    { path: 'detalle/:id', component: DetalleDiscosComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        CabeceraComponent,
        ListadoDiscosComponent,
        DetalleDiscosComponent,
        PieComponent,
        MenuComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
