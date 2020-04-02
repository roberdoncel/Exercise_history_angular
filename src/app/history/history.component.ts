import { Component, OnInit } from '@angular/core';
import {PassingdataService} from "../services/passingdata.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  subscription: Subscription;
  url_video: string; //youtube url not embebed
  url_history: string[]=[];
  historylength: number;

  constructor(private passingdata: PassingdataService) {
    //get the url stored in service from search-bar
    this.subscription = this.passingdata.getMessage().subscribe(
      urlreceived =>{
        this.url_video = urlreceived;
        this.url_history.push(urlreceived);

        
        //each time we update history is necessary to create localstorage item once again
        let history: string[]=[];
        history.push(urlreceived);

        let jsonObject = JSON.parse(localStorage.getItem("history"));
        if(jsonObject != null){
          jsonObject.forEach(element => {
            history.push(element);
          });
        }
        localStorage.setItem("history", JSON.stringify(history));   
      }
    );
  }

  load_video_again(elem: string){
    this.passingdata.updateMessage(elem); //update the url of service, so video-view as well
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }
}
