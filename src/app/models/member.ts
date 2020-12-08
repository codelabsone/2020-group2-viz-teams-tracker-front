export class Member {
  id: number
  image: string
  firstName: string
  lastName: string
  jobTitle: string
  team_id: number
  // email: string

  constructor (value: any) {
    this.id = value.id;
    this.image = value.image;
    this.firstName = value.firstName;
    this.lastName = value.lastName;
    this.jobTitle = value.jobTitle;
    this.team_id = value.team_id;
  }
}

  // constructor({
  //   id = null,
  //   name = '',
  //   pic = '',
  //   ...rest
  // }) {

  //   Object.assign(this, rest)
  //   this.id = id
  //   this.name = name,
  //   this.pic = pic
  // }


// Types of property 'members' are incompatible.
// Type '({ id: number; name: string; pic: string; } | { id: number; name: string; pic?: undefined; })[]' is not assignable to type 'Member[]'
