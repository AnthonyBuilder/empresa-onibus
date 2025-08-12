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
  const array = [
    { a: "Empresa 1", b: "B1", c: "C1", d: "D1" },
    { a: "Empresa 2", b: "B2", c: "C2", d: "D2" },
    { a: "Empresa 3", b: "B3", c: "C3", d: "D3" },
    { a: "Empresa 4", b: "B4", c: "C4", d: "D4 " },
    { a: "Empresa 5", b: "B5", c: "C5", d: "D5" },
  ];

  return (
    <div>
      <div className="justify-self-start text-left mt-2 p-5 w-full">
        <div className="flex flex-row gap-4 items-center">
          <div className="flex-1">

            <h1 className="text-2xl font-bold">Empresas</h1>
            <p className="mt-2">Relatorio de todas as empresas registradas.</p>
            <Button variant="outline" className="mt-4">Adicionar Empresa</Button>
          </div>
          <SearchForm  className="place-self-start" />
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
            {array.map((element, index) => (
              <TableRow key={index}>
                <TableCell className="pl-20 font-medium text-left">{element.a}</TableCell>
                <TableCell className="text-left">{element.b}</TableCell>
                <TableCell className="text-left">{element.c}</TableCell>
                <TableCell className="text-left">{element.d}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}