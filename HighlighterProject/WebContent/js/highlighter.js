window.onload = function() {
	alert();
	var a = document.getElementById("s");
	var b = document.getElementById("b");
	var content = a.innerHTML;
	alert(content);
	var hcontent = "";

	// <
	var lp = "&lt";
	// >
	var rp = "&gt;";

	var begin, end, tagName, tagValue;
//	while (content != null && content != "") {
		begin = content.indexOf(lp);
		if(begin>3){
			tagValue=content.substr(0,begin);
			hcontent+="<span class='xml-text'>"+tagValue+"</span>"
			content=content.substr(begin);
			continue;
		}
		end = content.indexOf(rp);
		hcontent += "<span class='xml-punctuation'><</span>";
		tagName = content.substr(begin + lp.length + 1, end - rp.length
				- 1);
		hcontent += "<span class='xml-tagname'>" + tagName + "</span>";
		hcontent += "<span class='xml-punctuation'>></span>"
		content = content.substr(end - rp.length, content.length);
//	}

	b.innerHTML = hcontent;
};