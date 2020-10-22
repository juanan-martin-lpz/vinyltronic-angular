import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscosService } from '../../servicios/discos.service';

import { Disco } from '../../modelos/disco';

@Component({
    selector: 'app-listado-discos',
    templateUrl: './listado-discos.component.html',
    styleUrls: ['./listado-discos.component.css']
})
export class ListadoDiscosComponent implements OnInit {

    public discos: Disco[];

    private filtrado: boolean;

    constructor(private router: Router, private ruta: ActivatedRoute, private servicio: DiscosService) {

        this.discos = [];

        this.filtrado = false;

        if (this.ruta.snapshot.params.grupo) {

            this.servicio.filtrarDiscos(this.ruta.snapshot.params.grupo).subscribe((r: any) => {

                this.filtrado = true;
                this.discos = r;

            });
        }
        else {
            this.servicio.obtenerDiscos().subscribe((r: any) => {

                this.filtrado = false;
                this.discos = r;

            });

        }

    }

    ngOnInit(): void {

    }

    editarDisco(id: string): void {

        console.log(id);

        this.router.navigate(['detalle', id]);


    }

    borrarDisco(id: string): void {

        this.servicio.borrarDisco(id).subscribe((res: any) => {
            if (this.filtrado) {
                this.servicio.filtrarDiscos(this.ruta.snapshot.params.grupo).subscribe((r: any) => {
                    this.discos = r;

                });

            }
            else {
                this.servicio.obtenerDiscos().subscribe((r: any) => {

                    this.discos = r;

                });
            }

        });


    }

}
