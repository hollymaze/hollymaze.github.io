// Check off specific to dos by clicking

// we build this using the ul because it exists when the page
// initially loads. If we build it using the li, then our 
// code won't work for any newly added lis. We want this 
// listener to take effect any time an li within a ul is clicked
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});


// Click on X to delete to do item

// listening for clicks on spans within uls
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// When something is typed into input and then enter is pressed, 
// create new to do item
$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		//grabbing new to do text from input
		let todoText = $(this).val();
		//clear the input
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});

// When the plus sign is clicked, hide the input field
$("#plus").on("click", function() {
	$("input[type='text']").fadeToggle();
});
