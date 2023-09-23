class Action {
    leftIndex: number;
    operation: string;
    rightIndex: number;

    constructor(leftIndex: number, operation: string, rightIndex: number) {
        this.leftIndex = leftIndex;
        this.operation = operation;
        this.rightIndex = rightIndex;
    }
}
