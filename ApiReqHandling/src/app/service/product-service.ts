import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from '../interfaces/Posts';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProduct():Observable<Posts[]> {
    const url = 'http://localhost:3000/posts';
    return this.http.get<Posts[]>(url);
  }

  saveUser(posts:Posts):Observable<Posts[]>{
    const url = 'http://localhost:3000/posts';
    return this.http.post<Posts[]>(url,posts);
  }

  deletePost(id:Number):Observable<Posts[]>{
    const url = `http://localhost:3000/posts/${id}`;
    return this.http.delete<Posts[]>(url);
  }

  selectedUser(id:number):Observable<Posts>{
    const url = `http://localhost:3000/posts/${id}`
    return this.http.get<Posts>(url);
  }

  updatePost(id: number, post: Posts) {
  return this.http.put<Posts>(`http://localhost:3000/posts/${id}`, post);
}

}
