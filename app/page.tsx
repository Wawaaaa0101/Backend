import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { getTodos } from "@/lib/todos";

export default async function TodoPage() {
  const todos = await getTodos();

  return (
    <main className="min-h-screen w-full bg-gray-100 p-8">
      <div className="mx-auto w-full max-w-2xl rounded-xl border border-gray-100 bg-white p-8 shadow-lg">
        <header className="mb-8 border-b pb-4">
          <h1 className="text-center text-3xl font-bold text-gray-800">
            Daftar Tugas (Todo List)
          </h1>
        </header>

        <TodoForm />

        <TodoList todos={todos} />
      </div>
    </main>
  );
}