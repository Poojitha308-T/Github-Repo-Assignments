const supabase = require('../config/supabase');

exports.createTodo = async (req, res) => {
  const { title } = req.body;
  const userId = req.user.userId;

  const { data, error } = await supabase
    .from('todos')
    .insert([{ title, completed: false, userId }]);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  res.status(201).json(data);
};

exports.getTodos = async (req, res) => {
  const userId = req.user.userId;

  const { data, error } = await supabase
    .from('todos')
    .select('*')
    .eq('userId', userId);

  res.json(data);
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.userId;
  const { title, completed } = req.body;

  const { data: todo } = await supabase
    .from('todos')
    .select('*')
    .eq('id', id)
    .single();

  if (!todo || todo.userId !== userId) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  const { data, error } = await supabase
    .from('todos')
    .update({ title, completed })
    .eq('id', id);

  res.json(data);
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.userId;

  const { data: todo } = await supabase
    .from('todos')
    .select('*')
    .eq('id', id)
    .single();

  if (!todo || todo.userId !== userId) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  await supabase.from('todos').delete().eq('id', id);

  res.status(204).send();
};
