export class Member {
  id?: number
  name?: string
  pic?: string

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
}

// Types of property 'members' are incompatible.
// Type '({ id: number; name: string; pic: string; } | { id: number; name: string; pic?: undefined; })[]' is not assignable to type 'Member[]'
