
document.addEventListener("DOMContentLoaded", function(event) { 
 console.log( "ready!" );
  moveDescricaoProduto();  
});


function moveDescricaoProduto(){
   $('.product-description.user-content').insertAfter('div[data-toggle="#installments-modal"]')
}
