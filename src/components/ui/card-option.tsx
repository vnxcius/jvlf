import { DownloadIcon, EyeIcon } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


type Props = {
  title: string,
  file?: string,
  size?: string,
  disabled?: boolean,
  func: () => void
}

const CardOption = (props: Props) => {
  return (
    <div className={"border rounded-md my-3 px-4 py-1.5 min-w-max w-[350px] flex items-center gap-10 justify-between hover:bg-neutral-100 duration-300 " +
      (props.disabled && "cursor-not-allowed bg-neutral-100 text-neutral-500")
    }>
      <div>
        <p className="text-sm font-medium text-neutral-800">
          {props.title}
          <span className="text-neutral-600 text-xs font-medium ml-3">{props.size}</span></p>
      </div>
      <div className="flex gap-3 items-center">
        <AlertDialog>
          <AlertDialogTrigger title="Baixar" disabled={props.disabled} className={props.disabled ? "cursor-not-allowed p-1" : "p-1"}>
            <DownloadIcon width={16} color={props.disabled ? "#6b7280" : "#2563eb"} />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Tem certeza que quer baixar este arquivo?</AlertDialogTitle>
              <AlertDialogDescription>
                Só pra ter certeza ;&#41;
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction className="bg-blue-600 hover:bg-blue-700">
                <a href={props.file} download={props.file} className="p-1 cursor-pointer">
                  Baixar arquivo
                </a>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <button onClick={props.func} className={props.disabled ? "cursor-not-allowed p-1" : "p-1"} title="Visualizar" disabled={props.disabled}>
          <EyeIcon width={16} color={props.disabled ? "#6b7280" : "#2563eb"} />
        </button>
      </div>
    </div>
  )
}

export default CardOption