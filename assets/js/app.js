(function($){
  $(document).ready(function() {       

  });
}(jQuery));

/* Cookie Functions */

function iCreateCookie(cname,cvalue,expdays)
  {
  if (expdays)
  {
      var dt = new Date();
      dt.setTime(dt.getTime()+(expdays*24*60*60*1000));
      var expires = "; expires="+dt.toGMTString();
  }
  else 
  {
    var expires = "";
  }
  document.cookie = cname + "=" + cvalue + expires + "; path=/";
}


function iReadCookie(c1)
{
  c1 += "=";
  var ca = document.cookie.split(';');
  for(var j = 0; j < ca.length; j++)
  {
    var c = ca[j];
    while (c.charAt(0) == ' ')
    {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(c1) == 0)
    {
      return c.substring(c1.length,c.length);
    }
  }
  return null;
}

  

function iRetrieveCookieValue(c1)
{
  cookievalue = iReadCookie(c1);        
  
  if (cookievalue != null)
  {
    return cookievalue;             
  }
      
  return null;
}