import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tankstelle',
  templateUrl: './tankstelle.component.html',
  styleUrls: ['./tankstelle.component.scss']
})
export class TankstelleComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  private uuid: number = 0;
  public name: string = "Shell Station";
  public brand: string = "SHELL";
  public street: string = "Am Hausmeisterring";
  public houseNumber: string = "15a";
  public postCode: number = 55555;
  public place: string = "Teurohausen";
  public lat: number = 1.5234;
  public lng: number = -3.25233;
  public dist: number = 1.3;
  @Input() public isOpen: boolean = false;

  /* Tankstellenpreise */
  public disel: string = "2.10";
  public e5: string = "2.50";
  public e10: string = "2.08";

}
