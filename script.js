console.log("A bunch of motivational gym quotes incoming...")

function genRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
  const gymQuotes = {
    dateToday: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Funday'],
    ifFeeling: ['tired', 'sad', 'angry', 'depressed', 'heartbroken', 'bored'],
    advice: ['go gym']
  }
  
  // Store the 'gym quotes' in an array
  let quotes = []
  
  // Iterate over the object
  for(let prop in gymQuotes) {
    let optionIdx = genRandomNumber(gymQuotes[prop].length)
  
    // use the object's properties to customize the message being added to quotes  
    switch(prop) {
      case 'dateToday':
        quotes.push(`Today is: "${gymQuotes[prop][optionIdx]}".`)
        break
      case 'ifFeeling':
        quotes.push(`If you are feeling: "${gymQuotes[prop][optionIdx]}".`)
        break
      case 'advice':
        quotes.push(`Just "${gymQuotes[prop][optionIdx]}", gym fixes everything.`)
        break
      default:
        quotes.push('There is not enough info.')
    }
  }
  
  function formatWisdom(wisdom) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = quotes.join('\n')
    console.log(formatted)
  }
  
  formatWisdom(quotes);