$(document).ready(function(){
	
	var isLightOn = true;
	
	$("#lightSwitch").click(function(){
		flipTheLightSwitch()
	});

	function flipTheLightSwitch(){
		if(isLightOn){

			$("body").css("background", "black");
			$("#lightSwitch").val("Turn Light on");
			isLightOn = false;
		}else{

			$("body").css("background", "yellow");
			$("#lightSwitch").val("Turn Light Off");
			isLightOn = true;
		}
	}
});