"use client"
import { supabase } from "../lib/clientSupabase"
import { useEffect, useState } from "react"

export default function ListaCursos() {

  const [cursos, setCursos] = useState([])
  const fetchCursos = async () => {
    const { data, error } = await supabase.from('cursos').select('*')
    if (error) {
      console.error(error)
    } else {
      console.log(data)
      setCursos(data)
    }

  }

  useEffect(() =>{
    fetchCursos()
  },[])


return (
    <table className="border-2 border-amber-200">
        <thead className="flex gap-1.5">
            <tr>
                <th className="uppercase">Nombre</th>
                <th className="uppercase">Curso</th>
            </tr>
        </thead>

        <tbody>
            {cursos.map(curso => (
                <tr key={curso.id}>
                    <td>{curso.nombre}</td>
                    <td>{curso.horas}</td>
                    <td>{curso.modalidad}</td>
                </tr>
            ))}
        </tbody>
    </table>
)}
