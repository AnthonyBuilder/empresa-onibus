"use client"

import * as React from "react"
import {
  Collapsible, CollapsibleContent, CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Bus, GlassWaterIcon, Percent, Rotate3D, TrendingUp, TrophyIcon } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs"

const cardsData = [
  { title: "Quantidade de veiculos", description: "256", icon: <Bus /> },
  { title: "KMs Rodado", description: "1190", icon: <Rotate3D /> },
  { title: "Litros Consumidos", description: "5.250", icon: <GlassWaterIcon /> },
  { title: "Meta", description: "2.23", icon: <TrophyIcon /> },
  { title: "Potencial de Melhoria", description: "56%", icon: <Percent /> },
];

const chartConfig = {
  brusca: { label: "Aceleração Brusca", color: "var(--chart-1)" },
  rotacao: { label: "Excesso de Rotação", color: "var(--chart-2)" },
  velocidade: { label: "Excesso de Velocidade", color: "var(--chart-2)" },
  faixaVerde: { label: "Fora da Faixa Verde", color: "var(--chart-2)" },
  marchaLenta: { label: "Marcha Lenta Excessiva", color: "var(--chart-2)" },
};

const chartData = [
  { name: '(RT) Aceleração Brusca', bruscaV: 19514 },
  { name: '(RT) Excesso de Rotação', rotacaoV: 22451 },
  { name: '(RT) Excesso de Velocidade', velocidadeV: 6501 },
  { name: '(RT) Fora da Faixa Verde', faixaVerdeV: 37711 },
  { name: '(RT) Marcha Lenta Excessiva', marchaLentaV: 214 }
];

function FilterDropdown({
  label,
  placeholder,
  items = [],
}: {
  label: string;
  placeholder: string;
  items?: string[];
}) {
  return (
    <div className="flex flex-col space-y-1.5">
      <Label className="mb-3">{label}</Label>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">{label}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <Input className="mb-2" placeholder={placeholder} />
          <DropdownMenuSeparator />
          {/* Renderiza dinamicamente os itens do dropdown com base em uma prop 'items' */}
          {Array.isArray(items) && items.length > 0 ? (
            items.map((item, idx) => (
              <DropdownMenuItem key={idx}>{item}</DropdownMenuItem>
            ))
          ) : (
            <DropdownMenuItem disabled>Nenhum item encontrado</DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default function Rankings() {
  return (
    <div>
      <div className="justify-self-start text-left mt-2 p-5 w-full">
        <Collapsible>
          <header className="flex items-center justify-between">
            <h2 className="text-5xl font-bold">Rankings</h2>
            <CollapsibleTrigger>Filtrar</CollapsibleTrigger>
          </header>
          <p className="mt-2">Relatorio de rankings das empresas.</p>
          <CollapsibleContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
              <FilterDropdown label="Carros" placeholder="Procurar carros" items={["Carro 1", "Carro 2"]} />
              <FilterDropdown label="Excluir Carros" placeholder="Procurar carros" items={["Carro 3", "Carro 4"]} />
              <FilterDropdown label="Linhas" placeholder="Procurar linhas" items={["Linha 1", "Linha 2"]} />
              <FilterDropdown label="Motoristas" placeholder="Procurar motoristas" items={["Motorista 1", "Motorista 2"]} />
              <FilterDropdown label="Chassis" placeholder="Procurar chassis" items={["Chassi 1", "Chassi 2"]} />
              <FilterDropdown label="Eventos de segurança" placeholder="Procurar eventos de segurança" items={["Evento 1", "Evento 2"]} />
              <FilterDropdown label="Eventos de consumo" placeholder="Procurar eventos de consumo" items={["Evento 3", "Evento 4"]} />
              </div>
          </CollapsibleContent>
        </Collapsible>

        <Separator orientation="horizontal" className="mt-10 data-[orientation=vertical]:h-max" />

        <div className="overflow-x-auto mt-4">
          <div className="min-w-full flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-6 mt-4">
            {cardsData.map((card, idx) => (
              <Card key={idx} className="w-full md:w-64">
                <CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                  <CardAction>{card.icon}</CardAction>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-10 mb-10">
            <Card>
              <CardHeader>
                <CardTitle>Eventos de Consumo</CardTitle>
                <CardDescription>Jan - Set 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig}>
                  <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                      dataKey="name"
                      tickFormatter={value => String(value).slice(0, 15)}
                    />
                    <Bar dataKey="bruscaV" fill="var(--chart-1)" radius={6} />
                    <Bar dataKey="rotacaoV" fill="var(--chart-2)" radius={6} />
                    <Bar dataKey="velocidadeV" fill="var(--chart-2)" radius={6} />
                    <Bar dataKey="faixaVerdeV" fill="var(--chart-2)" radius={6} />
                    <Bar dataKey="marchaLentaV" fill="var(--chart-2)" radius={6} />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 leading-none font-medium">
                  Tendencias <TrendingUp className="h-4 w-4" />
                </div>
                <div className="text-muted-foreground leading-none">
                  Mostrando resultados de X dias.
                </div>
              </CardFooter>
            </Card>
          </div>

          <Separator orientation="horizontal" className="mt-10 data-[orientation=vertical]:h-max" />

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex flex-col">
                  <h2 className="text-xl text-gray-300">1724 035</h2>
                  <h2 className="text-2xl font-bold">Mirante da Mata X Metro Butantã</h2>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div id="cards" className="mt-10 flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-6">
                  {cardsData.map((card, idx) => (
                    <Card key={idx} className="w-full md:w-64">
                      <CardHeader>
                        <CardTitle>{card.title}</CardTitle>
                        <CardDescription>{card.description}</CardDescription>
                        <CardAction>{card.icon}</CardAction>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
                <Separator orientation="horizontal" className="mt-10 data-[orientation=vertical]:h-max" />
                <Tabs defaultValue="principal" className="mt-5">
                  <TabsList className="flex m-2 justify-center">
                    <TabsTrigger value="principal" className="m-2">Principal</TabsTrigger>
                    <TabsTrigger value="consumo" className="m-2">Consumo</TabsTrigger>
                    <TabsTrigger value="seguranca" className="m-2">Segurança</TabsTrigger>
                    <TabsTrigger value="financeiro" className="m-2">Financeiro</TabsTrigger>
                    <TabsTrigger value="ecologico" className="m-2">Ecológico</TabsTrigger>
                  </TabsList>
                  <TabsContent value="principal">
                    <div className="overflow-x-auto">
                      <h2 className="text-lg font-bold mt-5 mb-5">Principal</h2>
                      <table className="min-w-full border border-gray-200 rounded-md">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="px-4 py-2 text-xs font-bold text-gray-700 uppercase">COD</th>
                            <th className="px-4 py-2 text-xs font-bold text-gray-700 uppercase">NOME</th>
                            <th className="px-4 py-2 text-xs font-bold text-gray-700 uppercase">KM</th>
                            <th className="px-4 py-2 text-xs font-bold text-gray-700 uppercase">LT</th>
                            <th className="px-4 py-2 text-xs font-bold text-gray-700 uppercase">MÉDIA</th>
                            <th className="px-4 py-2 text-xs font-bold text-gray-700 uppercase">POSIÇÃO</th>
                            <th className="px-4 py-2 text-xs font-bold text-gray-700 uppercase">% DE GANHO (META)</th>
                            <th className="px-4 py-2 text-xs font-bold text-gray-700 uppercase">% DE GANHO MÉDIA: 1.98</th>
                            <th className="px-4 py-2 text-xs font-bold text-gray-700 uppercase">EV CONSUMO</th>
                            <th className="px-4 py-2 text-xs font-bold text-gray-700 uppercase">RANK CONSUMO</th>
                            <th className="px-4 py-2 text-xs font-bold text-gray-700 uppercase">EV SEGURANÇA</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="px-4 py-2 text-sm">001</td>
                            <td className="px-4 py-2 text-sm">JOÃO DA SILVA</td>
                            <td className="px-4 py-2 text-sm">1200</td>
                            <td className="px-4 py-2 text-sm">350</td>
                            <td className="px-4 py-2 text-sm">3.42</td>
                            <td className="px-4 py-2 text-sm">1</td>
                            <td className="px-4 py-2 text-sm">5%</td>
                            <td className="px-4 py-2 text-sm">1.98</td>
                            <td className="px-4 py-2 text-sm">A</td>
                            <td className="px-4 py-2 text-sm">1</td>
                            <td className="px-4 py-2 text-sm">B</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>
                  <TabsContent value="consumo">{/* Conteúdo da aba Consumo */}</TabsContent>
                  <TabsContent value="seguranca">{/* Conteúdo da aba Segurança */}</TabsContent>
                  <TabsContent value="financeiro">{/* Conteúdo da aba Financeiro */}</TabsContent>
                  <TabsContent value="ecologico">{/* Conteúdo da aba Ecológico */}</TabsContent>
                </Tabs>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

