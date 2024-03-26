export class ComputerModel {
  constructor(
    public id: number,
    public name: string,
    public brand: string,
    public typeComputer: string,
    public status?: number,
  ) {}
}
