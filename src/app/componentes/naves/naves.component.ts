import { Component, OnInit } from '@angular/core';
import { Nave } from '../../interfaces/naves';
import { NavesService } from '../../servicios/naves.service';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css']
})
export class NavesComponent implements OnInit {

  listaNaves: Nave[] = [];
  numPags=0;
  actualPag=0;

  constructor(private navesService: NavesService) { }

  ngOnInit(): void {
    this.getPagNaves(1);
  }

  getPagNaves(pag: number) {
    this.navesService.getNaves(pag).subscribe(respuesta => {
      this.listaNaves= respuesta.results;
      this.numPags=Math.ceil(respuesta.count/10);
      this.actualPag=pag;
    });
  }

  getNaveImgUrl(nave : Nave) : string{
    return 'https://starwars-visualguide.com/assets/img/starships/' + nave.url.split('/')[5] + '.jpg'
  }

  counter() {
    return new Array(this.numPags);
  }



}
