import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AccountAdminComponent } from "./account/account-admin/account-admin.component";
import { ApplyLoanComponent } from "./loan/apply-loan/apply-loan.component";
import { CloseAccountComponent } from "./account/close-account/close-account.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AccountAdminComponent, ApplyLoanComponent, CloseAccountComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'ReserveBank';
}
