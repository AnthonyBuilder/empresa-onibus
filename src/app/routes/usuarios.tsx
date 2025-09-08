import { useState } from "react";
import { SearchForm } from "@/components/layout/search-form";
import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

import { Eye, Pencil, Plus, PlusCircle, Trash } from "lucide-react";


export default function Usuarios() {

  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [empresaValue, setEmpresaValue] = useState('');
  const [cargoValue, setCargoValue] = useState('');

  function nameChangeValue(event: React.ChangeEvent<HTMLInputElement>) {
    setNameValue(event.target.value);
  }

  function emailChangeValue(event: React.ChangeEvent<HTMLInputElement>) {
    setEmailValue(event.target.value);
  }

  type Usuarios = { a: string; b: string; c: string };
  const [array, setArray] = useState<Usuarios[]>([]);

  function addUsuario(nome: string, email: string, empresa: string, cargo: string) {
    setArray([
      ...array,
      { a: nome, b: email, c: `${empresa} - ${cargo}` },
    ]);
  }


  return (
    <div>
      <div className="justify-self-start text-left mt-2 p-5 w-full">
        <div className="flex flex-row gap-4 items-center">
          <div className="flex justify-start flex-col items-start mt-5 ml-5">
                <h2 className="text-5xl font-bold">Linhas</h2>
                <p className="mt-2">Relatorio de todas as linhas registradas.</p>
            </div>



            <div className="flex-1 justify-end flex flex-row items-center">    
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button variant="outline" className="mt-1 justify-end"><PlusCircle/>Adicionar Usuario</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Adicionar Usuario</DialogTitle>
                  <DialogDescription>
                    Adicione um novo usuario ao sistema.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="name-1">Nome</Label>
                    <Input id="name-1" name="name" defaultValue="Pedro Duarte" value={nameValue} onChange={nameChangeValue} />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" name="email" value={emailValue} onChange={emailChangeValue} />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="empresa">Empresa</Label>
                    <Select value={empresaValue} onValueChange={setEmpresaValue}>
                      <SelectTrigger id="empresa" className="w-full">
                        <SelectValue placeholder="Selecione a empresa" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Empresa A">Empresa A</SelectItem>
                        <SelectItem value="Empresa B">Empresa B</SelectItem>
                        <SelectItem value="Empresa C">Empresa C</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="cargo">Cargo</Label>
                    <Select value={cargoValue} onValueChange={setCargoValue}>
                      <SelectTrigger id="cargo" className="w-full">
                        <SelectValue placeholder="Selecione o cargo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Administrador">Administrador</SelectItem>
                        <SelectItem value="Gestor">Gestor</SelectItem>
                        <SelectItem value="Motorista">Motorista</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline"><h2 className="text-red-400">Cancelar</h2></Button>
                  </DialogClose>
                  <Button
                    type="button"
                    onClick={() => addUsuario(nameValue, emailValue, empresaValue, cargoValue)}
                  >
                    <h2 className="text-green-400">Salvar</h2>
                  </Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
          </div>
        </div>
      </div>

      {/* tabelas */}
      <div className="flex-1 p-5">
        <Table>
          <TableCaption>Lista de Usuarios registradas no sistema.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="pl-10">Nome</TableHead>
              <TableHead>E-mail</TableHead>
              <TableHead className="">Empresa</TableHead>

              <TableHead className="pl-15">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {array.map((element, index) => (
              <TableRow key={index} className="group">
                <TableCell className="pl-10 font-medium text-left">{element.a}</TableCell>
                <TableCell className="text-left">{element.b}</TableCell>
                <TableCell className="text-left">{element.c}</TableCell>
                <TableCell>
                  <div className="invisible flex text-center flex-row justify-center group-hover:visible">
                    <Eye />
                    <Pencil className="ml-3 mr-3" />
                    <Trash />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

