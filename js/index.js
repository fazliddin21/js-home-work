const userName  = prompt('Ismingizni Kiriting');
var userStart = confirm('Testni start');
var test1 = prompt('Bootstrap qachon kim tomonidan asos solingan? '+'\n'+'a - 2011 yil 19 avgust, Mark Otto'+'\n'+'b - 2016-yil 6-sentabr,  Mark'+'\n'+'c - 2011 yil 19 avgust, Mark Otto , Jeykob Tornton');
var test2 = prompt ('Css bu... '+'\n'+'a - Cascading Style Sheets'+'\n'+'b - Cascading Style Sheets, Dasturlash tili emas '+'\n'+'C-  Style Cascading  Sheets, Dasturlash tili');
var test3 = prompt('Inline tagni ichida blok tag yozish mumkinmi' + '\n'+'a - xa'+ '\n'+'B - ixtiyoriy'+'\n'+' c - yoq'+'\n');

var test4 = prompt('Div bu...'+'\n'+'a - quti'+'\n'+'b - sarlavha tagi'+'\n'+' c - text uchun tag'+'\n');
var test5 = prompt('Bottomning Nechta type bor?'+'\n'+'A-4'+'\n'+'B-3'+'\n'+'C-2'+'\n');

console.log( 'Ismingiz'+ ' '+ userName);

console.log(
  
    'Testni Boshlaysizmi?'+ ' '+ userStart );

console.log('Bootstrap qachon kim tomonidan asos solingan?'+ '\n'+'Javobingiz -'+' '+ test1+'\n'+'To\'g\'ri Javob-'+' ' +'c');

console.log('Css bu...'+'\n'+'Javobingiz -'+' '+test2+'\n'+'To\'g\'ri Javob-'+' '+'a');

console.log('Inline tagni ichida blok tag yozish mumkinmi'+'\n'+'Javobingiz -'+' '+test3+'\n'+'To\'g\'ri Javob-'+' '+'c');

console.log('Div bu...'+'\n'+'Javobingiz -'+' '+test4+'\n'+'To\'g\'ri Javob-'+' '+'a');

console.log('Bottomning Nechta type bor?'+'\n'+'Javobingiz -'+' '+test5+'\n'+'To\'g\'ri Javob-'+' '+'B');
