import Header from "./components/header"

import './App.css'
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { Separator } from "./components/ui/separator"
import CardOption from "./components/ui/card-option"
import { useState } from "react"
import { Button } from "./components/ui/button"

function App() {
  const [file, setFile] = useState<string>("")

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
                <li>PDTI</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardTitle className="text-base py-2 px-6 text-neutral-800">Baixar arquivos</CardTitle>
            <Separator />
            <CardContent>
              <CardOption
                title="PDTI Banco do Brasil 2025-26" file="pdti-v0.0.0.pdf" func={() => { setFile("pdti-v0.0.0.pdf"); location.href = "#pdf" }} />
              <CardOption title="PSI Banco do Brasil" file="psi.pdf" func={() => setFile("psi.pdf")} disabled />
            </CardContent>
          </Card>

        </div>
        <div className="w-full min-h-[calc(100vh-110px)] flex flex-col bg-white shadow-sm border p-3 rounded-lg">
          {file ? (
            <>
              <h2 className="text-sm text-center font-medium mb-3">{file}</h2>
              <iframe title={file} src={file} id="pdf" className="w-full h-full rounded-md border shadow-sm" allowFullScreen></iframe>
              <Button variant="outline" className="mt-3 w-fit mx-auto" onClick={() => setFile("")}>
                Fechar arquivo
              </Button>
            </>
          ) : (
            <p className="text-center flex flex-col self-center justify-center h-full text-neutral-500">Selecione um arquivo ao lado para visualizar</p>
          )}
        </div>
      </section>
    </>
  )
}

export default App
