/**
*This is the mrcoxallstack class
*by: Ryan Bash Gheshlaghi
*on: 26/3/2024
*/


export class MrCoxallStack {

    private stackList: string = []

    /*
    *checks if stack is empty or not
    */
    public get stackEmpty () {
      return this.stackList.length == 0
    }

    /*
    *gets stack size
    */
    public get stackSize() {
      return this.stackList.length
    }

    /*
    *shows the stack
    */
    public get showStack(): string {
      let values = ""
      for (let counter = 0; counter < this.stackList.length; counter++) {
        values = values + this.stackList[counter] + ", "
      }
      values = values.substring(0, values.length-2)
      return values
    }

    /*
    *pushes an item onto the stack
    */
    public push(input: string) {
      this.stackList.push(input)
    }

    /*
    *pops the last item on the stack and removes it
    */
     public popItem(): string {
      let popped = ""
      if (this.stackList.length > 0) {
        popped = this.stackList[this.stackList.length - 1]
        this.stackList.splice(-1)
      } else {
        popped = "nothing to remove"
      }
      return popped
    }
  }