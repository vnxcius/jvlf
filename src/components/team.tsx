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
    </>
  )
}

export default Team