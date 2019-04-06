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

    @observable events = 
        {
            education: [
                {
                    id:1,
                    title: 'FIT3155 meetup',
                    date: 'Sat 6 Apr',
                    time: '19:30',
                    location: 'Central 1 Theatre',
                    going: 30,
                    skills:[{skill:"java", rank:1}],
                    starred: false
                },
                {
                    id:2,
                    title: 'MED4200 meetup',
                    date: 'Sat 6 Apr',
                    time: '20:00',
                    location: 'Central 2 Theatre',
                    going: 35,
                    skills:[{skill:"Programming", rank:4}],
                    starred: false
                },
                {
                    id:3,
                    title: "LAW4112 meetup",
                    time: '20:30',
                    date: 'Sat 7 Apr',
                    location: 'Central 3 Theatre',
                    going: 43,
                    skills:[{skill:"C", rank:4}],
                    starred: false
                },
                {
                    id:4,
                    title: 'MBA5530 meetup',
                    time: '20:30',
                    date: 'Sat 7 Apr',
                    location: 'Central 4 Theatre',
                    going: 4,
                    skills:[{skill:"Python", rank:5}],
                    starred: false
                },
                {
                    id:5,
                    title: 'ACW3041 meetup',
                    time: '21:00',
                    date: 'Sat 7 Apr',
                    location: 'Central 5 Theatre',
                    going: 29,
                    skills:[{skill:"React Native", rank:1},{skill:"JS", rank:1}],
                    starred: false
                },
                {
                    id:6,
                    title: 'FIT3077 meetup',
                    time: '21:30',
                    date: 'Sat 8 Apr',
                    location: 'Central 6 Theatre',
                    going: 72,
                    skills:[{skill:"React", rank:1}, {skill:"JS", rank:1}],
                    starred: false
                },
                {
                    id:7,
                    title: 'ATS3147 meetup',
                    date: 'Sat 9 Apr',
                    time: '22:00',
                    location: 'Central 7 Theatre',
                    going: 65,
                    skills:[{skill:"C++", rank:3}],
                    starred: false
                },
                {
                    id:8,
                    title: 'AMU1277 meetup',
                    time: '22:30',
                    date: 'Sat 10 Apr',
                    location: 'Central 8 Theatre',
                    going: 25,
                    skills:[{skill:"PHP", rank:2}],
                    starred: false
                },
                {
                    id:9,
                    title: 'GLS3215 meetup',
                    time: '23:00',
                    date: 'Sat 11 Apr',
                    location: 'Central 9 Theatre',
                    going: 54,
                    skills:[{skill:"C", rank:3}],
                    starred: false
                },
                {
                    id:10,
                    title: 'DIS2906 meetup',
                    time: '23:30',
                    date: 'Sat 11 Apr',
                    location: 'Central 10 Theatre',
                    going: 13,
                    skills:[{skill:"Ruby", rank:3}],
                    starred: false
                },
            ],
            sport: [
                {
                    id:1,
                    title: 'Golf',
                    date: 'Sat 6 Apr',
                    time: '19:30',
                    location: 'Central 1 Theatre',
                    going: 30,
                    skills:[{skill:"java", rank:1}],
                    starred: false
                },
                {
                    id:2,
                    title: 'Chess',
                    date: 'Sat 6 Apr',
                    time: '20:00',
                    location: 'Central 2 Theatre',
                    going: 35,
                    skills:[{skill:"Programming", rank:4}],
                    starred: false
                },
                {
                    id:3,
                    title: "Football",
                    time: '20:30',
                    date: 'Sat 7 Apr',
                    location: 'Central 3 Theatre',
                    going: 43,
                    skills:[{skill:"C", rank:4}],
                    starred: false
                },
                {
                    id:4,
                    title: 'Basketball',
                    time: '20:30',
                    date: 'Sat 7 Apr',
                    location: 'Central 4 Theatre',
                    going: 4,
                    skills:[{skill:"Python", rank:5}],
                    starred: false
                },
                {
                    id:5,
                    title: 'Swimming',
                    time: '21:00',
                    date: 'Sat 7 Apr',
                    location: 'Central 5 Theatre',
                    going: 29,
                    skills:[{skill:"React Native", rank:1},{skill:"JS", rank:1}],
                    starred: false
                },
                {
                    id:6,
                    title: 'Horseback riding',
                    time: '21:30',
                    date: 'Sat 8 Apr',
                    location: 'Central 6 Theatre',
                    going: 72,
                    skills:[{skill:"React", rank:1}, {skill:"JS", rank:1}],
                    starred: false
                },
                {
                    id:7,
                    title: 'Archery',
                    date: 'Sat 9 Apr',
                    time: '22:00',
                    location: 'Central 7 Theatre',
                    going: 65,
                    skills:[{skill:"C++", rank:3}],
                    starred: false
                },
                {
                    id:8,
                    title: 'Baseball',
                    time: '22:30',
                    date: 'Sat 10 Apr',
                    location: 'Central 8 Theatre',
                    going: 25,
                    skills:[{skill:"PHP", rank:2}],
                    starred: false
                },
                {
                    id:9,
                    title: 'Soccer',
                    time: '23:00',
                    date: 'Sat 11 Apr',
                    location: 'Central 9 Theatre',
                    going: 54,
                    skills:[{skill:"C", rank:3}],
                    starred: false
                },
                {
                    id:10,
                    title: 'Curling',
                    time: '23:30',
                    date: 'Sat 11 Apr',
                    location: 'Central 10 Theatre',
                    going: 13,
                    skills:[{skill:"Ruby", rank:3}],
                    starred: false
                },
            ],
            business: [
                {
                    id:1,
                    title: 'Ideation',
                    date: 'Sat 6 Apr',
                    time: '19:30',
                    location: 'Central 1 Theatre',
                    going: 30,
                    skills:[{skill:"java", rank:1}],
                    starred: false
                },
                {
                    id:2,
                    title: 'Entrepreneurial Skills',
                    date: 'Sat 6 Apr',
                    time: '20:00',
                    location: 'Central 2 Theatre',
                    going: 35,
                    skills:[{skill:"Programming", rank:4}],
                    starred: false
                },
                {
                    id:3,
                    title: "Startup ideas",
                    time: '20:30',
                    date: 'Sat 7 Apr',
                    location: 'Central 3 Theatre',
                    going: 43,
                    skills:[{skill:"C", rank:4}],
                    starred: false
                },
                {
                    id:4,
                    title: 'Fake it till you make it',
                    time: '20:30',
                    date: 'Sat 7 Apr',
                    location: 'Central 4 Theatre',
                    going: 4,
                    skills:[{skill:"Python", rank:5}],
                    starred: false
                },
                {
                    id:5,
                    title: 'Capital raising',
                    time: '21:00',
                    date: 'Sat 7 Apr',
                    location: 'Central 5 Theatre',
                    going: 29,
                    skills:[{skill:"React Native", rank:1},{skill:"JS", rank:1}],
                    starred: false
                },
                {
                    id:6,
                    title: 'Budget management',
                    time: '21:30',
                    date: 'Sat 8 Apr',
                    location: 'Central 6 Theatre',
                    going: 72,
                    skills:[{skill:"React", rank:1}, {skill:"JS", rank:1}],
                    starred: false
                },
                {
                    id:7,
                    title: 'HR management',
                    date: 'Sat 9 Apr',
                    time: '22:00',
                    location: 'Central 7 Theatre',
                    going: 65,
                    skills:[{skill:"C++", rank:3}],
                    starred: false
                },
                {
                    id:8,
                    title: 'TED Talk by Tim Appple',
                    time: '22:30',
                    date: 'Sat 10 Apr',
                    location: 'Central 8 Theatre',
                    going: 25,
                    skills:[{skill:"PHP", rank:2}],
                    starred: false
                },
                {
                    id:9,
                    title: 'The Art of the Deal',
                    time: '23:00',
                    date: 'Sat 11 Apr',
                    location: 'Central 9 Theatre',
                    going: 54,
                    skills:[{skill:"C", rank:3}],
                    starred: false
                },
                {
                    id:10,
                    title: 'Trends in Business',
                    time: '23:30',
                    date: 'Sat 11 Apr',
                    location: 'Central 10 Theatre',
                    going: 13,
                    skills:[{skill:"Ruby", rank:3}],
                    starred: false
                },
            ],
            health: [
                {
                    id:1,
                    title: 'Go Vegan',
                    date: 'Sat 6 Apr',
                    time: '19:30',
                    location: 'Central 1 Theatre',
                    going: 30,
                    skills:[{skill:"java", rank:1}],
                    starred: false
                },
                {
                    id:2,
                    title: 'Meal prep',
                    date: 'Sat 6 Apr',
                    time: '20:00',
                    location: 'Central 2 Theatre',
                    going: 35,
                    skills:[{skill:"Programming", rank:4}],
                    starred: false
                },
                {
                    id:3,
                    title: "Debunking the food plate myth",
                    time: '20:30',
                    date: 'Sat 7 Apr',
                    location: 'Central 3 Theatre',
                    going: 43,
                    skills:[{skill:"C", rank:4}],
                    starred: false
                },
                {
                    id:4,
                    title: 'Alcoholics Anonymous',
                    time: '20:30',
                    date: 'Sat 7 Apr',
                    location: 'Central 4 Theatre',
                    going: 4,
                    skills:[{skill:"Python", rank:5}],
                    starred: false
                },
                {
                    id:5,
                    title: 'Cancer survivors',
                    time: '21:00',
                    date: 'Sat 7 Apr',
                    location: 'Central 5 Theatre',
                    going: 29,
                    skills:[{skill:"React Native", rank:1},{skill:"JS", rank:1}],
                    starred: false
                },
                {
                    id:6,
                    title: 'The importance of exercise',
                    time: '21:30',
                    date: 'Sat 8 Apr',
                    location: 'Central 6 Theatre',
                    going: 72,
                    skills:[{skill:"React", rank:1}, {skill:"JS", rank:1}],
                    starred: false
                },
                {
                    id:7,
                    title: 'Gym buddies',
                    date: 'Sat 9 Apr',
                    time: '22:00',
                    location: 'Central 7 Theatre',
                    going: 65,
                    skills:[{skill:"C++", rank:3}],
                    starred: false
                },
                {
                    id:8,
                    title: 'Cheap pharmacy deals',
                    time: '22:30',
                    date: 'Sat 10 Apr',
                    location: 'Central 8 Theatre',
                    going: 25,
                    skills:[{skill:"PHP", rank:2}],
                    starred: false
                },
                {
                    id:9,
                    title: 'Meal sharing',
                    time: '23:00',
                    date: 'Sat 11 Apr',
                    location: 'Central 9 Theatre',
                    going: 54,
                    skills:[{skill:"C", rank:3}],
                    starred: false
                },
                {
                    id:10,
                    title: 'Trashbag Challenge',
                    time: '23:30',
                    date: 'Sat 11 Apr',
                    location: 'Central 10 Theatre',
                    going: 13,
                    skills:[{skill:"Ruby", rank:3}],
                    starred: false
                },
            ],
            tech: [
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
            ],   
    }
}

const appStore = new AppStore();
export default appStore;
