import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
/***
 * EncryptionService class
 * @class
 * @constructor algorithm, key, iv
 * @public
 * @description Clase que se encarga de manejar la encriptación de las contraseñas
 * @version 1.0.0
 * @example
 * EncryptionService encryptionService = new EncryptionService();
 * encryptionService.encryptPassword('password');
 * @returns string
 * @author Luis Ardón
 */
@Injectable()
export class EncryptionService {
  private readonly algorithm = 'aes-256-cbc'; // AES (Advanced Encryption Standard) - 256 bits - CBC (Cipher Block Chaining);
  private readonly key: Buffer;
  private readonly iv: Buffer;

  constructor() {
    const masterKey = process.env.MASTER_KEY;
    this.key = crypto.createHash('sha256').update(masterKey).digest();
    this.iv = Buffer.alloc(16, 0);
  }

  encryptPassword(password: string): string {
    const cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv);
    let encryptedPassword = cipher.update(password, 'utf8', 'base64');
    encryptedPassword += cipher.final('base64');
    return encryptedPassword;
  }

  comparePassword(password: string, encryptedPassword: string): boolean {
    const decipher = crypto.createDecipheriv(this.algorithm, this.key, this.iv);
    let decryptedPassword = decipher.update(
      encryptedPassword,
      'base64',
      'utf8',
    );
    decryptedPassword += decipher.final('utf8');
    return decryptedPassword === password;
  }
}
