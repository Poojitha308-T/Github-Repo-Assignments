import supabase from '../config/supabaseClient.js';

export const findByEmail = async (email) => {
  return await supabase
    .from('userss')
    .select('*')
    .eq('email', email)
    .single();
};

export const createUser = async (user) => {
  return await supabase
    .from('userss')
    .insert([user])
    .select()
    .single();
};

export const getAllUsers = async () => {
  return await supabase
  .from('userss')
  .select('*');
};

export const getUserById = async (id) => {
  return await supabase
    .from('userss')
    .select('*')
    .eq('id', id)
    .single();
};

export const updateUser = async (id, data) => {
  return await supabase
    .from('userss')
    .update(data)
    .eq('id', id)
    .select()
    .single();
};

export const deleteUser = async (id) => {
  return await supabase
  .from('userss')
  .delete()
  .eq('id', id);
};
