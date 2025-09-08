import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Pencil } from "lucide-react";

type Linha = {
    codigo: string;
    nome: string;
    operacao: string;
    regiao: string;
};

const operacoes = ["Normal", "Especial", "Noturna"];
const regioes = ["Norte", "Sul", "Leste", "Oeste"];

const initialLinhas: Linha[] = [
    { codigo: "001", nome: "Linha 1", operacao: "Normal", regiao: "Norte" },
    { codigo: "002", nome: "Linha 2", operacao: "Especial", regiao: "Sul" },
    { codigo: "003", nome: "Linha 3", operacao: "Noturna", regiao: "Leste" },
];

export default function Linhas() {
    const [editMode, setEditMode] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [linhas, setLinhas] = useState<Linha[]>(initialLinhas);
    const [draftLinhas, setDraftLinhas] = useState<Linha[]>(initialLinhas);

    function handleEnableEdit() {
        setShowDialog(true);
    }

    function confirmEdit() {
        setEditMode(true);
        setShowDialog(false);
        setDraftLinhas(linhas);
    }

    function handleCancel() {
        setEditMode(false);
        setDraftLinhas(linhas);
    }

    function handleSave() {
        setLinhas(draftLinhas);
        setEditMode(false);
    }

    function handleSelectChange(index: number, field: "operacao" | "regiao", value: string) {
        const updated = draftLinhas.map((linha, i) =>
            i === index ? { ...linha, [field]: value } : linha
        );
        setDraftLinhas(updated);
    }

    return (

        <div>
            <div className="flex justify-start flex-col items-start mt-5 ml-5">
                <h2 className="text-5xl font-bold">Linhas</h2>
                <p className="mt-2">Relatorio de todas as linhas registradas.</p>
            </div>

            <div className="p-6 flex flex-col">

                <div className="flex mt-5 mb-4 justify-end">
                    {!editMode ? (
                        <Button onClick={handleEnableEdit} className=""><Pencil />Habilitar Edição</Button>
                    ) : (
                        <div className="flex gap-2">
                            <Button onClick={handleSave}>Salvar Alterações</Button>
                            <Button variant="outline" onClick={handleCancel}>Cancelar</Button>
                        </div>
                    )}
                </div>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Código</TableHead>
                            <TableHead>Nome</TableHead>
                            <TableHead>Operação</TableHead>
                            <TableHead>Região</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {(editMode ? draftLinhas : linhas).map((linha, idx) => (
                            <TableRow key={linha.codigo}>
                                <TableCell>{linha.codigo}</TableCell>
                                <TableCell>{linha.nome}</TableCell>
                                <TableCell>
                                    <Select
                                        value={linha.operacao}
                                        onValueChange={value => handleSelectChange(idx, "operacao", value)}
                                        disabled={!editMode}
                                    >
                                        <SelectTrigger className="w-32">
                                            <SelectValue placeholder="Selecione" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {operacoes.map(op => (
                                                <SelectItem key={op} value={op}>{op}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </TableCell>
                                <TableCell>
                                    <Select
                                        value={linha.regiao}
                                        onValueChange={value => handleSelectChange(idx, "regiao", value)}
                                        disabled={!editMode}
                                    >
                                        <SelectTrigger className="w-32">
                                            <SelectValue placeholder="Selecione" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {regioes.map(reg => (
                                                <SelectItem key={reg} value={reg}>{reg}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <Dialog open={showDialog} onOpenChange={setShowDialog}>
                    <DialogTrigger asChild />
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Habilitar edição?</DialogTitle>
                        </DialogHeader>
                        <p>Tem certeza que deseja habilitar a edição das linhas?</p>
                        <DialogFooter>
                            <Button variant="outline" onClick={() => setShowDialog(false)}>
                                Cancelar
                            </Button>
                            <Button onClick={confirmEdit}>Confirmar</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}