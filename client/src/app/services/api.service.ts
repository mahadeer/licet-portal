import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ApiResponse } from "../models/ApiResponse";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  authenticateUser<T>(
    username: string,
    password: string
  ): Observable<ApiResponse<T>> {
    return this.http.post<ApiResponse<T>>("/api/auth", { username, password });
  }

  createNewUser<T>(user: T): Observable<ApiResponse<boolean>> {
    return this.http.post<ApiResponse<boolean>>("/api/signup", user);
  }

  logoutUser(username: string): Observable<boolean> {
    return this.http.post<boolean>("/api/logout", { username });
  }
}
