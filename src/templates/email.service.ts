import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}
  sendEmail(subject: string, message: string, to: string): void {
    this.mailerService.sendMail({
      to,
      subject,
      html: message,
    });
  }
}
