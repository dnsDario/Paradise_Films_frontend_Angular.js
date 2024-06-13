import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilmCreateData } from '../interfaces/dto/film-create-data';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  URL_API: string = "https://paradise-films-backend.vercel.app" || 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    private cookies: CookieService
  ) { }

  

  findAll(){
    return this.http.get(`${this.URL_API}/api/films?token=${this.cookies.get('token')}`)
  }

  findById(id:string){
    return this.http.get(`${this.URL_API}/api/films/${id}?token=${this.cookies.get('token')}`)
  }

  insert(data: FilmCreateData){
    return this.http.post(`${this.URL_API}/api/films?token=${this.cookies.get('token')}`, data)
  }

  deleteOne(id: string){
    return this.http.delete(`${this.URL_API}/api/films/${id}?token=${this.cookies.get('token')}`)
  }
}
