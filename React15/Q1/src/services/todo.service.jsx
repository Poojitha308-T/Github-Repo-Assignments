import { getDatabase, ref, set, push, get, remove, update } from "firebase/database";
import { db } from "../firebase"; // your firebase config

export const getTodos = async (uid) => {
  const snapshot = await get(ref(db, `todos/${uid}`));
  return snapshot.val() ? Object.entries(snapshot.val()).map(([id, val]) => ({ id, ...val })) : [];
};

export const createTodo = async (uid, todo) => {
  const todoRef = push(ref(db, `todos/${uid}`));
  await set(todoRef, todo);
  return { id: todoRef.key, ...todo };
};

export const toggleTodo = async (uid, id, completed) => {
  await update(ref(db, `todos/${uid}/${id}`), { completed });
};

export const deleteTodo = async (uid, id) => {
  await remove(ref(db, `todos/${uid}/${id}`));
};