const SurveyData = [
  {
    title: "Form/Survey 1",
    due: "June 2, 2023",
    questions: [
      {
        type: "radio",
        question: "Question questions question question question (Select one)",
        options: ["Option a", "Option b", "Option c", "Option d"],
      },
      {
        type: "radio",
        question: "Question questions question question question (Select one)",
        options: ["Option a", "Option b", "Option c", "Option d"],
      },
      {
        type: "radio",
        question: "Question questions question question question (Select one)",
        options: ["Option a", "Option b", "Option c", "Option d"],
      },
      {
        type: "scale",
        question:
          "Question questions question question question (Rate from 1 to 5)",
        options: ["1", "2", "3", "4", "5"],
      },
    ],
  },
  {
    title: "Form/Survey 1",
    due: "May 2, 2023",
    questions: [
      {
        type: "checkbox",
        question: "Question questions question question question (Select one)",
        options: ["Option a", "Option b", "Option c", "Option d"],
      },
    ],
  },
];

export default SurveyData;
