import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { Disco } from '../modelos/disco';


@Injectable({
    providedIn: 'root'
})
export class DiscosService {

    private discos: Disco[];

    constructor(private _http: HttpClient) {
        this.discos = [];
    }

    nuevoDisco(disco: Disco) {

        return this._http.post('http://localhost:3000/discos', disco);

        //        disco.id = Math.round(Math.random() * 1000000);
        //        this.discos.push(disco);

    }


    obtenerDiscos(): Observable<Disco> {

        return this._http.get('http://localhost:3000/discos').pipe(
            pluck('discos')
        );

        //return this.discos;
    }

    borrarDisco(id: string) {

        console.log(id);

        return this._http.delete('http://localhost:3000/discos/' + id).pipe(
            pluck('disco')
        );

    }

    obtenerDisco(id: string) {

        return this._http.get('http://localhost:3000/discos/' + id).pipe(
            pluck('disco')
        );
    }

    editarDisco(disco: Disco) {

        // Validar existencia
        return this._http.put('http://localhost:3000/discos/' + disco._id, disco);

    }

    filtrarDiscos(texto: string): Observable<Disco> {
        return this._http.get('http://localhost:3000/discos/grupo/' + texto).pipe(
            pluck('discos')
        );
    }
}
