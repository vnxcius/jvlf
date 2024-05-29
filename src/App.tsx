import { DialogHeader, Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "./components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./components/ui/carousel"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { Separator } from "./components/ui/separator"
import { useEffect, useState } from "react"
import { Button } from "./components/ui/button"
import CardOption from "./components/ui/card-option"
import Header from "./components/header"
import ViniAbout from "./components/vini_about"

import './App.css'

function App() {
  const [file, setFile] = useState<Files>();
  const [files, setFiles] = useState<Files[]>([]);
  const [people, setPeople] = useState<People[]>([]);

  const render = (param: string) => {
    switch (param) {
      case 'VH':
        return <ViniAbout />
      case 'JS':
        return 'Jéssica Simas'
      case 'LA':
        return 'Lusianna Assunção'
      case 'FM':
        return 'Fabiane Moreno'
    }
  }

  useEffect(() => {
    // Pegar os arquivos disponíveis para download
    fetch('/files.json')
      .then(response => response.json())
      .then(data => setFiles(data))
      .catch(error => console.error('Error loading files.json:', error));

    // Listar informação dos integrantes
    fetch('/group.json')
      .then(response => response.json())
      .then(data => setPeople(data))
      .catch(error => console.error('Error loading group.json:', error));
  }, []);

  return (
    <>
      <Header />
      <section className="mx-auto p-3 md:max-w-6xl">
        <h1 className="text-2xl text-neutral-700 font-bold text-center">Integrantes</h1>
        <h3 className="text-sm text-neutral-500 mb-5 text-center">Clique na imagem para saber mais.</h3>
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          className="w-full max-w-sm md:max-w-2xl lg:max-w-7xl mx-auto"
        >
          <CarouselContent>
            {Array.from(people).map((person) => (
              <CarouselItem key={person.name} className="md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <Card>
                    <CardContent className="p-3 flex flex-col aspect-square items-center justify-center">
                      <Dialog>
                        <DialogTrigger disabled={person.abbreviation == ''}>
                          <img src={person.img} alt={person.name}
                            className="size-56 object-cover object-top rounded-md min-h-72 min-w-72 hover:brightness-90
                            md:min-w-48 md:min-h-48 lg:min-h-56 lg:min-w-[10rem]" />
                          <span className="text-neutral-800 my-2 block hover:underline">{person.name}</span>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Sobre</DialogTitle>
                            <DialogDescription>
                              Conheça mais sobre <span className="text-neutral-800 font-medium">{person.name}</span>
                            </DialogDescription>
                          </DialogHeader>
                          {/* Renderizar o sobre do integrante */}
                          {render(person.abbreviation)}
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section className="mx-auto px-6 pb-52 flex max-md:flex-col gap-4 h-[calc(100vh-63px)]">
        <div className="w-fit mx-auto space-y-3">
          <Card>
            <CardHeader className="py-2 px-6">
              <CardTitle className="text-base">Sobre</CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="max-w-sm mt-2 space-y-3 text-sm text-neutral-800">
              <p>
                Este website tem como objetivo apresentar a proposta
                do{' '}
                <span className="font-semibold text-neutral-900">Plano Diretor de Tecnologia da Informação &#40;PDTI&#41;</span>{' '}
                para o biênio de 2025-26 do Banco do Brasil idealizado
                durante as aulas do curso de GTI da Faculdade Senac DF,
                bem como o{' '}
                <span className="font-semibold text-neutral-900">Plano de Segurança da Informação &#40;PSI&#41;</span>.
              </p>
              <p>
                Os seguintes arquivos estão disponíveis para download:
              </p>
              <ul className="list-disc list-inside">
                {files.map(file => (
                  <li key={file.url}>{file.title}</li>
                ))}
              </ul>
              <p className="text-sm text-center text-neutral-400 invisible hidden md:flex md:visible">
                <span>&copy; Made by &nbsp;</span>
                <a href="https://github.com/vnxcius/jvlf" className="underline font-medium hover:text-blue-500">
                  Vinícius Hilton
                </a>
                <span className="text-xs text-neutral-400 mx-4 self-end">v0.1.6</span>
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardTitle className="text-base py-2 px-6 text-neutral-800">Baixar arquivos</CardTitle>
            <Separator />
            <CardContent>
              {files.map(file => (
                <CardOption
                  key={file.url}
                  slug={file.slug}
                  title={file.title}
                  file={file.url}
                  size={file.size}
                  func={() => { setFile(file); location.href = "#pdf" }}
                />
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="w-full min-h-[calc(100vh-110px)] flex flex-col bg-white shadow-sm border p-3 rounded-lg">
          {file ? (
            <>
              <h2 className="text-sm text-center font-medium mb-3">{file.title}</h2>
              <a href={'/visualizar-arquivo/' + file.slug} target="_blank" className="w-fit mx-auto mb-3">
                <Button>Visualizar em tela cheia</Button>
              </a>

              <iframe title={file.title} src={file.url} id="pdf" className="w-full h-full rounded-md border shadow-sm" allowFullScreen></iframe>
              <Button variant="outline" className="mt-3 w-fit mx-auto" onClick={() => setFile(undefined)}>
                Fechar arquivo
              </Button>
            </>
          ) : (
            <p className="text-center flex flex-col self-center justify-center h-full text-neutral-500">
              Selecione um arquivo ao lado para visualizar
            </p>
          )}
        </div>
      </section>
    </>
  )
}

export default App
