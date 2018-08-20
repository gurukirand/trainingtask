var str="gurukiran";
var str1="d";
var str2="i am";
var str3="GURU";
var str4="       gurukiran       ";
// string lenghth gurukiran

function str_len()
{
    document.getElementById('slen').innerHTML=str.length;
}

function str_chcode()
{
    document.getElementById('slen').innerHTML=String.fromCharCode(65, 66, 67);
}
// fromcodepoint
function str_codepoint()
{
    document.getElementById('codepoint').innerHTML=String.fromCodePoint(65, 66, 67);
}
// chatat
function str_charat()
{
    document.getElementById('charat').innerHTML=str.charAt(3);
}
// chatcodeat
function str_charcodeat()
{
    document.getElementById('charcodeat').innerHTML=str.charCodeAt(3);
}
// chatcodeat
function str_codepointat()
{
    document.getElementById('codepointat').innerHTML=str.codePointAt(2);
}
// concat
function str_concat()
{
    document.getElementById('concat').innerHTML=str.concat(' ',str1);
}
// endswith
function str_endswith()
{
    document.getElementById('endswith').innerHTML=str.endsWith('n');
}
// include
function str_include()
{
    document.getElementById('include').innerHTML=str.includes('ur');
}
// indexof
function str_indexof()
{
    document.getElementById('indexof').innerHTML=str2.indexOf('i')
}
// indexlast
function str_indexlast()
{
    document.getElementById('indexlast').innerHTML=str2.lastIndexOf('am');
}
// match
function str_match()
{
    document.getElementById('match').innerHTML=str2.match(/am/);
}
// padend
function str_padend()
{
    document.getElementById('padend').innerHTML=str.padEnd(11,'-');
}
// padstart
function str_padstart()
{
    document.getElementById('padstart').innerHTML=str.padStart(11,'-');
}
// repeat
function str_repeat()
{
    document.getElementById('repeat').innerHTML=str.repeat(3);
}
// repeat
function str_replace()
{
    document.getElementById('replace').innerHTML=str2.replace('am','m');
}
// slice
function str_slice()
{
    document.getElementById('slice').innerHTML=str.slice(2,6);
}
// split
function str_split()
{
    document.getElementById('split').innerHTML=str2.split(' ');
}
// split
function str_startswith()
{
    document.getElementById('startswith').innerHTML=str2.startsWith('i');
}
// subs
function str_subs()
{
    document.getElementById('subs').innerHTML=str.substring(3,0);
}
// tolower
function str_tolow()
{
    document.getElementById('tolow').innerHTML=str3.toLowerCase();
}
// subs
function str_tolow()
{
    document.getElementById('tolow').innerHTML=str3.toLowerCase();
}
// tolow
function str_tolow()
{
    document.getElementById('tolow').innerHTML=str3.toLowerCase();
}
// toup
function str_toup()
{
    document.getElementById('toup').innerHTML=str.toUpperCase();
}
// tostring
function str_tostring()
{
    document.getElementById('tostring').innerHTML=str.toString();
}
// trim
function str_trim()
{
   alert(str4.trim());
    console.log(str4);
}
// trimend
function str_trimend()
{
    alert(str4.trimEnd());
    console.log(str4);
}

// trimstart
function str_trimstart()
{
   alert(str4.trimStart());
}
// valuesof
function str_value()
{
   document.getElementById('value').innerHTML=str.valueOf();
}
