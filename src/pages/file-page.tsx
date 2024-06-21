import { Card, CardTitle, CardContent } from "@/components/ui/card"
import CardOption from "@/components/ui/card-option"
import { Separator } from "@/components/ui/separator"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const FilePage = () => {
  const [file, setFile] = useState<Files>()
  const [files, setFiles] = useState<Files[]>([]);
  const { slug } = useParams()

  useEffect(() => {
    fetch('/files.json')
      .then(response => response.json())
      .then(data => setFile(data.find((file: Files) => file.slug === slug)))
      .catch(error => console.error('Error loading files.json:', error));

    fetch('/files.json')
      .then(response => response.json())
      .then(data => setFiles(data))
      .catch(error => console.error('Error loading files.json:', error));
  }, [])

  return (
    <div className="h-screen">
      {file ? (
        <iframe title={file.title} src={file.url} id="pdf" className="w-full h-full rounded-md border shadow-sm" allowFullScreen></iframe>
      ) : (
        <div className="flex flex-col items-center justify-center gap-10 h-full text-neutral-500">
          <div className="space-y-2 text-center">
            <p>404 Not Found</p>
            <h1 className="text-3xl text-neutral-700 font-bold">ARQUIVO NÃO ENCONTRADO</h1>
            <p>Parece que este arquivo não está disponível. Vamos tentar de novo.</p>
          </div>
          <Card>
            <CardTitle className="text-base py-4 px-6 text-neutral-700 font-medium">Arquivos disponíveis para visualização</CardTitle>
            <Separator />
            <CardContent className="pb-10 pt-3 space-y-5">
              {files.map(file => (
                <CardOption
                  key={file.url}
                  slug={file.slug}
                  title={file.title}
                  file={file.url}
                  size={file.size}
                  func={() => { setFile(file); }}
                />
              ))}
            </CardContent>
          </Card>
          
          <div className="flex items-center w-full gap-x-3 shrink-0 sm:w-auto">
            <a href="/"
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-white transition-colors duration-200 bg-neutral-800 rounded-full gap-x-2 sm:w-auto">
              <span>Voltar para Home</span>
            </a>
          </div>
        </div>
        
      )}
    </div>
  )
}

export default FilePage