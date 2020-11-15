import Node from './Node';

export default class SingleLinked {

    head: Node

    constructor() {
        this.head = new Node('head');
    }

    private findLastNode(): Node {
        let currentValue: Node = this.head;
        while (currentValue.next !== null) {
            currentValue = currentValue.next;
        }
        return currentValue
    }

    display() {
        return JSON.stringify(this.head);
    }

    /**
     * append after the last node
     * @param node
     */
    append(node: Node) {
        const lastNode = this.findLastNode();
        lastNode.next = node;
    }

    findByValue(data: unknown) {
        let currentValue = this.head.next;
        while (currentValue !== null && currentValue.data !== data) {
            currentValue = currentValue.next;
        }
        return currentValue === null ? -1 : currentValue;
    }
}
