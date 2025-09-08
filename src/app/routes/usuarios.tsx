import { useState } from "react";
import { SearchForm } from "@/components/layout/search-form";
import { Button } from "@/components/ui/button";
import {
  Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter,
  DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Eye, Pencil, PlusCircle, Trash } from "lucide-react";

export default function Usuarios() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [cargo, setCargo] = useState('');
  const [usuarios, setUsuarios] = useState<{ nome: string; email: string; empresa: string; cargo: string }[]>([]);

  function addUsuario() {
    setUsuarios([...usuarios, { nome: name, email, empresa, cargo }]);
    setName(''); setEmail(''); setEmpresa(''); setCargo('');
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-5">
        <div>
          <h2 className="text-4xl font-bold text-left">Usuários</h2>
          <p className="mt-2">Relatório de todos os usuários registrados.</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full md:w-auto flex items-center gap-2">
              <PlusCircle className="w-5 h-5" /> <span className="hidden sm:inline">Adicionar Usuário</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Adicionar Usuário</DialogTitle>
              <DialogDescription>Adicione um novo usuário ao sistema.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="nome">Nome</Label>
                <Input id="nome" value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="empresa">Empresa</Label>
                <Select value={empresa} onValueChange={setEmpresa}>
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
              <div className="grid gap-2">
                <Label htmlFor="cargo">Cargo</Label>
                <Select value={cargo} onValueChange={setCargo}>
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
                <Button variant="outline" className="text-red-500">Cancelar</Button>
              </DialogClose>
              <Button type="button" onClick={addUsuario} className="text-green-600">Salvar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="p-5">
        <Table>
          <TableCaption>Lista de usuários registrados no sistema.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>E-mail</TableHead>
              <TableHead>Empresa</TableHead>
              <TableHead>Cargo</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {usuarios.map((u, i) => (
              <TableRow key={i} className="group">
                <TableCell>{u.nome}</TableCell>
                <TableCell>{u.email}</TableCell>
                <TableCell>{u.empresa}</TableCell>
                <TableCell>{u.cargo}</TableCell>
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
  )
}

