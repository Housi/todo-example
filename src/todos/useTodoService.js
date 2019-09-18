import { useState, useEffect } from "react";
import store from "store";
import Todo from "./Todo";

function useTodoService() {
  const initialState = store.get("todos") ? store.get("todos") : [];

  const [items, setItems] = useState(initialState);

  useEffect(() => {
    store.set("todos", items);
  }, [items]);

  const utils = {
    search: value => item => item["name"].contains(value),
    byStatus: value => item => item["status"] === value,
    exclude: value => item => item["id"] !== value
  };

  const updateStatus = item => (item.isDone = !item.isDone);
  const updateName = (item, newName) => (item.name = item.newName);

  const update = (_id, updateFn, args) =>
    items.map(item => {
      if (item.id === _id) updateFn(item, { args });
      return item;
    });

  const query = (type, query) => items.filter(utils[type](query));

  const add = name =>
    setItems(items => [...items, new Todo(name, items.length)]);

  const toggleDone = _id => setItems(update(_id, updateStatus));

  const edit = (_id, newName) => setItems(update(_id, updateName, newName));

  const remove = id => setItems(items => items.filter(utils.exclude(id)));

  return { items, query, add, toggleDone, edit, remove };
}

export default useTodoService;
