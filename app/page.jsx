import Link from "next/link";
export default function Home() {
  return (
    <div className="flex  flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Link href="listaCursos" className="underline text-center hover:text-blue-600">Lista cursos</Link>
      <Link href="formulario" className="underline text-center hover:text-blue-600">Formulario</Link>
    </div>
  );
}
