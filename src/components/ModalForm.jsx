import React from "react";

export default function ModalForm({ isOpen, onClose, courseName }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-96 shadow-xl relative">
        
        <h2 className="text-2xl font-bold mb-4 text-center">
          Записаться на курс: {courseName}
        </h2>

        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Имя"
            className="border p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Фамилия"
            className="border p-2 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded-md"
          />
          <input
            type="tel"
            placeholder="Номер телефона"
            className="border p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Адрес"
            className="border p-2 rounded-md"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Отправить
          </button>
        </form>

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
