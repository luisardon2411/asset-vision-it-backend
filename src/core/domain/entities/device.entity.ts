export class Device {
  constructor(
    public id: number,
    public idModel: number,
    public dateAcquisition: Date,
    public endOfLifeDate?: Date,
  ) {}
}
