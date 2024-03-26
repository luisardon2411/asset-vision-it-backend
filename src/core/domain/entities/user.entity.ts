export class User {
  constructor(
    public id: number,
    public username: string,
    public password: string,
    public urlPhoto?: string,
    public passwordExpiryDate?: Date,
    public enable2FA?: boolean,
    public code2FA?: string,
  ) {}
}
