(function(){
    var leadDal;
    $(document).ready(function() {
        initializePipzForm();
        initializePipzTracker();
    });

    function saveInfo(){
        var name = $('input[name="contact.name"]').val();
        var email = $('input[name="contact.email"]').val();
        var phone = $('input[name="contact.phone"]').val();

        if(!name || !email || !phone) return;

        if(!leadDal)
            leadDal = new LeadDal();

        leadDal.saveLead(new Lead(name, email, new Date(), phone));
    }

    function initializePipzTracker(){
        !function(){var a=window.pipz=window.pipz||[];if(!a.initialize)if(a.invoked)window.console&&console.error&&console.error('Snippet included twice.');else{a.invoked=!0;a.methods='formIdentify pageview reset identify track ready page once off on'.split(' ');a.factory=function(c){return function(){var b=Array.prototype.slice.call(arguments);b.unshift(c);a.push(b);return a}};for(var c=0;c<a.methods.length;c++){var d=a.methods[c];a[d]=a.factory(d)}a.load=function(c){var b=document.createElement('script');b.type='text/javascript';b.async=!0;var d=document.getElementsByTagName('script')[0];d.parentNode.insertBefore(b,d);b.onload=function(){a=window.pipz;a.initialize({'eCentrack.io':{apiKey:c}},{plan:{track:{}}});};b.src='//loader.pipz.io/v1/1250.37ca5243/pipz.min.js'};a.SNIPPET_VERSION='4.0.0';a.load('bdb9fffd53f6fffd1250c6')}}();
    }

    function initializePipzForm(){
        (function(){
			'use strict';
			var XHR=XMLHttpRequest||ActiveXObject;
			var request=new XHR('MSXML2.XMLHTTP.3.0');
			window.count=(window.count||0)+1;
			function createForm(url,id){
				var vid=window.count;
				url+="&v="+vid;
				var form_div;
				setTimeout(function(){
					form_div=document.getElementById(id);
					form_div.id=id+vid;
					request.send()
				},10+window.count);
				request.open('GET',url,!0);
				request.onreadystatechange=function(){
					if(request.readyState===4){
						var result;
						try{
							result=JSON.parse(request.responseText)
						}catch(e){
							result=request.responseText
						}
					if(form_div){
						if(typeof result==="string"){
							form_div.innerHTML=result;
							return
						}
						form_div.innerHTML=result.html;
						var webform=form_div.getElementsByTagName('form')[0];
						var input_cookie=document.createElement('input');
						input_cookie.name='cookie';
						input_cookie.type='hidden';
                        input_cookie.value=document.cookie;
                        webform.appendChild(input_cookie);
						var script=document.createElement('script');
						script.id="pipz_script_07277e19"+vid;
						script.innerHTML=result.script;
                        document.head.appendChild(script);
                        
                        $('.pipz-button').click(() =>{
                            saveInfo(); 
                        });
					}
				}
			};
		}
		function getCookie(cookiename){
			var cookiestring=RegExp(""+cookiename+"[^;]+").exec(document.cookie);
			return unescape(!!cookiestring?cookiestring.toString().replace(/^[^=]+./,""):"").replace(/"/igm,"")
		}
        var uuid=getCookie("ec_anonymous_id").replace(/"/igm,"");
        createForm("https://forms.pipz.io/?h=54229692a7a3ffea125074.7744ce1c&uuid="+uuid,"form_07277e19")
	})();
    }
})();