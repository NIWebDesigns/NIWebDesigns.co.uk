
var cart=JSON.parse(decodeURI(localStorage.getItem("cart")))||null;if(cart){AMP.setState({cart:cart});var cartwrapper=document.querySelector(".shoping-cart-wrapper"),csclass=cartwrapper.className,counter=document.querySelector(".cart-counter");-1===csclass.search("show")&&(cartwrapper.className+=" show");counter.textContent=cart.items.length}else AMP.setState({cart:{items:[],id:1}});
