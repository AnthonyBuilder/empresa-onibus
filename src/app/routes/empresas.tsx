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

import { Eye, Pencil, Plus, PlusCircle, Trash } from "lucide-react";


export default function Empresas() {

  const [nameValue, setNameValue] = useState('');
  const [cnpjValue, setCnpjValue] = useState('');

   function nameChangeValue(event: React.ChangeEvent<HTMLInputElement>) {
    setNameValue(event.target.value);
  }

  function cnpjChangeValue(event: React.ChangeEvent<HTMLInputElement>) {
    setCnpjValue(event.target.value);
  }

  const [array, setArray] = useState([
    { a: "Empresa 1", b: "B1", c: "C1", d: "D1" }
  ]);

  function addEmpresa(nome: string, cnpj: string) {
    setArray([
      ...array,
      { a: nome, b: cnpj, c: "C6", d: "D6" },
    ]);
  }


  return (
    <div>
      <div className="justify-self-start text-left mt-2 p-5 w-full">
        <div className="flex flex-row gap-4 items-center">
          <div className="flex-1">
            <h2 className="text-5xl font-bold">Empresas</h2>
            <p className="mt-2">Relatorio de todas as empresas registradas.</p>

            <SearchForm
              className="place-self-start mt-4"
              onChange={(event) => {
                const form = event.target as HTMLFormElement;
                const input = form.querySelector('input[type="search"]') as HTMLInputElement
                const value = input ? input.value.toLowerCase() : '';
                setArray(
                  [...array].filter(
                    (item) =>
                      item.a.toLowerCase().includes(value) ||
                      item.b.toLowerCase().includes(value) ||
                      item.c.toLowerCase().includes(value) ||
                      item.d.toLowerCase().includes(value)
                  )
                );
              }}
            />
          </div>




          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button variant="outline" className="mt-1"><PlusCircle/>Adicionar Empresa</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Adicionar Empresa</DialogTitle>
                  <DialogDescription>
                    Adicione uma nova empresa ao sistema.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="name-1">Nome</Label>
                    <Input id="name-1" name="name" defaultValue="Pedro Duarte" value={nameValue} onChange={nameChangeValue} />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="cnpj">CNPJ</Label>
                    <Input id="cnpj" name="cnpj" value={cnpjValue} onChange={cnpjChangeValue} />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancelar</Button>
                  </DialogClose>
                  <Button type="submit" onClick={() => addEmpresa(nameValue, cnpjValue)}>Salvar</Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
        </div>
      </div>

      {/* tabelas */}
      <div className="flex-1 p-5">
        <Table>
          <TableCaption>Lista de empresas registradas no sistema.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="pl-10">Cabeçalho A</TableHead>
              <TableHead>Cabeçalho B</TableHead>
              <TableHead>Cabeçalho C</TableHead>
              <TableHead>Cabeçalho D</TableHead>
              <TableHead className="pl-15">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {array.map((element, index) => (
              <TableRow key={index} className="group">
                <TableCell className="pl-10 font-medium text-left">{element.a}</TableCell>
                <TableCell className="text-left">{element.b}</TableCell>
                <TableCell className="text-left">{element.c}</TableCell>
                <TableCell className="text-left">{element.d}</TableCell>
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

