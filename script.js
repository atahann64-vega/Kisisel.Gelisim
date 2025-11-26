
const sozler=["Başarı sabır ister.","Bugün bir adım at.","Sende güç var."];
const tavsiyeler=["Bol su iç.","10 dakika yürü.","Negatiften uzak dur."];

function gununSozuGetir(){
 document.getElementById('gununSozu').innerText = sozler[Math.floor(Math.random()*sozler.length)];
}
function tavsiyeGetir(){
 document.getElementById('tavsiye').innerText = tavsiyeler[Math.floor(Math.random()*tavsiyeler.length)];
}
function enerji(){
 document.getElementById('enerjiSonuc').innerText = "Enerjin: " + (Math.floor(Math.random()*100)) + "%";
}
function sans(){
 const sec=["Şanslı gün!","Dikkatli ol.","Bugün güzel şeyler seni bekliyor."];
 document.getElementById('sansSonuc').innerText = sec[Math.floor(Math.random()*sec.length)];
}
