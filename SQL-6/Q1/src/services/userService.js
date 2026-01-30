import supabase from '../config/supabaseClient.js';

export const findUserByEmail = (email) =>
  supabase
.from('userrs')
.select('*')
.eq('email', email)
.single();

export const createUser = (user) =>
  supabase
.from('userrs')
.insert([user])
.select()
.single();

export const findUserById = (id) =>
  supabase
.from('userrs')
.select('*')
.eq('id', id)
.single();

export const deleteUserById = (id) =>
  supabase
.from('userrs')
.delete()
.eq('id', id);
