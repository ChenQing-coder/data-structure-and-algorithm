import {Node, Stack} from "../base-link/Stack";

class BrowserForwardBack {

    stack: Stack;

    constructor() {
        this.stack = new Stack();
    }

    forward(url: string) {
        this.stack.push(new Node(url));
    }

    getValues(): string {
        return this.stack.getValues();
    }
}
export default  BrowserForwardBack
