function scrollToId(id){document.getElementById(id)?.scrollIntoView({behavior:"smooth"});}
document.getElementById("loginBtn").addEventListener("click",()=>alert("Telegram-авторизацию подключим на следующем этапе."));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>document.querySelectorAll("nav a").forEach(x=>x.classList.remove("active"))));
