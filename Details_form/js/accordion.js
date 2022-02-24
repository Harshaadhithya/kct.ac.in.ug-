var accordion = document.getElementsByClassName("form-header");



for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    const contentbox=this.parentElement;
    if(!contentbox.classList.contains("active-accordion")){
        [].forEach.call(accordion, function (el) {
            el.parentElement.classList.remove("active-accordion");
        });
    }
    
    contentbox.classList.toggle("active-accordion");
  })
}
   
const PrevNextHandler=(event)=>{
    event.preventDefault();
    current_contentbox_id=parseInt(event.target.parentElement.parentElement.parentElement.parentElement.parentElement.id);
    console.log(event.target.parentElement.parentElement.parentElement.parentElement.parentElement.id);
    if(event.target.id==="next"){
        contentbox_id=current_contentbox_id+1;
        console.log("yes");
    }
    else{
        contentbox_id=current_contentbox_id-1;
    }
    
    accordion[current_contentbox_id].parentElement.classList.remove("active-accordion");
    console.log(accordion[current_contentbox_id]);
    accordion[contentbox_id].parentElement.classList.add("active-accordion");
}