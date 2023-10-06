class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }
}

class BinaryTree {
    constructor() {
        this.raiz = null;
    }

    insertar(valor) {
        const nodoNuevo = new Nodo(valor);

        if (this.raiz === null) {
            this.raiz = nodoNuevo;
            return true;
        } else {
            let nodoActual = this.raiz;
            while (true) {
                if (valor < nodoActual.valor) {
                    if (nodoActual.izquierda === null) {
                        nodoActual.izquierda = nodoNuevo;
                        return true;
                    }
                    nodoActual = nodoActual.izquierda;
                } else {
                    if (nodoActual.derecha === null) {
                        nodoActual.derecha = nodoNuevo;
                        return true;
                    }
                    nodoActual = nodoActual.derecha;
                }
            }
        }
    }

    buscar(valor) {
        // ... (código de búsqueda)
    }

    encontrarCoincidencias(...valores) {
        const coincidencias = [];
        for (const valor of valores) {
            this.encontrarCoincidenciasRecursivo(this.raiz, valor, coincidencias);
        }
        return coincidencias;
    }

    encontrarCoincidenciasRecursivo(nodo, valor, coincidencias) {
        if (nodo === null) {
            return;
        }

        if (valor === nodo.valor) {
            coincidencias.push(nodo.valor);
        }

        this.encontrarCoincidenciasRecursivo(nodo.izquierda, valor, coincidencias);
        this.encontrarCoincidenciasRecursivo(nodo.derecha, valor, coincidencias);
    }
}

// Ejemplo de uso
const binaryTree = new BinaryTree();
binaryTree.insertar(1);
binaryTree.insertar(5);
binaryTree.insertar(3);
binaryTree.insertar(2);

const coincidencias = binaryTree.encontrarCoincidencias(10);
console.log(coincidencias);