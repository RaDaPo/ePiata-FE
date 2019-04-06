import { LocationItem } from 'src/app/models/location-item';

export class RequestAnnouncements {

    constructor(
        public searchTerm?: string,
        public category?: number,
        public location?: LocationItem,
        public latitude?: string,
        public longitude?: string
    ) { }

}
