window.onload = function() {
	var a = document.getElementById("s");
	var b = document.getElementById("b");
	var content = a.innerHTML;
	var hcontent = "";
	// <
	var lp = "&lt;";
	// >
	var rp = "&gt;";

	var begin, end, tagName, tagValue, hasSlash;
	
	while (content != "") {
		begin = content.trim().indexOf(lp);
		if (content.substr(begin + lp.length, 1) == '/') {
			if (begin > 0) {
				tagValue = content.substr(0, begin);
				hcontent += "<span class='xml-text'>" + tagValue + "</span>"
			}
			hcontent += "<span class='xml-punctuation'>&lt;/</span>";
			hasSlash = 1;
		} else {
			hcontent += "<span class='xml-punctuation'><</span>";
			hasSlash = 0;
		}
		end = content.indexOf(rp);
		tagName = content.substr(begin + lp.length + hasSlash,
				end - (begin + lp.length + hasSlash)).trim();
		hcontent += "<span class='xml-tagname'>" + tagName + "</span>";
		hcontent += "<span class='xml-punctuation'>></span><br>"
		content = content.substr(end + rp.length).trim();
	}

	b.innerHTML = hcontent;
};