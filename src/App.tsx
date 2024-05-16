import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { Separator } from "./components/ui/separator"
import { useEffect, useState } from "react"
import { Button } from "./components/ui/button"
import CardOption from "./components/ui/card-option"
import Header from "./components/header"

import './App.css'

type Files = {
  title: string,
  url: string,
  size: string,
  type: string,
}

function App() {
  const [file, setFile] = useState<Files>()
  const [files, setFiles] = useState<Files[]>([])

  useEffect(() => {
    fetch('/files.json')
      .then(response => response.json())
      .then(data => setFiles(data))
      .catch(error => console.error('Error loading the files:', error));
  }, []);

  return (
    <>
      <Header />
      <section className="mx-auto p-3 flex max-md:flex-col gap-4 h-[calc(100vh-63px)] overflow-auto">
        <div className="w-fit mx-auto space-y-3">
          <Card>
            <CardHeader className="py-2 px-6">
              <CardTitle className="text-base">Sobre</CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="max-w-96 mt-2 space-y-3 text-sm text-neutral-800">
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
                <span className="text-xs text-neutral-400 mx-4 self-end">v0.1.4</span>
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
