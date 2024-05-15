import Team from "./team";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "./ui/sheet"
import { useEffect, useState } from "react";

const Header = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 768
  return (
    <header className="w-full bg-white border-b border-neutral-300">
      <nav className="mx-auto flex justify-between items-center md:max-w-7xl">
        <a href="/" className="py-1.5 px-3 rounded flex items-center gap-2 hover:bg-neutral-100 duration-300">
          <img src="/logo.svg" alt="Logo" className="w-6" />
          <span className="font-archivo-black text-2xl">JVLF</span>
        </a>

        <div className="flex items-center border-l border-e-neutral-300 h-full">
          <Sheet>
            <SheetTrigger>
              <button className="px-10 py-5" disabled={!isMobile}>
                <img src="/group.svg" alt="ícone de um grupo de pessoas" className="w-7" />
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Grupo</SheetTitle>
                <SheetDescription>
                  Conheça os integrantes do grupo
                </SheetDescription>
              </SheetHeader>
              <ul className="font-medium text-sm text-center space-y-4 py-10">
                <Team />
              </ul>
              <SheetFooter>
                <p className="text-sm text-center text-neutral-400">
                  &copy; Made by &nbsp;
                  <a href="https://github.com/vnxcius/jvlf" className="underline font-medium">
                    Vinícius Hilton
                  </a>
                </p>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          <ul className="items-center gap-5 mr-10 font-medium text-sm invisible hidden md:flex md:visible">
            <Team />
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header