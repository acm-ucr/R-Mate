const SurveyData = [
  {
    title: "Form/Survey 1",
    due: new Date(6, 2, 2023),
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
        type: "checkbox",
        question: "Question questions question question question (Select one)",
        options: ["Option a", "Option b", "Option c", "Option d"],
      },
    ],
  },
  {
    title: "Form/Survey 1",
    due: new Date(5, 2, 2023),
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
