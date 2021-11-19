// dictionary.js

// Actions(Action type을 설정해 주는 곳)
const LOAD = "LOAD";
const CREATE = "CREATE";
const UPDATE = "UPDATE";
const REMOVE = "REMOVE";

//초기값 설정
const initialState = {
  list: [
    // {
    //   id: 0,
    //   word: "단어입니다.",
    //   explain: "설명입니다.",
    //   example: "예시입니다.",
    // },
  ],
};

// Action Creators
export function loadWordCard(dictionary) {
  return { type: LOAD, dictionary };
}

export function createWordCard(dictionary) {
  return { type: CREATE, dictionary };
}

export function updateWordCard(dictionary) {
  return { type: UPDATE, dictionary };
}

export function removeWordCard(dictionary_index) {
  return { type: REMOVE, dictionary_index };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "LOAD":
      return state;

    case "CREATE": {
      const new_dictionary = [...state.list, action.dictionary];
      return { list: new_dictionary };
    }

    // case "UPDATE": {
    //   const new_dictionary = [...state.list, action.dictionary];
    //   return { list: new_dictionary };
    // }

    case "REMOVE": {
      const new_dictionary = state.list.filter((l, idx) => {
        return action.dictionary_index !== idx;
      });

      return { list: new_dictionary };
    }

    default:
      return state;
  }
}

// 미들웨어
// export const loadDictionaryFB = () => {
//   return async function (dispatch) {
//     const dictionary_data = await getDocs(collection(db, “dictionary”));
//     let dictionary_list = [];
//     dictionary_data.forEach((dictionary) => {
//       dictionary_list.push({ ...dictionary.data() });
//     });
//     console.log(dictionary_list);
//     dispatch(loadDictionary(dictionary_list));
//   };
// };
// export const addDictionaryFB = (dictionary_list) => {
//   return async function (dispatch) {
//     const dictionary_db = await addDoc(
//       collection(db, “dictionary”),
//       dictionary_list
//     );
//     console.log(dictionary_list);
//   };
// };

//action creator export
const actionCreators = {
  loadWordCard,
  createWordCard,
  updateWordCard,
  removeWordCard,
};

export { actionCreators };
