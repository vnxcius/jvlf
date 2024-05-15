import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-neutral-300">
      <nav className="mx-auto flex justify-between items-center md:max-w-7xl">
        <a href="/" className="py-1.5 px-3 rounded flex items-center gap-2 hover:bg-neutral-100 duration-300">
          <img src="/logo.svg" alt="Logo" className="w-6"/>
          <span className="font-archivo-black text-2xl">JVLF</span>
        </a>

        <div className="flex items-center border-l border-e-neutral-300 h-full py-5">
          <img src="/group.svg" alt="ícone de um grupo de pessoas" className="w-7 mx-10" />
          
          <ul className="items-center gap-5 mr-10 font-medium text-sm invisible hidden md:flex md:visible">
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="hover:underline underline-offset-2">
                  Jéssica
                </DropdownMenuTrigger>
                <DropdownMenuContent className="text-center">
                  <DropdownMenuLabel>Contatos</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-neutral-300" />
                  <DropdownMenuItem className="cursor-pointer">
                    <a href="https://www.linkedin.com">Linkedin</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="hover:underline underline-offset-2">
                  Vinícius
                </DropdownMenuTrigger>
                <DropdownMenuContent className="text-center">
                  <DropdownMenuLabel>Contatos</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-neutral-300" />
                  <DropdownMenuItem className="cursor-pointer">
                    <a href="https://www.linkedin.com">Linkedin</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <a href="https://www.linkedin.com">Portfólio</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <a href="https://www.linkedin.com">Github</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="hover:underline underline-offset-2">
                  Lusianna
                </DropdownMenuTrigger>
                <DropdownMenuContent className="text-center">
                  <DropdownMenuLabel>Contatos</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-neutral-300" />
                  <DropdownMenuItem className="cursor-pointer">
                    <a href="https://www.linkedin.com">Linkedin</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="hover:underline underline-offset-2">
                  Fabiane
                </DropdownMenuTrigger>
                <DropdownMenuContent className="text-center">
                  <DropdownMenuLabel>Contatos</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-neutral-300" />
                  <DropdownMenuItem className="cursor-pointer">
                    <a href="https://www.linkedin.com">Linkedin</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header