import { Member } from './models/member';


export class Team {
    id: number;
    name: string;
    members: Member[];


  constructor (value: any) {
    this.id = value.id;
    this.name = value.name;
  }
}
