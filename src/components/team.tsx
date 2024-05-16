import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

const Team = () => {
  return (
    <>
      <li>
        <DropdownMenu>
          <DropdownMenuTrigger className="hover:underline underline-offset-2">
            Jéssica
          </DropdownMenuTrigger>
          <DropdownMenuContent className="text-center font-inter">
            <DropdownMenuLabel>Contatos</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-neutral-300" />
            <a href="https://www.linkedin.com/in/j%C3%A9ssica-simas-84322059/" target="_blank" referrerPolicy="no-referrer">
              <DropdownMenuItem className="cursor-pointer">
                Linkedin
              </DropdownMenuItem>
            </a>
          </DropdownMenuContent>
        </DropdownMenu>
      </li>
      <li>
        <DropdownMenu>
          <DropdownMenuTrigger className="hover:underline underline-offset-2">
            Vinícius
          </DropdownMenuTrigger>
          <DropdownMenuContent className="text-center font-inter">
            <DropdownMenuLabel>Contatos</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-neutral-300" />
            <a href="https://www.linkedin.com/in/vinicius-simon-gouveia-hilton" target="_blank" referrerPolicy="no-referrer">
              <DropdownMenuItem className="cursor-pointer">
                Linkedin
              </DropdownMenuItem>
            </a>
            <a href="https://vinisimon.dev" target="_blank" referrerPolicy="no-referrer">
              <DropdownMenuItem className="cursor-pointer">
                Portfólio
              </DropdownMenuItem>
            </a>
            <a href="https://github.com/vnxcius" target="_blank" referrerPolicy="no-referrer">
              <DropdownMenuItem className="cursor-pointer">
                Github
              </DropdownMenuItem>
            </a>
          </DropdownMenuContent>
        </DropdownMenu>
      </li>
      <li>
        <DropdownMenu>
          <DropdownMenuTrigger className="hover:underline underline-offset-2">
            Lusianna
          </DropdownMenuTrigger>
          <DropdownMenuContent className="text-center font-inter">
            <DropdownMenuLabel>Contatos</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-neutral-300" />
            <a href="https://www.linkedin.com/in/lusianna-assun%C3%A7%C3%A3o-27a595143/" target="_blank" referrerPolicy="no-referrer">
              <DropdownMenuItem className="cursor-pointer">
                Linkedin
              </DropdownMenuItem>
            </a>
          </DropdownMenuContent>
        </DropdownMenu>
      </li>
      <li>
        <DropdownMenu>
          <DropdownMenuTrigger className="hover:underline underline-offset-2">
            Fabiane
          </DropdownMenuTrigger>
          <DropdownMenuContent className="text-center font-inter">
            <DropdownMenuLabel>Contatos</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-neutral-300" />
            <a href="https://www.linkedin.com" target="_blank" referrerPolicy="no-referrer">
              <DropdownMenuItem className="cursor-pointer">
                Linkedin
              </DropdownMenuItem>
            </a>
          </DropdownMenuContent>
        </DropdownMenu>
      </li>
    </>
  )
}

export default Team