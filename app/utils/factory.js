import uuid from 'uuid';

export const getNewCategory = (val) => ({
  id: uuid.v4(),
  category: val,
  notes: {}
});

export const getNewNote = () => ({
  id: uuid.v4(),
  title: 'Untitled',
  date: Date.now(),
  body: ''
});
