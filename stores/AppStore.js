import { observable } from "mobx";
class AppStore {
  @observable users = [
    {
      name: "Zain",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      role: "Developer",
      interests: [
        { name: "java", proficiency: 5 },
        { name: "python", proficiency: 5 },
        { name: "mobile development", proficiency: 5 }
      ],
      description:
        "Lifelong food geek. Certified reader. Zombie fanatic. Internet practitioner. Alcohol trailblazer. Travel guru.",
      previous: [5, 3, 2, 6]
    }
  ];

  @observable events = [
    {
        id:1,
        title: 'Java Tutorial',
        date: 'Sat 6 Apr',
        time: '19:30',
        location: 'Central 1 Theatre',
        going: 30,
        skills:[{skill:"java", rank:1}],
        starred: false
    },
    {
        id:2,
        title: 'Coding interview meetup',
        date: 'Sat 6 Apr',
        time: '20:00',
        location: 'Central 2 Theatre',
        going: 35,
        skills:[{skill:"Programming", rank:4}],
        starred: false
    },
    {
        id:3,
        title: "Computer Hacking skills",
        time: '20:30',
        date: 'Sat 7 Apr',
        location: 'Central 3 Theatre',
        going: 43,
        skills:[{skill:"C", rank:4}],
        starred: false
    },
    {
        id:4,
        title: 'Advanced python meetup',
        time: '20:30',
        date: 'Sat 7 Apr',
        location: 'Central 4 Theatre',
        going: 4,
        skills:[{skill:"Python", rank:5}],
        starred: false
    },
    {
        id:5,
        title: 'React Native noob meetup',
        time: '21:00',
        date: 'Sat 7 Apr',
        location: 'Central 5 Theatre',
        going: 29,
        skills:[{skill:"React Native", rank:1},{skill:"JS", rank:1}],
        starred: false
    },
    {
        id:6,
        title: 'React simple meetup',
        time: '21:30',
        date: 'Sat 8 Apr',
        location: 'Central 6 Theatre',
        going: 72,
        skills:[{skill:"React", rank:1}, {skill:"JS", rank:1}],
        starred: false
    },
    {
        id:7,
        title: 'C++ meetup',
        date: 'Sat 9 Apr',
        time: '22:00',
        location: 'Central 7 Theatre',
        going: 65,
        skills:[{skill:"C++", rank:3}],
        starred: false
    },
    {
        id:8,
        title: 'PHP Yikes meetup',
        time: '22:30',
        date: 'Sat 10 Apr',
        location: 'Central 8 Theatre',
        going: 25,
        skills:[{skill:"PHP", rank:2}],
        starred: false
    },
    {
        id:9,
        title: 'C Code meetup',
        time: '23:00',
        date: 'Sat 11 Apr',
        location: 'Central 9 Theatre',
        going: 54,
        skills:[{skill:"C", rank:3}],
        starred: false
    },
    {
        id:10,
        title: 'Medium Ruby',
        time: '23:30',
        date: 'Sat 11 Apr',
        location: 'Central 10 Theatre',
        going: 13,
        skills:[{skill:"Ruby", rank:3}],
        starred: false
    },
    {   
        id:11,
        title: 'JS newcoming welcome',
        time: '08:30',
        date: 'Sat 11 Apr',
        location: 'Central 11 Theatre',
        going: 43,
        skills:[{skill:"JS", rank:1}],
        starred: false
    },
    {
        id:12,
        title: 'PHPPPPP',
        time: '09:30',
        date: 'Sat 12 Apr',
        location: 'Central 12 Theatre',
        going: 47,
        skills:[{skill:"PHP", rank:4}],
        starred: false
    },
]
}

const appStore = new AppStore();
export default appStore;
