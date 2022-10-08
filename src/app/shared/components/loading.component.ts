import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <div class="container">
      <div class="d-flex justify-content-center position-fixed top-50 start-50">
        <div class="spinner-border" style="width: 100px; height: 100px" role="status">
          <span class="sr-only"></span>
        </div>
      </div>
    </div>

  `,
  styles: [
  ]
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
