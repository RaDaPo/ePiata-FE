export class ResponseAnnouncements {

  constructor(
    public name: string,
    public owner: string,
    public description: string,
    public id: string,
    public quantity: number,
    public price: number,
    public startDate: Date,
    public endDate: Date
  ) { }

}
