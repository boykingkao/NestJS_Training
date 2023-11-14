import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import * as https from "https";

// line bot sdk
import { Client } from "@line/bot-sdk";

@Injectable()
export class LineService {
  // private readonly lineClient: Client;

  lineConfig = {
    channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.LINE_CHANNEL_SECRET,
  };

  // this.lineClient = new Client(config);

  constructor(private readonly httpService: HttpService) {}

  handleLineEvents(body: any) {
    // console.log(body);
    // console.log(body.events[0].message.text);
    if (body.events[0].type === "message") {
      console.log({ message: body.events[0].message.text });
      console.log({ replyToken: body.events[0].replyToken });
      const message: string = body.events[0].message.text;
      const replyToken: string = body.events[0].replyToken;

      this.replyMessage(message, replyToken);
    }
    return "test";
  }

  async replyMessage(message: string, replyToken: string) {

    let replyMessage:any = ''

    if(message.toLowerCase() == 'open'){
        replyMessage = this.cardMessage
    }else{
        replyMessage = [
          {
            type: "text",
            text: message
          }
        ]
    }

    // switch(message.toLowerCase()){
    //   case 'open':
    // }



    const dataString = JSON.stringify({
      // Define reply token
      replyToken: replyToken,
      // Define reply messages
      // messages: [
      //   {
      //     type: "text",
      //     text: message
      //   },

      // ],

      
      messages: replyMessage
    });

    const headers = {
      "Content-Type": "application/json",
      // Authorization: "Bearer " + TOKEN,
      Authorization: "Bearer " + process.env.LINE_CHANNEL_ACCESS_TOKEN,
    };

    const webhookOptions = {
      hostname: "api.line.me",
      path: "/v2/bot/message/reply",
      method: "POST",
      headers: headers,
    };

    // const request = https.request(webhookOptions, (res) => {
    //     res.on('data', (d) => {
    //       process.stdout.write(d);
    //     });
    //   });

    //   request.on('error', (err) => {
    //     console.error(err);
    //   });

    //   request.write(dataString);
    //   request.end();

    // this.httpService.post("https://api.line.me/v2/bot/message/reply", {
    //   data: dataString,
    //   headers: headers,
    // }).subscribe((res) => {
    //   console.log(res.data);
    // });

    const broadcastURL = "https://api.line.me/v2/bot/message/broadcast";
    const replyURL = "https://api.line.me/v2/bot/message/reply";
    try {
      const response = await this.httpService
        .post(replyURL, dataString, { headers })
        .toPromise();
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  testService() {
    const DB_Password = process.env.DATABASE_PASSWORD;
    // return `test line service ${DB_Password}`;
    console.log("test Service");
    return this.lineConfig;
  }



  cardMessage = [
    {
      type: "flex",
      altText: "This is a Flex Message",
      contents: {
        type: "bubble",
        header: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "DATS",
              color: "#FFFFFF",
            },
          ],
          backgroundColor: "#1C1C1C",
        },
        body: {
          type: "box",
          layout: "vertical",
          spacing: "md",
          contents: [
            {
              type: "image",
              url: "https://www.linefriends.com/content/banner/201804/3b5364c97c2d4a26988f85acdc78514e.jpg",
              size: "full",
              aspectRatio: "16:9",
              aspectMode: "cover",
            },
            {
              type: "button",
              style: "primary",
              action: {
                type: "uri",
                label: "CEO Workout",
                uri: "https://example.com",
              },
            },
          ],
        },
      },
    },]
}
