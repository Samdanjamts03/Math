// for loop -> davtalt
console.log ("Hello");
// for (var i=enleh_too; i<=tugsguh too; i++/i--)
//end davtalt code bichne
//}
for(var i=1;i<=10;i++){
	console.log(i+".hello");
}
for(var i=10; i>=1; i--){
	console.log(i);
}
for(var i=1;i<=20;i++){
	if(i%2==0){
		console.log("tegsh:"+i);
	}else{
		console.log('sondgoi:'+i );
	}
}
var hurd=5;
for(var i=1;i<=10;i++){
	console.log(hurd + "x" + i + "=" + hurd*i );
}
var hurd=3;
for(var i=1;i<=10;i++){
	console.log(hurd + "x" + i + "=" + hurd*i );
}


var randomNumber = Math.floor(Math.random()*10)+1;
console.log(randomNumber);
var chance=3;
for(var i=1; i<=chance;i++){
	var myNumber = +prompt("1-10 hurtleh random toog taana uu");
	if(myNumber==randomNumber){
	alert("Ta hojloo."+ i +" dahi udaagaar hojloo")
		break;
	}else if(myNumber=="" || myNumber<0 || myNumber>10){
		alert("Buruu utga oruulsan bna");
	}else if(myNumber<randomNumber){
		alert("Baga bna")
	}else if(myNumber>randomNumber){
		alert("ih bna")
	}else{
		alert("Buruu bna.Dahin oroldono uu")
	}
	if(i==chance){
		alert("Ta hojigdloo")
		break;
	}
}