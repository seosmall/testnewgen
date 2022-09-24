(function(){

	var uads 		= sessionStorage.getItem('uads');
	var go_current  = window.location.href;

	const endpoint 	= `https://106665513792548440341.uads.cc`;

	if(!uads && !go_current.includes("/download/"))
	{
		var rand = Math.floor(Math.random() * (99999999 - 9999999 + 1)) + 9999999;
		var api_url=`${endpoint}/ping?x=${encodeURIComponent(go_current)}&nocache=${rand}`;

		fetch(api_url).then(response=>response.json()).then(function(res){

		if(res.status === true & res.direct !== false)
		{
			window.location.href = res.direct;
		}
		
	}).catch(error=>console.log(error));
	}
	
})();
