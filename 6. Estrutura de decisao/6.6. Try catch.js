// "Try catch" é como se fosse IF ELSE dos erros

try{
    //Executar algo...
    // Try serve para consultas em BD, API, arquivos, etc
    console.log("Consultando o banco de dados...")
    throw "Erro 1031 ao conectar com o banco de dados"//Erro no bd que retorna para vc
}catch(error){
    alert("Erro de execução genérico. Por favor, fale com o suporte")
    console.log(error)
    // Alert colocamos mensagem de erro para o usuario. No console colocalos o erro tecnico
}finally{
    // Sempre executa ao final (opcional)
    console.log("Execução final")
}
