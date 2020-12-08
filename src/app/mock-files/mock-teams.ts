import {Team} from '../models/team-interface';
import {Member} from '../models/member'
// // import { MEMBERS } from '../mock-files/mock-members';


export const TEAMS: Team[]=[
  {
  id: 1,
  name: "P2P",
  members:[
  { id: 1, firstName: "Roger", lastName: "Beasley", image: "http://placekitten.com/100/100", jobTitle:'Software engineer', email: 'zamis@vizientinc.com', team: "P2P"},
  { id: 2, firstName: "Bob", lastName: "Stinks", image: "http://placekitten.com/100/100", jobTitle:'Software engineer', email: 'zamis@vizientinc.com', team: "P2P"},
  // { id: 3, name: "Matt"},
  { id: 4, firstName: "Molly", lastName: "Whitener", image: "http://placekitten.com/100/100", jobTitle:'Software engineer', email: 'zamis@vizientinc.com', team: "P2P" },
  { id: 5, firstName: "Seth", lastName: "Sievers", image: "http://placekitten.com/100/100", jobTitle: 'Software engineer', email: 'zamis@vizientinc.com', team: "P2P"},
  { id: 6, firstName: "Shawn", lastName: "Jones", image: "http://placekitten.com/100/100", jobTitle: 'Software engineer', email: 'zamis@vizientinc.com', team: "P2P" }
  // { id: 7, name: "Francee", image: "http://placekitten.com/100/100" },
  // { id: 8, name: "Jacqueline", image: "http://placekitten.com/100/100" },
  // { id: 9, name: "Phyllis", image: "http://placekitten.com/100/100" },
  // { id: 10, name: "Joe", image: "http://placekitten.com/100/100" },
  // { id: 11, name: "Bill", image: "http://placekitten.com/100/100" },
  // { id: 12, name: "Sue", image: "http://placekitten.com/100/100" },
    ]
  },
  // {
  {
  id: 2,
  name: "nema-codes",
  members:[
  { id: 1, firstName: "Steve", lastName: "Blue", image: "http://placekitten.com/100/100", jobTitle:'Software engineer', team:"nema-codes", email: 'zamis@vizientinc.com'},
  { id: 2, firstName: "Bob", lastName: "Red", image: "http://placekitten.com/100/100", jobTitle:'Software engineer', team:"nema-codes", email: 'zamis@vizientinc.com'},
  // { id: 3, name: "Matt"},
  { id: 4, firstName: "Molly", lastName: "Green", image: "http://placekitten.com/100/100", jobTitle:'Software engineer', team:"nema-codes", email: 'zamis@vizientinc.com'},
  { id: 5, firstName: "Seth", lastName:"Black", image: "http://placekitten.com/100/100", jobTitle: 'Goofball', team:"nema-codes", email: 'zamis@vizientinc.com' },
  // { id: 6, name: "Shawn", image: "http://placekitten.com/100/100" },
  // { id: 7, name: "Francee", image: "http://placekitten.com/100/100" },
  // { id: 8, name: "Jacqueline", image: "http://placekitten.com/100/100" },
  // { id: 9, name: "Phyllis", image: "http://placekitten.com/100/100" },
  // { id: 10, name: "Joe", image: "http://placekitten.com/100/100" },
  // { id: 11, name: "Bill", image: "http://placekitten.com/100/100" },
  // { id: 12, name: "Sue", image: "http://placekitten.com/100/100" },
    ]
  }
]
  // {
  //   id: number;
  //   name: string;
  //   members: [
  //     { id: number, name: string, image: string },
  //     { id: number, name: string, image: string },
  //     { id: number, name: string, image: string },
  //     { id: number, name: string, image: string },
  //     { id: number, name: string, image: string },
  //     { id: number, name: string, image: string }]
  // }]
// ]
//   // {
//   //   id: number;
//   //   name: string;
//   //   members: [
//   //     { id: number, name: string, image: string },
//   //     { id: number, name: string, image: string },
//   //     { id: number, name: string, image: string },
//   //     { id: number, name: string, image: string },
//   //     { id: number, name: string, image: string },
//   //     { id: number, name: string, image: string }]
//   // }]
// // ]

// //Original idea
// // export const TEAMS: Team[] = [
// //     { id: 1, name: 'P2P', members: MEMBERS},
// //     { id: 2, name: 'Catalog', members:},
// //     { id: 3, name: 'Cornerstone', members: MEMBERS},
// //     { id: 4, name: 'Data Crispr', members: MEMBERS},
// //     { id: 5, name: 'CLO', members: MEMBERS}
// // ]
