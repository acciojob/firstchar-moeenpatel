function firstChar(text) {
  // your 
	let z="";
	let n=text.length;
	if(n==0 || text[0]=="" ||text[0]==" "){
		return "";
	}
	for(int i=0;i<n;i++){
		if(text[i]!=" "){
			z=z+text[i];
		}
	}
	return z[0];
	
}


const text = prompt("Enter text:");
alert(firstChar(text));
