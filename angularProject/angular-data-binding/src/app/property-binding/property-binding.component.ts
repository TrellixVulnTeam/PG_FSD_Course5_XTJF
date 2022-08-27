import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  fname: String = "Wayne";
  f1: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
