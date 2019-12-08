var xmlSubmit = null;
    var xmlPara = null;
    function newxmlSubmit() {
      xmlSubmit = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHttp");
    }
    function newxmlPara() {
      xmlPara = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHttp");
    }
    function retSubmit() {
      if (xmlSubmit.readyState == 4 && xmlSubmit.status == 200) {
        alert(xmlSubmit.responseText);
      }
    }
    function retPara() {
      if (xmlPara.readyState == 4 && xmlPara.status == 200) {
        res = xmlPara.responseText;
        var d = new Array();
        d = res.split("^$&");
        document.getElementById("device_id").value = d[0];
        document.getElementById("ssid").value = d[1];
        document.getElementById("password").value = d[2];
        document.getElementById("addr").value = d[3];
        document.getElementById("port").value = d[4];
        document.getElementById("user").value = d[5];
        document.getElementById("pwd").value = d[6];
      }
    }
    function get_para() {
      newxmlPara();
      xmlPara.onreadystatechange = retPara;
      xmlPara.open("GET", "/para", true);
      xmlPara.send(null);
    }
    function submitForm() {
	  var ssid = document.getElementById('ssid').value;
      var password = document.getElementById('password').value;
      var addr = document.getElementById('addr').value;
      var port = document.getElementById('port').value;
      var user = document.getElementById('user').value;
      var pwd = document.getElementById('pwd').value;
      var para = '{"ssid": "'+ ssid +'","password": "'+ password +'","mqttServer": "'+ addr +'","mqttPort": '+ port +',"mqttUser": "'+ user +'","mqttPwd": "'+ pwd +'"}'
      newxmlSubmit();
      xmlSubmit.onreadystatechange = retSubmit;
      xmlSubmit.open("POST", "/submit", true);
      xmlSubmit.send(para);
    }
   get_para()
