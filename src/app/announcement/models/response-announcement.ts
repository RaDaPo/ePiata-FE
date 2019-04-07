import { LocationItem } from 'src/app/models/location-item';

export class ResponseAnnouncements {

  constructor(
    public name?: string,
    public owner?: string,
    public description?: string,
    public id?: string,
    public quantity?: number,
    public price?: number,
    public startDate?: Date,
    public endDate?: Date,
    public location?: LocationItem,
    public image?: string,
    public unit?: string,
    public category?: number
  ) { }

}
