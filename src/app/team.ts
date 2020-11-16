import { Member } from './models/member';
import { MEMBERS } from './mock-files/mock-members';


export class Team {
    id: number;
    name: string;
    members: Member[];


  constructor (value: any) {
    this.id = value.id;
    this.name = value.name;
  }
}
