import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class EncryptionService {
  private readonly algorithm = 'aes-256-cbc';
  private readonly key: Buffer;

  constructor() {
    const masterKey = process.env.MASTER_KEY;
    this.key = crypto.createHash('sha256').update(masterKey).digest();
  }

  encryptPassword(password: string): string {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(this.algorithm, this.key, iv);
    let encryptedPassword = cipher.update(password, 'utf8', 'base64');
    encryptedPassword += cipher.final('base64');
    const encryptedData = `${iv.toString('base64')}.${encryptedPassword}`;
    return Buffer.from(encryptedData, 'binary').toString('base64');
  }

  comparePassword(password: string, encryptedPassword: string): boolean {
    const encryptedData = Buffer.from(encryptedPassword, 'base64').toString(
      'binary',
    );
    const [ivBase64, encryptedPasswordBase64] = encryptedData.split('.');
    const iv = Buffer.from(ivBase64, 'base64');
    const decipher = crypto.createDecipheriv(this.algorithm, this.key, iv);
    let decryptedPassword = decipher.update(
      encryptedPasswordBase64,
      'base64',
      'utf8',
    );
    decryptedPassword += decipher.final('utf8');
    return decryptedPassword === password;
  }
}
