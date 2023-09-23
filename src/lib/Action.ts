export class Action {
    leftIndex: number;
    leftValue: number;
    operation: string;
    rightIndex: number;
    rightValue: number;

    constructor(leftIndex: number, leftValue: number, operation: string, rightIndex: number, rightValue: number) {
        this.leftIndex = leftIndex;
        this.leftValue = leftValue;
        this.operation = operation;
        this.rightIndex = rightIndex;
        this.rightValue = rightValue;
    }
}
