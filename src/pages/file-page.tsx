import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const FilePage = () => {
  const [file, setFile] = useState<Files>()
  const { slug } = useParams()

  useEffect(() => {
    fetch('/files.json')
      .then(response => response.json())
      .then(data => setFile(data.find((file: Files) => file.slug === slug)))
      .catch(error => console.error('Error loading files.json:', error));
  }, [])

  return (
    <div className="h-screen">
      {file ? (
          <iframe title={file.title} src={file.url} id="pdf" className="w-full h-full rounded-md border shadow-sm" allowFullScreen></iframe>
      ) : (
        <p className="text-center flex flex-col self-center justify-center h-full text-neutral-500">
          Selecione um arquivo ao lado para visualizar
        </p>
      )}
    </div>
  )
}

export default FilePage