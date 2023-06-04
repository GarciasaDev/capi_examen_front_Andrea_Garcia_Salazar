import { Component, OnInit } from '@angular/core';
import { user } from '../../interface/user.interface';
import { UsuariosService } from '../../services/usuarios.service';


@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  listUser: any | user;

  constructor(private userServices: UsuariosService) {}

  ngOnInit() {
    this.userServices.getListUser().subscribe((result) => {
      this.listUser = result;
      //console.log(this.listUser)
    });
  }



}
