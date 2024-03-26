export class Account {
  constructor(
    public id: number,
    public name: string,
    public lastName: string,
    public email: string,
    public dateCreated: Date,
    public userCreated: string,
    public status: number,
    public dateUpdated?: Date,
    public userUpdated?: string,
    public phone?: string,
  ) {}
}
