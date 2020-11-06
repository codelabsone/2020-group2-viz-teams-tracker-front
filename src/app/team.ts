export class Team {
    id: number;
    name: string;

  constructor (value: any) {
    this.id = value.id;
    this.name = value.name;
  }
}
