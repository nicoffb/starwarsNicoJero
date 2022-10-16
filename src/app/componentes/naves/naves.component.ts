import { Component, OnInit } from '@angular/core';
import { Nave } from '../../interfaces/Naves';
import { NavesService } from '../../servicios/naves.service';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css']
})
export class NavesComponent implements OnInit {

  listaNaves: Nave[] = [];

  constructor(private navesService: NavesService) { }

  ngOnInit(): void {
    this.navesService.getNaves().subscribe(resp => { this.listaNaves = resp.results });
  }

}
