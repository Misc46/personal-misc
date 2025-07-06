import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full py-4 px-6 flex items-center justify-between bg-transparent z-50">
      <Link href="/" className="text-2xl fugaz-one text-orange-400">
        Misc
      </Link>
      <nav className="flex gap-4 md:gap-6 text-lg md:text-xl font-semibold montserrat-500">
        <Link href="/thoughts" className="hover:text-orange-400 transition">Thoughts</Link>
        <Link href="/projects" className="hover:text-orange-400 transition">Projects</Link>
        <Link href="/contact" className="hover:text-orange-400 transition">Contact</Link>
      </nav>
    </header>
  );
}