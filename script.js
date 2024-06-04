
//dados
let inputName = $("#name") ;
let inputEmail = $("#email") ;




//funções


$("#saveButton").click(()=>{

    if(inputName.val() !== "" && inputEmail.val() !== ""){
        alert('Dados salvos')
        inputName.val("");
        inputEmail.val("") ;

        $(".add-to-cart").attr('disabled',false);
    }else{

        alert('Preencha os campos primeiro')

       
    }   
})


//tirar o comportamento padrao do formulario

$("#cartForm").submit( e=>{
    e.preventDefault() ;
})




// carrinho

var cart = [] ;

   function adicionarAoCarrinho(item , preco){

    
    //adicionei ao carrinho
    cart.push({
        item : item ,
        price : preco,
    })

   

    MostrarCarrinho()

    


}


function MostrarCarrinho(){

    $("#cartItems").html("") /* para renderizar sempre do zero */

    let  result = 0 ; //para eu conseguir fazer a soma ; 

    cart.forEach( (item) =>{

        result += item.price 
        
        const li = `<li> ${item.item} </li>` ;

        $("#cartItems").append(li) ; //adicionando o item na tela 

        $("#totalPrice").html(result.toFixed(2)) ; //adicionando os valores na tela 

       


    })
}
       