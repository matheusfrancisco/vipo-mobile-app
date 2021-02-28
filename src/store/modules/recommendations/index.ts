import { AnswersTypes } from './types';

const answersQuestion = {
  howMuch: '',
  numberOfPeople: 0,
  likes: Array(),
};

const reducer = (state = answersQuestion, action: any) => {
  switch (action.type) {
    case AnswersTypes.ANSWER_SUCCESS: {
      const { answers } = action.payload;
      return {
        ...state,

        numberOfPeople: answers.numberOfPeople,
        likes: Array(...answers.likes),
        howMuch: answers.howMuch,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
