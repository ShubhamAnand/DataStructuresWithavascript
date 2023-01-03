/**
* Evaluate Reverse Polish Notation 
 * @param {string[]} tokens
 * @return {number}
 */

 class Stack {
    // Array is used to implement stack
    constructor()
    {
        this.items = [];
    }
    // Functions to be implemented
    // push(item)
    push(element)
{
    // push element into the items
    this.items.push(element);
}
    // pop()

    pop()
{
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    if (this.items.length == 0)
        return "Underflow";
    return this.items.pop();
}
    // peek()
    peek()
{
    // return the top most element from the stack
    // but does'nt delete it.
    return this.items[this.items.length - 1];
}
    // isEmpty()
    isEmpty()
{
    // return true if stack is empty
    return this.items.length == 0;
}
    // printStack()
    printStack()
{
    var str = "";
    for (var i = 0; i < this.items.length; i++)
        str += this.items[i] + " ";
    return str;
}
}
var stack = new Stack();

var evalRPN = function(tokens) {
    for(let i=0;i<tokens.length;i++){
        let c=tokens[i]
        if(!isNaN(c)){
            stack.push(c -'0')
        }
        else{
            let num1=stack.pop();
            let num2=stack.pop();
            if(num1=="Underflow" || num2=="Underflow")
              return ("can't perform postfix operation")
              switch(c){
                  case '+':
                  stack.push(num2+num1);
                  break;
                  case '-':
                  stack.push((num2-num1));
                  break;
                  case '*':
                  stack.push(num2*num1);
                  break;
                  case '/':
                  stack.push(Math.trunc(num2/num1));
                  break;
              }
        }
    }
return stack.pop();
};
