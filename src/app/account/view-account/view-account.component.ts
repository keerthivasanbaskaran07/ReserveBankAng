import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-account.component.html',
  styleUrl: './view-account.component.scss'
})
export class ViewAccountComponent implements OnInit{

  constructor(private apiService:ApiService){}

  ngOnInit(): void {
    this.getAccountData();
  }

  accountData : any;
  getAccountData(){
    this.apiService.getData().subscribe(
      (responseData:any)=>{
        this.accountData = responseData;
      },
      err => { console.log(err)}
    );
  }
}
