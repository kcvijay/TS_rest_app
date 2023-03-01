"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = __importDefault(require("../models/todo"));
// const TODOS: Todo[] = []; ** Used for local, without Mongodb
const createTodo = async (req, res, next) => {
    //   const text = req.body.text;
    try {
        const data = req.body;
        console.log("Data", data);
        let todos = await todo_1.default.create(data);
        return res.status(201).json({ message: "Create the todo", data: todos });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
    //   const text = (req.body as { text: string }).text;
    //   const newTodo = new Todo(Math.random().toString(), text);
    //   TODOS.push(newTodo);** Used for local, without Mongodb
};
exports.createTodo = createTodo;
const getTodos = async (req, res, next) => {
    try {
        let todos = await todo_1.default.find({});
        return res.status(200).json({ message: "All todos", data: todos });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
    //   res.json({ todos: TODOS });
};
exports.getTodos = getTodos;
const updateTodo = async (req, res, next) => {
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
        let todos = await todo_1.default.findByIdAndUpdate(id, req.body, { new: true });
        return res
            .status(200)
            .json({ message: "Todo updated succcessfully!", data: todos });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
exports.updateTodo = updateTodo;
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
