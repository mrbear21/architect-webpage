function getServerOnline() {
  var url = "https://api.minetools.eu/ping/play.atect.top";
  $.getJSON(url, function(r) {
    //data is the JSON string
    if (r.error) {
      $('#rest').html('Сервер оффлайн');
      return false;
    }
    var pl = '';
    if (r.players.sample.length > 0) {
      pl = '<br>OP: ' + r.players.sample[0].name;
    }
    $('#rest').html('Онлайн: <b>' + r.players.online + pl+'</b>');
    $('#favicon').attr('src', r.favicon);
  });
}
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  alert("Айпи play.atect.top успешно скопировано! Зайдите в список серверов, нажмите на Добавить сервер и в поле Адрес сервера вставьте скопированный айпи.");
}
function openTab(tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  for (i = 0; i < tabcontent.length; i++) {
    if (tabcontent[i].id == tabName) {
      tabcontent[i].style.display = "block";
    }
  }
  window.location.href = window.location.href.split("#")[0]+'#'+tabName;
  tablinks = document.getElementsByClassName(tabName);
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "#777";
  }
}
function getFolder(url) {
  return url.split("/")[url.split("/").length-1]
}
function getLink(url) {
  switch(url) {
    case "discord": return "https://discord.gg/yrCBKbJ";
    case "support": return "https://discord.gg/dNnCfWv9p4";
    case "telegram": return "https://t.me/atectchat";
    case "store": return "../index.html#donate";
    case "vote": return "../index.html#vote";
    case "rules": return "../index.html#rules";
    case "vk": return "https://vk.com/atect";
    case "youtube": return "https://www.youtube.com/channel/UCN4NA9gmbWW8C6j4kdnWQiw";
    default: return "../index.html";
  }
}
function getUrlParams(url) {
  var queryString = url.substring(url.lastIndexOf("?") + 1);
  return queryString.split('&').map(function(sParam) {
    var param = sParam.split('=');
    return decodeURIComponent(param[1]);
  });
}
