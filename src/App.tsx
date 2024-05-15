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
      <section className="md:max-w-screen-2xl mx-auto my-4 p-3 font-inter flex max-md:flex-col gap-4 h-[calc(100vh-110px)]">
        <div className="w-fit mx-auto">
          <Card>
            <CardHeader className="p-2 px-6">
              <CardTitle className="text-lg">Baixar arquivos</CardTitle>
            </CardHeader>
            <Separator />
            <CardContent>
              <CardOption title="PDTI Banco do Brasil 2024-26" file="pdti-v0.0.0.pdf" func={() => setFile("pdti-v0.0.0.pdf")} />
              <CardOption title="PSI Banco do Brasil" file="psi.pdf" func={() => setFile("psi.pdf")} disabled />
            </CardContent>
          </Card>
        </div>
        <div className="w-full h-full flex flex-col bg-white shadow-sm border p-3 rounded-lg">
          {file ? (
            <>
              <h2 className="text-sm text-center font-medium mb-3">{file}</h2>
              <iframe src={file} className="w-full h-full rounded-md border shadow-sm" allowFullScreen></iframe>
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
