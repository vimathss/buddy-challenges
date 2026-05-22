function abbrevName(name, completeAbbreviation){
  
    // Regex p/ identificar não nomes -> Só deixa passar Letras e Espaços
    if(name.match(/[^ a-zA-Z \s]/g)) return "V4"
    
    // Regex p/ substituir vários espaços por somente 1
    const names = name.toLocaleUpperCase().trim().replace(/ +/g, " ").split(" ") 
    
    let iniciais = []
    
    // Faz um array com cada inicial
    for(const name of names){
        iniciais.push(name[0]) 
    }
  
    if(completeAbbreviation) return iniciais.toString().replaceAll(",", ".") // Nome Completo
    else return iniciais.length > 1 ? `${iniciais.at()}.${iniciais.at(-1)}` : iniciais.at() // Só Começo e Final
  }
  
  abbrevName("Vicente Matheus Collin Pedroso", false)
  abbrevName("Vicente Matheus Collin Pedroso", true)
  abbrevName("Test@ de &rro", true)
  abbrevName("Teste Teste", true)