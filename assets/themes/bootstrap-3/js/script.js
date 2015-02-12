$(document).ready(function(){
	$(".expand").click(function(e){
		var prev = $(this).prev();
		prev.toggleClass("expanded");
		if(prev.hasClass("expanded")){
			$(this).text(">collapse<");
		}else{
			$(this).text("<expand>")
		}
	});
});