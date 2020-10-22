import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    public textoFiltro: string;

    public ocultarFiltro: boolean;
    public ocultarLimpiar: boolean;

    constructor(private router: Router) {
        this.textoFiltro = '';
        this.ocultarFiltro = false;
        this.ocultarLimpiar = true;
    }

    ngOnInit(): void {

    }

    filtrar(): void {

        if (this.textoFiltro != '') {
            this.ocultarFiltro = true;
            this.ocultarLimpiar = false;

            this.router.navigate(['lista', this.textoFiltro]);

        }

    }

    limpiar(): void {

        this.textoFiltro = '';
        this.ocultarFiltro = false;
        this.ocultarLimpiar = true;

        this.router.navigate(['lista']);

    }

}
