function takeANumber(line, name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  let current = line[0]
  line.shift()
  if (line.length === 0){
    return "There is nobody waiting to be served!"
  } else {
  return `Currently serving ${current}.`
  }
}

function currentLine(line){
  let result = []
  if (line.length === 0){
    return "The line is currently empty."
  } else {
    for (let i = 0; i < line.length; i++){
      result.push(`${i + 1}. ${line[i]}`)
    }
  }

  return `The line is currently: ${result.join(', ')}`
}
