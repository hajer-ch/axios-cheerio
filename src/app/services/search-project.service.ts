import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchProjectService {
  companyURL = 'http://localhost:3000';

  constructor(private httpClient:HttpClient) { }
  searchByCompany(company) {
    return this.httpClient.post<{ searchedCompany: any }>(`${this.companyURL}/searchCompany`, company);
  }
}
