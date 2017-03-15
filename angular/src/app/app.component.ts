import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';
import { UtilisateursService } from '../services/utilisateurs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  msgs: Message[] = [];
  title = 'app works!';
  private utilisateurs: any[];

  constructor(private utilisateursService: UtilisateursService) {
    this.utilisateurs = [];
  }

  ngOnInit(): void {
    this.utilisateursService.getAll().subscribe(
      utilisateurs => {
        this.utilisateurs = utilisateurs;
        this.msgs.push({ severity: 'success', summary: 'Users fetched' });
        console.log(this.utilisateurs);
      }
    )
  }
}
