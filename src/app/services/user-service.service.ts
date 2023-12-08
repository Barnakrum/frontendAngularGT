import { UserPostDTO } from './../models/user.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ErrorMessage } from '../models/errorMessage.interface';
import { User } from '../models/user.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private http: HttpClient) {}

  private readonly apiUrl = environment.apiUrl;

  registerUser(user: UserPostDTO): Observable<User | ErrorMessage> {
    return this.http.post<User | ErrorMessage>(this.apiUrl + '/users', user);
  }
}
