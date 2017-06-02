import { Injectable } from    '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Dist } from './dist';
import { Branch } from './branch';

@Injectable()
export class DataService{
    private headers = new Headers({'Content-type':'application/json'});
    private distsUrl = 'http://3000/api/v1/dists';
    private branchesUrl = 'http://3000/api/v1/branches';

    constructor(private http: Http){}

    getDists(): Promise<Dist[]> {
        return this.http.get(this.distsUrl)
                   .toPromise()
                   .then(response => response.json().data as Dist[])
                   .catch(this.handleError);
    }

    getDist(id:number): Promise<Dist>{
        const url = `${this.distsUrl}\$(id)`;
        return this.http.get(url)
                   .toPromise()
                   .then(response => response.json().data as Dist)
                   .catch(this.handleError);
    }

    getBranches(): Promise<Branch[]> {
        return this.http.get(this.branchesUrl)
                   .toPromise()
                   .then(response => response.json().data as Branch[])
                   .catch(this.handleError);
    }

    getBransh(id:number): Promise<Branch>{
        const url = `${this.branchesUrl}\$(id)`;
        return this.http.get(url)
                   .toPromise()
                   .then(response => response.json().data as Branch)
                   .catch(this.handleError);
    }

    getBranchesByDist(dist_id: string){
        var params = new URLSearchParams();
        params.set('dist_id',dist_id);
        return this.http.get(this.branchesUrl, { search: params })
                   .toPromise()
                   .then(response => response.json().data as Branch[])
                   .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}