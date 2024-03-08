import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  @Input('auto') auto = false

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit(): void {
  }

}
