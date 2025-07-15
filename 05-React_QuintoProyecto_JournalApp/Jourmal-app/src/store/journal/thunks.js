import { setDoc, doc, collection } from "firebase/firestore";
import { FirebaseDB } from "../../firebase/config";
import {
  addNewNote,
  setActiveNote,
  savingNewNote,
  setSaving,
  setNotes,
} from "./journalSlide";
import { loadNote } from "../../helpers/loadNote";
import { updateNote } from "./journalSlide";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote());

    const { uid } = getState().auth;

    if (!uid) {
      console.log("Usuario no autenticado");
      return;
    }

    console.log("startNewNote");

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
      imageUrls: [],
    };

    try {
      const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
      await setDoc(newDoc, newNote);

      newNote.id = newDoc.id;

      // Hacer dispatch para agregar la nueva nota
      dispatch(addNewNote(newNote));

      // Hacer dispatch para activar la nota
      dispatch(setActiveNote(newNote));

      console.log("Nueva nota creada:", newNote);
    } catch (error) {
      console.log("Error al crear la nota:", error);
    }
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) {
      console.log("No hay usuario autenticado");
      return;
    }

    const notes = await loadNote(uid);
    dispatch(setNotes(notes));
  };
};

export const startSaveNote = () => {
  return async (dispatch, getState) => {

    dispatch(setSaving());


    const {uid} = getState().auth
    const {active: note} = getState().journal

    const noteToFirestore = {...note}
    delete noteToFirestore.id;

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    await setDoc(docRef, noteToFirestore, {merge: true});

    dispatch(updateNote(note));
  }
}
