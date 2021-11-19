// dictionary.js
import { db } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// Actions(Action type을 설정해 주는 곳)
const LOAD = "LOAD";
const CREATE = "CREATE";
const UPDATE = "UPDATE";
const REMOVE = "REMOVE";

//초기값 설정
const initialState = {
  list: [],
};

// Action Creators
export function loadWordCard(dictionary_list) {
  return { type: LOAD, dictionary_list };
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

// 미들웨어
export const loadDictionaryFB = () => {
  return async function (dispatch) {
    const dictionary_data = await getDocs(collection(db, "dictionary"));
    const dictionary_list = [];
    dictionary_data.forEach((dictionary) => {
      dictionary_list.push({ id: dictionary.id, ...dictionary.data() });
    });
    // console.log(dictionary_list);
    dispatch(loadWordCard(dictionary_list));
  };
};

export const addDictionaryFB = (wordCard) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "dictionary"), wordCard);
    const dictionary_data = { id: docRef.id, ...wordCard };
    // console.log(dictionary_data);
    dispatch(createWordCard(dictionary_data));
  };
};

export const updateDictionaryFB = (dictionary_id) => {
  return async function (dispatch) {
    const docRef = doc(db, "dictionary", dictionary_id);
    await updateDoc(docRef);
    console.log("아이디", dictionary_id);
    // dispatch(createWordCard(dictionary_data));
  };
};

export const deleteDictionaryFB = (dictionary_id) => {
  return async function (dispatch, getState) {
    if (!dictionary_id) {
      window.alert("아이디가 없네요!");
      return;
    }
    const docRef = doc(db, "dictionary", dictionary_id);
    await deleteDoc(docRef);

    const _dictionary_list = getState().dictionary.list;
    const dictionary_index = _dictionary_list.findIndex((b) => {
      return b.id === dictionary_id;
    });

    dispatch(removeWordCard(dictionary_index));
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "LOAD":
      return { list: action.dictionary_list };

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

//action creator export
const actionCreators = {
  loadWordCard,
  createWordCard,
  updateWordCard,
  removeWordCard,
  loadDictionaryFB,
  addDictionaryFB,
  // updateDictionaryFB,
  deleteDictionaryFB,
};

export { actionCreators };
