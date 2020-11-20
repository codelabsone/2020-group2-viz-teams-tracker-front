import { Member } from './member'

export class Team {
    id: number;
    name: string;
    description: string;
    members: Member[];

  constructor (value: any) {
    this.id = value.id;
    this.name = value.name;
    this.description = value.description;
  }
}
