import { img1, img2, img3, img4, img5, img6 } from "../src/assets/cardimage";

const current = new Date()

const hackData = [
  {
    id: 1,
    image: img1,
    status: "Upcoming",
    level: "Easy",
    title: "Data Science Bootcamp - Graded Datathon",
    description:
      "This is a 3 day long datathon where you will be given a dataset and you have to perform data analysis and build a model to predict the target variable. The top 3 participants will be awarded with cash prizes.",
    startTime: "2022-10-21",
    endTime: "2026-11-07",
  },
  {
    id: 2,
    image: img2,
    status: "Upcoming",
    level: "Medium",
    title: "Data Sprint 72 - Butterfly Identification",
    description:
      "This is a 3 day long datathon where you will be given a dataset and you have to perform data analysis and build a model to predict the target variable. The top 3 participants will be awarded with cash prizes.",
    startTime: "2022-10-29",
    endTime: "2026-11-07",
  },
  {
    id: 3,
    image: img3,
    status: "Active",
    level: "Easy",
    title: "Data Sprint 71 - Weather Recognition",
    description:
      "This is a 3 day long datathon where you will be given a dataset and you have to perform data analysis and build a model to predict the target variable. The top 3 participants will be awarded with cash prizes.",
    startTime: current,
    endTime: "2026-11-07",
  },
  {
    id: 4,
    image: img4,
    status: "Active",
    level: "Medium",
    title: "Data Sprint 70-Airline Passenger Satisfaction",
    description:
      "This is a 3 day long datathon where you will be given a dataset and you have to perform data analysis and build a model to predict the target variable. The top 3 participants will be awarded with cash prizes.",
    startTime: current,
    endTime: "2026-11-07",
  },
  {
    id: 5,
    image: img5,
    status: "Past",
    level: "Hard",
    title: "Engineering Graduates Employment Outcomes",
    description:
      "This is a 3 day long datathon where you will be given a dataset and you have to perform data analysis and build a model to predict the target variable. The top 3 participants will be awarded with cash prizes.",
    startTime: `2022-02-05`,
    endTime: `2022-02-07`,
  },
  {
    id: 6,
    image: img6,
    status: "Past",
    level: "Hard",
    title: "Travel Insurance Claim Prediction",
    description:
      "This is a 3 day long datathon where you will be given a dataset and you have to perform data analysis and build a model to predict the target variable. The top 3 participants will be awarded with cash prizes.",
    startTime: `2022-02-05`,
    endTime: `2022-02-07`,
  },
];

export default hackData;