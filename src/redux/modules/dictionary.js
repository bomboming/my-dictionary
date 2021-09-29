// dictionary.js

// Actions(Action type을 설정해 주는 곳)
const CREATE = "dictionary/CREATE";

//초기값 설정
const initialState = {
  list: [
    { word: "단어입니다.", explain: "설명입니다.", example: "예시입니다." },
  ],
};

// Action Creators
export function createWordCard(dictionary) {
  return { type: CREATE, dictionary }; //Action
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "dictionary/CREATE": {
      const new_dictionary = [...state.list, action.dictionary];
      return { ...state, list: new_dictionary };
    }
    // do reducer stuff
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
