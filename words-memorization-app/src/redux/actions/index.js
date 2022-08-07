import words from "../../apis/words";
import history from "../../history";
import {
  CREATE_WORD,
  FETCH_WORDS,
  FETCH_WORD,
  DELETE_WORD,
  EDIT_WORD,
} from "./types";

export const createWord = (formValues) => async (dispatch) => {
  const response = await words.post("/words", { ...formValues });

  dispatch({ type: CREATE_WORD, payload: response.data });
  history.push("/");
};

export const fetchWords = () => async (dispatch) => {
  const response = await words.get("/words");

  dispatch({ type: FETCH_WORDS, payload: response.data });
};

export const fetchWord = (id) => async (dispatch) => {
  const response = await words.get(`/words/${id}`);

  dispatch({ type: FETCH_WORD, payload: response.data });
};

export const editWord = (id, formValues) => async (dispatch) => {
  const response = await words.put(`/words/${id}`, formValues);

  dispatch({ type: EDIT_WORD, payload: response.data });
  history.push("/");
};

export const deleteWord = (id) => async (dispatch) => {
  await words.delete(`/words/${id}`);

  dispatch({ type: DELETE_WORD, payload: id });
  history.push("/");
};
