import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-admin.component.html',
  styleUrl: './account-admin.component.scss'
})
export class AccountAdminComponent implements OnInit {

  accounts : any;
  showSensitiveData : boolean = false;
  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.getAccountDetails();
  }

  getAccountDetails(){
    this.apiService.getData().subscribe(
      (responseData:any) => {
        this.accounts = responseData;
      },
      err => { console.log(err);}
    );
  }
}
