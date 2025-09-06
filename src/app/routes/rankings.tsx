"use client"

import * as React from "react"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Bus, GlassWaterIcon, Percent, Rotate3D, TrendingUp, TrophyIcon } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { Separator } from "@/components/ui/separator"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DropdownMenuCheckboxItem, type DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs"

type Checked = DropdownMenuCheckboxItemProps["checked"]


export default function Rankings() {

    const chartConfig = {
        brusca: {
            label: "Aceleração Brusca",
            color: "var(--chart-1)",
        },
        rotacao: {
            label: "Excesso de Rotação",
            color: "var(--chart-2)",
        },
        velocidade: {
            label: "Excesso de Velocidade",
            color: "var(--chart-2)",
        },
        faixaVerde: {
            label: "Fora da Faixa Verde",
            color: "var(--chart-2)",
        },

        marchaLenta: {
            label: "Marcha Lenta Excessiva",
            color: "var(--chart-2)",
        },
    } satisfies ChartConfig

    // Example data for the BarChart
    const chartData = [
        { name: '(RT) Aceleração Brusca', bruscaV: 19514 },
        { name: '(RT) Excesso de Rotação', rotacaoV: 22451 },
        { name: '(RT) Excesso de Velocidade', velocidadeV: 6501 },
        { name: '(RT) Fora da Faixa Verde', faixaVerdeV: 37711 },
        { name: '(RT) Marcha Lenta Excessiva', marchaLentaV: 214 }
    ];

    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
    const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
    const [showPanel, setShowPanel] = React.useState<Checked>(false)

    // Defina os dados dos cards em um array
    const cardsData = [
        {
            title: "Quantidade de veiculos",
            description: "256",
            icon: <Bus />,
        },
        {
            title: "KMs Rodado",
            description: "1190",
            icon: <Rotate3D />,
        },
        {
            title: "Litros Consumidos",
            description: "5.250",
            icon: <GlassWaterIcon />,
        },
        {
            title: "Meta",
            description: "2.23",
            icon: <TrophyIcon />,
        },
        {
            title: "Potencial de Melhoria",
            description: "56%",
            icon: <Percent />,
        },
    ];

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
                        <div
                            id="filter"
                            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10"
                        >
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="date-inicial" className="mb-3">Data inicial</Label>
                                <Input type="date" id="date-inicial" placeholder="Data" className="w-full" />
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="date-final" className="mb-3">Data final</Label>
                                <Input type="date" id="date-final" placeholder="Data" className="w-full" />
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="carros" className="mb-3">Carros</Label>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline">Carros</Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56">
                                        <Input className="mb-2" placeholder="Procurar carros" />
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>Mercedes</DropdownMenuItem>
                                        <DropdownMenuItem>BMW</DropdownMenuItem>
                                        <DropdownMenuItem>Audi</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email1" className="mb-3">Excluir Carros</Label>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline">Carros</Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56">
                                        <Input className="mb-2" placeholder="Procurar carros" />
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>Mercedes</DropdownMenuItem>
                                        <DropdownMenuItem>BMW</DropdownMenuItem>
                                        <DropdownMenuItem>Audi</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email2" className="mb-3">Linhas</Label>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline">Linhas</Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56">
                                        <Input className="mb-2" placeholder="Procurar linhas" />
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>Mercedes</DropdownMenuItem>
                                        <DropdownMenuItem>BMW</DropdownMenuItem>
                                        <DropdownMenuItem>Audi</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email2" className="mb-3">Motoristas</Label>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline">Motoristas</Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56">
                                        <Input className="mb-2" placeholder="Procurar motoristas" />
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>Mercedes</DropdownMenuItem>
                                        <DropdownMenuItem>BMW</DropdownMenuItem>
                                        <DropdownMenuItem>Audi</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email2" className="mb-3">Chassis</Label>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline">Chassis</Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56">
                                        <DropdownMenuLabel>Chassis</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>Mercedes</DropdownMenuItem>
                                        <DropdownMenuItem>BMW</DropdownMenuItem>
                                        <DropdownMenuItem>Audi</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email2" className="mb-3">Eventos de segurança</Label>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline">Segurança</Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56">
                                        <Input placeholder="Procurar eventos de segurança" />
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>Mercedes</DropdownMenuItem>
                                        <DropdownMenuItem>BMW</DropdownMenuItem>
                                        <DropdownMenuItem>Audi</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email2" className="mb-3">Eventos de consumo</Label>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline">Consumo</Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56">
                                        <Input placeholder="Procurar eventos de consumo" />

                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>Mercedes</DropdownMenuItem>
                                        <DropdownMenuItem>BMW</DropdownMenuItem>
                                        <DropdownMenuItem>Audi</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </CollapsibleContent>
                </Collapsible>

                <Separator
                    orientation="horizontal"
                    className="mt-10 data-[orientation=vertical]:h-max"
                />

                <div className="overflow-x-auto mt-4">

                    {/* Cards principais (fora do Accordion) */}
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
                                            tickFormatter={(value) => String(value).slice(0, 15)}
                                        />
                                        <Bar dataKey="bruscaV" fill="var(--chart-1)" radius={6} />
                                        <Bar dataKey="rotacaoV" fill="var(--chart-2)" radius={6} />

                                        <Bar dataKey="velocidadeV" fill="var(--chart-2)" radius={6} />

                                        <Bar dataKey="faixaVerdeV" fill="var(--chart-2)" radius={6} />

                                        <Bar dataKey="marchaLentaV" fill="var(--chart-2)" radius={6} />

                                        <ChartTooltip
                                            cursor={false}
                                            content={<ChartTooltipContent indicator="dashed" />}
                                        />
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



                    <Separator
                        orientation="horizontal"
                        className="mt-10 data-[orientation=vertical]:h-max"
                    />
                    <div>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    <div className="flex flex-col">
                                        <h2 className="text-xl text-gray-300">1724 035</h2>
                                        <h2 className="text-2xl font-bold">Mirante da Mata X Metro Butantã</h2>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div
                                        id="cards"
                                        className="mt-10 flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-6"
                                    >
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

                                     <Separator
                                        orientation="horizontal"
                                        className="mt-10 data-[orientation=vertical]:h-max"
                                    />

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
                                        <TabsContent value="consumo">
                                            {/* Conteúdo da aba Consumo */}
                                        </TabsContent>
                                        <TabsContent value="seguranca">
                                            {/* Conteúdo da aba Segurança */}
                                        </TabsContent>
                                        <TabsContent value="financeiro">
                                            {/* Conteúdo da aba Financeiro */}
                                        </TabsContent>
                                        <TabsContent value="ecologico">
                                            {/* Conteúdo da aba Ecológico */}
                                        </TabsContent>
                                    </Tabs>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>
                                     <div className="flex flex-col">
                                        <h2 className="text-xl text-gray-300">1721 035</h2>
                                        <h2 className="text-2xl font-bold">Mirante da Mata X Metro Butantã</h2>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

