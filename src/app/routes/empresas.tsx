import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusCircle, Eye, Pencil, Trash } from "lucide-react";

export default function Empresas() {
  const [nome, setNome] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [empresas, setEmpresas] = useState<{ nome: string; cnpj: string }[]>([]);

  function addEmpresa() {
    setEmpresas([...empresas, { nome, cnpj }]);
    setNome("");
    setCnpj("");
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-5">
        <div>
          <h2 className="text-4xl font-bold text-left">Empresas</h2>
          <p className="mt-2">Relatório de todas as empresas registradas.</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full md:w-auto flex items-center gap-2">
              <PlusCircle className="w-5 h-5" />{" "}
              <span className="hidden sm:inline">Adicionar Empresa</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Adicionar Empresa</DialogTitle>
              <DialogDescription>Adicione uma nova empresa ao sistema.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="nome">Nome</Label>
                <Input id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cnpj">CNPJ</Label>
                <Input id="cnpj" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" className="text-red-500">
                  Cancelar
                </Button>
              </DialogClose>
              <Button type="button" onClick={addEmpresa} className="text-green-600">
                Salvar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="p-5">
        <Table>
          <TableCaption>Lista de empresas registradas no sistema.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>CNPJ</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {empresas.map((e, i) => (
              <TableRow key={i} className="group">
                <TableCell>{e.nome}</TableCell>
                <TableCell>{e.cnpj}</TableCell>
                <TableCell>
                  <div className="invisible group-hover:visible flex gap-3 justify-center">
                    <Eye />
                    <Pencil />
                    <Trash />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

