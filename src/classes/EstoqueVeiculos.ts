export class EstoqueVeiculos {
    private estoque: { [modelo: string]: number } = {};

    adicionarEstoque(modelo: string, quantidade: number): void {
        this.estoque[modelo] = (this.estoque[modelo] || 0) + quantidade;
    }

    removerEstoque(modelo: string): void {
        if (this.estoque[modelo]) {
            this.estoque[modelo]--;
            if (this.estoque[modelo] === 0) delete this.estoque[modelo];
        }
    }

    consultarEstoque(modelo: string): number {
        return this.estoque[modelo] || 0;
    }
}
