import { Component, OnInit } from '@angular/core';
import { LogService } from "../log.service";

@Component({
  selector: 'app-log-test',
  templateUrl: './log-test.component.html',
  styleUrls: ['./log-test.component.css']
})
export class LogTestComponent implements OnInit {

  constructor(private logger: LogService) { }

  ngOnInit(): void {
  }

  testLog(): void {
    //this.logger.log("Test the `log()` Method");
    this.logger.debug("Test Mixed Parameters", true, false, "Paul", "Smith");
  }
}
