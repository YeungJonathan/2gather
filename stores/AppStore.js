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
      id: 1,
      title: "Event 1",
      time: "19:30",
      location: "Central 1 Theatre",
      going: 30,
      starred: false
    },
    {
      id: 2,
      title: "Event 2",
      time: "20:00",
      location: "Central 2 Theatre",
      going: 35,
      starred: false
    },
    {
      id: 3,
      title: "Event 3",
      time: "20:30",
      location: "Central 3 Theatre",
      going: 43,
      starred: false
    },
    {
      id: 4,
      title: "Event 4",
      time: "20:30",
      location: "Central 4 Theatre",
      going: 4,
      starred: false
    },
    {
      id: 5,
      title: "Event 5",
      time: "21:00",
      location: "Central 5 Theatre",
      going: 29,
      starred: false
    },
    {
      id: 6,
      title: "Event 6",
      time: "21:30",
      location: "Central 6 Theatre",
      going: 72,
      starred: false
    },
    {
      id: 7,
      title: "Event 7",
      time: "22:00",
      location: "Central 7 Theatre",
      going: 65,
      starred: false
    },
    {
      id: 8,
      title: "Event 8",
      time: "22:30",
      location: "Central 8 Theatre",
      going: 25,
      starred: false
    },
    {
      id: 9,
      title: "Event 9",
      time: "23:00",
      location: "Central 9 Theatre",
      going: 54,
      starred: false
    },
    {
      id: 10,
      title: "Event 10",
      time: "23:30",
      location: "Central 10 Theatre",
      going: 13,
      starred: false
    },
    {
      id: 11,
      title: "Event 11",
      time: "08:30",
      location: "Central 11 Theatre",
      going: 43,
      starred: false
    },
    {
      id: 12,
      title: "Event 12",
      time: "09:30",
      location: "Central 12 Theatre",
      going: 47,
      starred: false
    }
  ];
}

const appStore = new AppStore();
export default appStore;
