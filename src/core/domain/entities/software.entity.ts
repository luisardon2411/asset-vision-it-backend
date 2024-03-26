export class Software {
  constructor(
    public id: number,
    public name: string,
    public version: string,
    public typeSoftware: string,
    public license?: string,
    public status?: number,
  ) {}
}
