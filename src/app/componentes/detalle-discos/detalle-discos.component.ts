import { Component, OnInit } from '@angular/core';
import { Disco } from '../../modelos/disco';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscosService } from '../../servicios/discos.service';

@Component({
    selector: 'app-detalle-discos',
    templateUrl: './detalle-discos.component.html',
    styleUrls: ['./detalle-discos.component.css']
})
export class DetalleDiscosComponent implements OnInit {

    public disco: Disco;

    private edit: boolean;

    constructor(private servicio: DiscosService, private router: Router, private ruta: ActivatedRoute) {

        if (this.ruta.snapshot.params.id) {
            this.edit = true;
            this.servicio.obtenerDisco(this.ruta.snapshot.params.id).subscribe((res: any) => {

                console.log(res);

                this.disco = res[0];
            });
        }
        else {
            this.edit = false;
            this.disco = new Disco();
        }
    }

    ngOnInit(): void {
    }

    aceptar(): void {

        if (!this.edit) {
            this.servicio.nuevoDisco(this.disco).subscribe((res: any) => {
                console.log(res);

            });
        }
        else {
            this.servicio.editarDisco(this.disco).subscribe((res: any) => {

                console.log(res);

            });
        }

        this.router.navigate(['lista']);
    }

    cancelar(): void {

        //
    }
}
