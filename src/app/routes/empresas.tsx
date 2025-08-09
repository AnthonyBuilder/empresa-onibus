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

export default function Empresas() {
  return (
    <div>
      <div className="justify-self-start text-left mt-2 p-5 w-full">
        <div className="flex flex-row gap-4 items-center">
          <div className="flex-1">
            
            <h1 className="text-2xl font-bold">Empresas</h1>
            <p className="mt-2">Relatorio de todas as empresas registradas.</p>
            <Button variant="outline" className="mt-4">Adicionar Empresa</Button>
          </div>
          <SearchForm />
        </div>
      </div>

      <div className="flex-1 p-5">
        <Table>
          <TableCaption>Lista de empresas registradas no sistema.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="pl-20">Cabeçalho A</TableHead>
              <TableHead>Cabeçalho B</TableHead>
              <TableHead>Cabeçalho C</TableHead>
              <TableHead>Cabeçalho D</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="pl-20 font-medium text-left">Cell A</TableCell>
              <TableCell className="text-left">Cell B</TableCell>
              <TableCell className="text-left">Cell C</TableCell>
              <TableCell className="text-left">Cell D</TableCell>
            </TableRow>

             <TableRow>
              <TableCell className="pl-20 font-medium text-left">Cell A</TableCell>
              <TableCell className="text-left">Cell B</TableCell>
              <TableCell className="text-left">Cell C</TableCell>
              <TableCell className="text-left">Cell D</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}