import { useState } from 'react';

export default (initialList = []) => {
  const [list, setList] = useState(initialList);

  function add(task) {
    setList([...list, task]);
  }

  function remove(index) {
    setList([
      ...list.slice(0, index),
      ...list.slice(index + 1)
    ]);
  }

  function toggleComplete(index) {
    const newList = [...list];
    newList[index].isDone = !newList[index].isDone;
    setList(newList);
  }

  return {
    list,
    add,
    remove,
    toggleComplete
  };
}
