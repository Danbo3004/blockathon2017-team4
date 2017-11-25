import { Injectable } from '@angular/core';

@Injectable()
export class GlobalsService {
  private baseApiUrl = 'https://lalalendapi.clearsystems.asia/api/';
  constructor() { }
  getBaseUrl (): string {return this.baseApiUrl}
}
