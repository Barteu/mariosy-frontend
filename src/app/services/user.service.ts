import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersUrl = 'api/users';

  constructor(private http: HttpClient) {}

  private searchedUsers$ = new BehaviorSubject<User[]>([]);
  private searchedUsersData: User[] = [];

  fetchSearchedUsers() {
    const url = `${this.usersUrl}?searchKeyword=`;
    return this.http.get<User[]>(url).subscribe((data) => {
      this.searchedUsersData = data;
      this.searchedUsers$.next(data);
    });
  }

  get users() {
    if (this.searchedUsersData.length === 0) {
      this.fetchSearchedUsers();
    }
    return this.searchedUsers$.asObservable();
  }

  searchUsers(searchText: string | null): Observable<User[]> {
    const url = `${this.usersUrl}?searchKeyword=${searchText}`;
    return this.http.get<User[]>(url);
  }
}
