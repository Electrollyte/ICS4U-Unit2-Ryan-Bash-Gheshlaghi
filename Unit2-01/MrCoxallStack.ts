/**
*This is the mrcoxallstack class
*by: Ryan Bash Gheshlaghi
*on: 26/3/2024
*/

export class MrCoxallStack {
  constructor() {
    self.stackList = []
  }

  push(input) {
    self.stackList.push(input)
  }

  showStack() {
    let values = ""
    for (let counter = 0; counter < self.stackList.length; counter++) {
      values = values + self.stackList[counter] + ", "
    }
    values = values.substring(0, values.length-2)
    return values
  }
}
