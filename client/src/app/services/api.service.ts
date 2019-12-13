import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import ApiResponse from "../models/ApiResponse";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  authenticateUser<T>(
    userName: string,
    password: string
  ): Observable<ApiResponse<T>> {
    return this.http.post<ApiResponse<T>>("/api/auth", { userName, password });
  }

  logoutUser(userName: string): Observable<boolean> {
    return this.http.post<boolean>("/api/logout", { userName });
  }
}
