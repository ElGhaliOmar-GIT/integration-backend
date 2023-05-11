import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Configuration, OpenAIApi } from 'openai';
import { ChatWithBot, ResponseModel } from '../../models/gpt-response';
import { gptModels } from '../../models/constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from "axios"
export class textResponse{
  sno:number=1;
  text:string='';
  response:any='';
}

@Component({
  selector: 'app-chatgpt',
  templateUrl: './chatgpt.component.html',
  styleUrls: ['./chatgpt.component.css']
})

export class ChatgptComponent implements OnInit {
 chatConversation: ChatWithBot[]=[];
response!: ResponseModel | undefined;
    gptModels = gptModels
    promptText = '';
    showSpinner = false;

   apiUrl = 'https://chatgpt53.p.rapidapi.com/';
   headers = {
     'content-type': 'application/json',
    'X-RapidAPI-Key': 'cd7078cc4emsh1a9c6bcee95fdd3p1f2869jsn4902b7ddd22b',
    'X-RapidAPI-Host': 'chatgpt53.p.rapidapi.com'
  };
  gptResponse:any;
  data= {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content:''
      }
    ]
  }
  constructor() {}

 ngOnInit (){
  }
  sendMessage(){
  axios.post(this.apiUrl, this.data,{headers: this.headers}).then(response => {
       
        this.gptResponse = response.data.choices[0].message.content;
      })
      .catch(error => {
        console.error(error);
      });
  }
  checkResponse() {
    this.pushChatContent(this.promptText,'You','person');
    this.invokeGPT();
  }


  pushChatContent(content:string, person:string, cssClass:string) {
  }


  getText(data:string) {
    return this.gptResponse
  }

  async invokeGPT() {
   

    if(this.promptText.length<2)
    return;

    

    try{
      this.response = undefined;
      let configuration = new Configuration({apiKey: "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"});
      let openai = new OpenAIApi(configuration);

      let requestData={
        model: 'text-davinci-003',//'text-davinci-003',//"text-curie-001",
        prompt: this.promptText,//this.generatePrompt(animal),
        temperature: 0.95,
        max_tokens: 150,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      };
      this.showSpinner = true;
      let apiResponse =  await openai.createCompletion(requestData);

      this.response = apiResponse.data as ResponseModel;
      this.pushChatContent(this.response.choices[0].text.trim(),'Mr Bot','bot');
debugger;
      this.showSpinner = false;
    }catch(error:any) {
      this.showSpinner = false;
      // Consider adjusting the error handling logic for your use case
      if (error.response) {
        console.error(error.response.status, error.response.data);
        
      } else {
        console.error(`Error with OpenAI API request: ${error.message}`);
        
      }
    }
  }

}
