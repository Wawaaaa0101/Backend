import React from "react";
import Link from "next/link";
import type { Todo } from "../../../../types/todo";

type TaskDetailCardProps = {
  todo: Todo;
};

export default function TaskDetailCard({ todo }: TaskDetailCardProps) {
  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Detail Tugas
        </h1>

        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">ID</p>
            <p className="text-gray-800">{todo.id}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Judul</p>
            <p className="text-lg font-semibold text-gray-800">
              {todo.title}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Deskripsi</p>
            <p className="text-gray-700">{todo.description}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Status</p>
            <p
              className={
                todo.completed
                  ? "text-green-600 font-medium"
                  : "text-yellow-600 font-medium"
              }
            >
              {todo.completed ? "Selesai" : "Belum Selesai"}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Tanggal Dibuat</p>
            <p className="text-gray-700">{todo.createdAt}</p>
          </div>
        </div>

        <div className="mt-6">
          <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition-colors"
          >
            ← Kembali ke Daftar Tugas
          </Link>
        </div>
      </div>
    </main>
  );
}