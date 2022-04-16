import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestNameService {

  private testName = 'Hola Platzi';

  constructor() { }

  getTestName(): string {
    return this.testName;
  }
}
