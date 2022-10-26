import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  URL = 'https://backef.herokuapp.com/' + 'skills/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(this.URL+'lista');
  }

  public detail(id: number): Observable<Skills>{
    return this.httpClient.get<Skills>(this.URL+`detail/${id}`);

  }

  public save(skills: Skills): Observable<any>{
    return this.httpClient.post<any>(this.URL+'create', skills);
  }

  public update(id: number, skills: Skills): Observable<any>{
    return this.httpClient.put<any>(this.URL+`update/${id}`, skills);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL+`delete/${id}`);
  }
}
