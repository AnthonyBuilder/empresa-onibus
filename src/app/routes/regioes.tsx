import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table';
import {
  Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter,
  DialogHeader, DialogTitle, DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlusCircle, Eye, Pencil, Trash } from 'lucide-react';

const Regioes = () => {
  const [nome, setNome] = useState('');
  const [regioes, setRegioes] = useState<{ nome: string }[]>([]);

  function addRegiao() {
    setRegioes([...regioes, { nome }]);
    setNome('');
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-5">
        <div>
          <h2 className="text-4xl font-bold text-left">Regiões</h2>
          <p className="mt-2">Relatório de todas as regiões registradas.</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full md:w-auto flex items-center gap-2">
              <PlusCircle className="w-5 h-5" />
              <span className="hidden sm:inline">Adicionar Região</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Adicionar Região</DialogTitle>
              <DialogDescription>Adicione uma nova região ao sistema.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="nome">Nome</Label>
                <Input id="nome" value={nome} onChange={e => setNome(e.target.value)} />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" className="text-red-500">Cancelar</Button>
              </DialogClose>
              <Button type="button" onClick={addRegiao} className="text-green-600">Salvar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="p-5">
        <Table>
          <TableCaption>Lista de regiões registradas no sistema.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {regioes.map((e, i) => (
              <TableRow key={i} className="group">
                <TableCell>{e.nome}</TableCell>
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
};


export default Regioes;