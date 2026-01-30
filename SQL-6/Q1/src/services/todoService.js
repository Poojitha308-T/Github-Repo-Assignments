import supabase from '../config/supabaseClient.js';

export const createTodo = (todo) =>
  supabase.from('todos').insert([todo]).select().single();

export const getTodosByUser = (userrId) =>
  supabase.from('todos').select('*').eq('userr_id', userrId);

export const getTodoById = (id) =>
  supabase.from('todos').select('*').eq('id', id).single();

export const updateTodoById = (id, data) =>
  supabase.from('todos').update(data).eq('id', id).select().single();

export const deleteTodoById = (id) =>
  supabase.from('todos').delete().eq('id', id);
