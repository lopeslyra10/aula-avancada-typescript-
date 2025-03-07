import { Veiculo } from "../interface/Veiculo";

export function gerarRelatorio(veiculos: Veiculo[]): string {
    return veiculos.map(v => 
        `Marca: ${v.marca}, Modelo: ${v.modelo}, Ano: ${v.ano}`
    ).join("\n");
}
