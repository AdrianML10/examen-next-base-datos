"use client"
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
export default function TaskForm() {
    const [formData, setFormData] = useState({
        titulo: "",
        descripcion: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Nuevo curso:", formData);

        const { data, error } = await supabase
            .from("cursos")
            .insert({
                nombre: formData.nombre,
                modalidad: formData.modalidad,
            });

        if (error) {
            console.log(error);
        } else {
            console.log(data);
        }

        setFormData({
            titulo: "",
            descripcion: "",
        });
    };
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md">
            <input
                type="text"
                name="titulo"
                placeholder="Título"
                value={formData.titulo}
                onChange={handleChange}
                className="border p-2 rounded"
                required
            />

            <textarea
                name="descripcion"
                placeholder="Descripción"
                value={formData.descripcion}
                onChange={handleChange}
                className="border p-2 rounded"
                rows={4}
                required
            />

            <button
                type="submit"
                className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
                Añadir curso
            </button>

            <button
                onClick={() => eliminarCursos(t.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg text-sm transition-colors"
            >
                Eliminar curso
            </button>
        </form>
    )
}
