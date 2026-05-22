import { supabase } from "@/app/utils/supabase/client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
export const useCursosStorage = create(persist(set => ({
    tareas: [],
    loading: false,
    fetchCursos: async () => {
        set({ loading: true })

        const { data, error } = await supabase.from("cursos").select("*")
        if (error) {
            console.error(error)
            set({ loading: false })
            return
        }
        set({
            loading: false,
            cursos: data
        })
    },
    eliminarCursos: async (cursoId) => {
        set({ loading: true })
        const { error } = await supabase.from("cursos").delete().eq("id", cursoId)
        if (error) {
            console.error(error)
            set({ loading: false })
            return
        }
    }
}),
    { name: "cursos" }
))