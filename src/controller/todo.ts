import { RequestHandler } from "express";
import Todo, { TodoModel } from "../models/todo";

// const TODOS: Todo[] = []; ** Used for local, without Mongodb

export const createTodo: RequestHandler = async (req, res, next) => {
  //   const text = req.body.text;

  try {
    const data: TodoModel = req.body;
    console.log("Data", data);
    let todos = await Todo.create(data);
    return res.status(201).json({ message: "Create the todo", data: todos });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
  //   const text = (req.body as { text: string }).text;
  //   const newTodo = new Todo(Math.random().toString(), text);
  //   TODOS.push(newTodo);** Used for local, without Mongodb
};

export const getTodos: RequestHandler = async (req, res, next) => {
  try {
    let todos = await Todo.find({});
    return res.status(200).json({ message: "All todos", data: todos });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
  //   res.json({ todos: TODOS });
};

export const updateTodo: RequestHandler<{ id: string }> = async (
  req,
  res,
  next
) => {
  //   const todoId = req.params.id;
  //   const updatedText = (req.body as { text: string }).text;
  //   const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

  //   if (todoIndex < 0) {
  //     throw new Error("Could not find todo!");
  //   }

  //   TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);
  //   res.json({ message: "Updated", updateTodo: TODOS[todoIndex] });

  try {
    const { id } = req.params;
    let todos = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    return res
      .status(200)
      .json({ message: "Todo updated succcessfully!", data: todos });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

// export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
//   const todoId = req.params.id;
//   const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

//   if (todoIndex) {
//     TODOS.splice(todoIndex, 1);
//   } else {
//     throw new Error("Could not delete todo!");
//   }
//   res.json({ message: "Todo deleted" });
// };
