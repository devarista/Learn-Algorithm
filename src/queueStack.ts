export class Queue {
    private array: any[] = new Array<string | number>()

    getLength() {
        return this.array.length
    }
    isEmpty() {
        return this.array.length === 0 ? true : false
    }
    enqueue(value: number | string) {
        this.array.push(value)
        return value
    }
    dequeue() {
        return this.array.shift()
    }
    peek() {
        return this.array[0]
    }
}
