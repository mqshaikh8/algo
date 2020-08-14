let stack = () => {
    this.items = []
    this.top = 0
}

stack.prototype.push = (element) => {
    this.items[this.top] = element
    this.top += 1
}

stack.prototype.length = () => {
    return  this.top
}

stack.prototype.peek = () => {
    return this.items[this.top - 1]
}

stack.prototype.isEmpty = () => {
    return this.top === 0
}

stack.prototype.pop = () => {
    if(this.isEmpty() === false){
        this.top -= 1
        return this.items.pop()
    }
    else{
        console.error('stack is empty')
    }
}
stack.prototype.print = () => {
    let top = this.top - 1
    while(top >= 0){
        console.log(this.data[top]);
        top--;
    }
}