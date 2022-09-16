
   
        
  var zh = localStorage.getItem('message')
  var mm = localStorage.getItem('message1')

  if(   zh == "admin-y-qian-jj" ,   mm  == "webadmin-y-qian-jj"   ) 
  
      {
       
      }
   else{
    if( zh == "zhanghao1356" ,   mm  == "mima1356"){

    }
    else {
      alert("请先登录账号密码")
        window.location.href='./yh2.html';    
  }
   }


   

    // pc=0   phone=1
    function browserRedirect() {
      var sUserAgent = navigator.userAgent.toLowerCase();
      var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
      var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
      var bIsMidp = sUserAgent.match(/midp/i) == "midp";
      var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
      var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
      var bIsAndroid = sUserAgent.match(/android/i) == "android";
      var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
      var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
      document.writeln("");
      if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
   
      } else {
        alert(' 电脑端禁止访问，请用手机访问')
        window.location.href='./index.html'; 
      }
  }
  browserRedirect();


