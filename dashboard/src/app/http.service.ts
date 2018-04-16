import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptionsArgs, Headers, RequestOptions, BaseRequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { environment } from '../environments/environment';

@Injectable()
export class CustomHTTPService {

    private server: string = "http://" + environment.server + ":" + environment.serverPort;

    public constructor(private _http: Http) { }

    //generic call....
    getDataObservable(url: string): Promise<any> {
        return this._http.get(url)
            .map(data => data.json())
            .toPromise();
    }

    getAll(): Promise<any>{
        return this._http.get(this.server + "/v1/clients")
        .map(data => data.json())
        .toPromise();
    }

    get(cpf): Promise<any>{
        return this._http.get(this.server + "/v1/client/" + cpf)
        .map(data => data.json())
        .toPromise();
    }


    search(input): Promise<any> {

        return this._http.get(this.server + "/v1/client/search/" + input)
            .map(data => data.json())
            .toPromise();
    }

    delete(cpf): Promise<any> {

        return this._http.delete(this.server + "/v1/client/" + cpf)
        .map(data => data.json())
        .toPromise();

    }

    add(json): Promise<any>{

        return this._http.put(this.server + "/v1/client", json)
        .map(data => data.json())
        .toPromise();

    }

    update(json): Promise<any> {
        return this._http.post(this.server + "/v1/client", json)
        .map(data => data.json())
        .toPromise();
    }

}
