import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class DataService<T> {
  constructor(
    public url: string,
    public http: HttpClient) {
  }

  getAll() {
    return this.http.get<T[]>(`${environment.baseUrl}${this.url}`);
  }

  get(id: number) {
    return this.http.get<T>(`${environment.baseUrl}${this.url}/${id}`);
  }

  add(post) {
    return this.http.post(`${environment.baseUrl}${this.url}`, post);
  }

  update(post) {
    return this.http.patch(`${environment.baseUrl}${this.url}/${post.id}`, post);
  }

  delete(id) {
    return this.http.delete(`${environment.baseUrl}${this.url}/${id}`);
  }
}
