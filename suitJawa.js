var lagi=true;
// input player
while(lagi){

var player=prompt('Pilih:\ngajah, orang, atau semut');
// input computer
var com=Math.random();

if(com<=0.33){
    com='gajah';
} else if(com>0.33 && com<=0.67){
    com='orang';
} else {
    com='semut';
}

// rules
var hasil=''
if(player==com){
    hasil='SERI!'
} else if(player=='semut'){
    hasil=(com=='gajah') ? 'MENANG' : 'KALAH';
} else if (player=='orang'){
    hasil=(com=='semut') ? 'MENANG' : 'KALAH';
} else if(player=='gajah') {
    hasil=(com=='orang') ? 'MENANG':'KALAH';
} 

// hasil
if(player=='gajah' || player=='orang' || player=='semut'){

alert('Anda memilih: '+player+'\nComputer memilih: '+com+'\nAnda '+hasil);

} else if(player==''){
    alert('Silakan masukkan kata kunci terlebih dahulu')
} else {

    alert('Anda memasukkan kata kunci yang salah')

}
    lagi=confirm('Coba lagi?')
}
alert('Terima kasih :)')