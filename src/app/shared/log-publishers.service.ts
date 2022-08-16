import { Injectable } from '@angular/core';
import {
  LogPublisher,
  LogConsole,
  LogLocalStorage,
  LogWebApi
} from "./log-publishers";
//import { Http } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LogPublishersService {
  // Public properties
  publishers: LogPublisher[] = [];

  // Build publishers array
  buildPublishers(): void {
    // Create instance of LogConsole Class
    this.publishers.push(new LogConsole());

    // Create instance of LogLocalStorage Class
    this.publishers.push(new LogLocalStorage());
  }

  constructor() {
    // Build publishers arrays
    this.buildPublishers();
  }
}
