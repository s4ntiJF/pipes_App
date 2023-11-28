import { Component } from '@angular/core';

@Component({
  selector: 'shared-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower:string = 'Santiago';
  public nameUpper:string = 'SANTIAGO';
  public fullName:string = 'slakdksldk';

  public customDate:Date = new Date();

}
