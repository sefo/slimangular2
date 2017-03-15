import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UtilisateursService {

    constructor(protected http: Http) {
    }

    public getAll() {
        return this.http.get('/api/utilisateurs')
            .map((response) => {
                return response.json();
            });
    }
}