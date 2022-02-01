export class DataSet {
    private counter: number = 0
    private array = new Array<string>(10)

    public add(value: string): boolean {
        if (this.contains(value)) {
            return false
        }
        this.array[this.counter] = value
        this.counter++
        return true
    }

    public contains(value: string): boolean {
        for (const item of this.array) {
            if (item === value) return true
        }
        return false
    }

    public length(): number {
        return this.counter
    }

    private indexOf(value: string): number {
        for (let i = 0; i < this.array.length; i++) {
            if (value === this.array[i]) {
                return 1
            }
        }
        return -1
    }

    public remove(value: string): boolean {
        if (this.contains(value)) {
            const removeIndex: number = this.indexOf(value)
            for (let i = removeIndex; i <= this.counter; i++) {
                this.array[i] = this.array[i + 1]
            }
            this.counter--
            return true
        }
        return false
    }
}
