import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import * as https from "https";
import * as line from "@line/bot-sdk";

// line bot sdk
import { Client } from "@line/bot-sdk";

@Injectable()
export class LineService {
  private readonly client: line.Client;

  lineConfig: line.ClientConfig = {
    channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.LINE_CHANNEL_SECRET,
  };

  constructor(private readonly httpService: HttpService) {
    this.client = new line.Client(this.lineConfig);
  }

  // liff.init({liffId: ""})

  async handleLineEvents(body: any) {
    // console.log(body);
    console.log(body.events[0].message.type);

    const messageType: string = body.events[0].message.type;
    // const message: string = body.events[0].message.text;
    const replyToken: string = body.events[0].replyToken;

    // if (
    //   body.events[0].type === "message" &&
    //   body.events[0].message.type === "text"
    // ) {
    //   console.log({ message: body.events[0].message.text });
    //   console.log({ replyToken: body.events[0].replyToken });

    //   this.replyTheMessage(message, replyToken);
    // } else {
    //   // this.replyTheMessage("your message is not text type", replyToken);
    //   this.client.replyMessage(replyToken, {
    //     type: "sticker",
    //     packageId: "2",
    //     stickerId: "34",
    //   })
    // }

    switch (messageType) {
      case "text":
        const text = body.events[0].message.text;
        if (text) {

          if( text.toLowerCase() === "open"){
            await this.client.replyMessage(replyToken, this.cardMessage)
          }

          await this.client.replyMessage(replyToken, {
            type: messageType,
            text: text,
          });
        }
        break;
      case "sticker":
        await this.client.replyMessage(replyToken, {
          type: "sticker",
          packageId: body.events[0].message.packageId,
          stickerId: body.events[0].message.stickerId,
        });
        break;
      case "image":
        console.log(body.events[0].message);
        // await this.client.replyMessage(replyToken, {
        //   type: "image",
        //   originalContentUrl: body.events[0].message.originalContentUrl,
        //   previewImageUrl: body.events[0].message.previewImageUrl,
        // })
      default:
        console.log(`the message type is : ${messageType}`);
        break;
    }

    return "test";
  }

  async replyTheMessage(message: string, replyToken: string) {
    let replyMessage: any = "";

    if (message && message.toLowerCase() == "open") {
      replyMessage = this.cardMessage;
    } else {
      replyMessage = [
        {
          type: "text",
          text: message,
        },
      ];
    }

    // reply with line-sdk library

    await this.client.replyMessage(replyToken, {
      type: "text",
      text: message,
    });

    // broadcast reply
    // await this.client.broadcast({
    //   type: "text",
    //   text: message,
    // })

    // reply with normally post request

    // const dataString = JSON.stringify({
    //   replyToken: replyToken,
    //   messages: replyMessage,
    // });

    // const headers = {
    //   "Content-Type": "application/json",
    //   // Authorization: "Bearer " + TOKEN,
    //   Authorization: "Bearer " + process.env.LINE_CHANNEL_ACCESS_TOKEN,
    // };

    // const broadcastReplyURL = "https://api.line.me/v2/bot/message/broadcast";
    // const replyURL = "https://api.line.me/v2/bot/message/reply";

    // try {
    //   const response = await this.httpService
    //     .post(replyURL, dataString, { headers })
    //     .toPromise();
    //   return response.data;
    // } catch (error) {
    //   console.error("Error:", error);
    //   throw error;
    // }
  }

  testService() {
    const DB_Password = process.env.DATABASE_PASSWORD;
    // return `test line service ${DB_Password}`;
    console.log("test Service");
    return this.lineConfig;
  }

  stickerMessage = [
    {
      type: "sticker",
      packageId: "1",
      stickerId: "1",
    },
  ];

  cardMessage:any = [
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
                // uri: "https://example.com",
                uri: process.env.LIFF_URL,
              },
            },
          ],
        },
      },
    },
  ];
}
