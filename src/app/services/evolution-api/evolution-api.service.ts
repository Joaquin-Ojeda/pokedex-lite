import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EvolutionApiService {

  private baseUrl = 'https://pokeapi.co/api/v2/evolution-chain/';

  constructor(private http: HttpClient) { }

  getEvolutions(index: number){
    return this.http.get<any>(`${this.baseUrl}${index}`);
  }
}
