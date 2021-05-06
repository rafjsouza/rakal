
document.addEventListener("DOMContentLoaded", function(event) { 
  moveDescricaoProduto();  
});


function moveDescricaoProduto(){
   $('.product-description.user-content').insertAfter('div[data-toggle="#installments-modal"]')
}
