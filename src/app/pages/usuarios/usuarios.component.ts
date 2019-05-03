import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from '../../services/usuario/usuario.service';
import Swal from 'sweetalert2';
declare function init_plugins();

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  cargando: boolean = true;
  usuarios: Usuario[] = [];

  constructor( public _us: UsuarioService ) { }

  ngOnInit() {
    init_plugins();
    this.cargarUsuarios();
  }

  buscarUsuario( termino: string ) {
    let input, filter, table, tr, td, i, txtValue;
    
    filter = termino.toUpperCase();
    table = document.getElementById("usuarios");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

  cargarUsuarios() {
    
    this._us.cargarUsuarios().subscribe( (usuarios: any[]) => {
      this.usuarios = usuarios;
    });

    
    
    setTimeout(() => {
      this.cargando = false;
     }, 1000);

  }

  borrarUsuario( id: string, usuario: Usuario ) {

    this._us.borrarUsuario(id).subscribe( resp => {

      Swal.fire({
        title: 'Enhorabuena',
        text: 'Usuario ' + usuario.username + ' eliminado exitosamente' ,
        type: 'success',
        confirmButtonText: 'Continuar'
      });

      this.cargarUsuarios();

    });

  }

}
