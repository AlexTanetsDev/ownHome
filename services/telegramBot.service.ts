import config from '@/config';
import { IMessage } from '@/types/telegramBot.types';

class TelegramBotService {
  constructor() {}
  private token = config.telegramBot.token;
  private url = config.telegramBot.apiUrl;
  private target = config.telegramBot.targetName;

  private getMessageText = (data: IMessage) => {
    return `Вітаю! Ви отримали звернення з сайту! Ім'я: ${data.name}, Телефон: ${data.phone}, Пошта: ${data.email} ${
      data.comment ? `, Повідомлення: ${data.comment}` : ''
    }`;
  };

  public sendMessage = async (data: IMessage) => {
    const text = this.getMessageText(data);
    const res = await fetch(`${this.url}bot${this.token}/sendMessage?chat_id=${this.target}&text=${text}`);
    return res;
  };
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new TelegramBotService();
