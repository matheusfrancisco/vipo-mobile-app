export enum AnswersTypes {
  'ANSWER_REQUEST' = '@recommendations/ANSWER_REQUEST',
  'ANSWER_SUCCESS' = '@recommendations/ANSWER_SUCCESS',
}

export interface Answers {
  likes: Array<string>;
  numberOfPeople: number;
  howMuch: string;
}
