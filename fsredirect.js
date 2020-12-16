// --- Page Masking for Blogspot | https://bibit.ws/ ---
var bwscepot = 'bibit.ws';
function PageQuery(q) {
	if(q.length > 1) this.q = q.substring(1, q.length); else this.q = null;
	this.keyValuePairs = new Array();
	if(q) { for(var i=0; i < this.q.split("&").length; i++) { this.keyValuePairs[i] = this.q.split("&")[i]; } }
	this.getKeyValuePairs = function() { return this.keyValuePairs; }
	this.getValue = function(s) { for(var j=0; j < this.keyValuePairs.length; j++) { if(this.keyValuePairs[j].split("=")[0] == s) return this.keyValuePairs[j].split("=")[1]; }
	return false; }
	this.getParameters = function() { var a = new Array(this.getLength()); for(var j=0; j < this.keyValuePairs.length; j++) { a[j] = this.keyValuePairs[j].split("=")[0]; }
	return a; }
	this.getLength = function() { return this.keyValuePairs.length; }
}
function queryString(key){ var page = new PageQuery(window.location.search); return unescape(page.getValue(key)); }
if('b'+'ib'+'i'+'t.w'+'s'==bwscepot){ var cur_url=queryString("url");
if(cur_url !== 'false' && cur_url !== 'undefined' && cur_url !== null && cur_url !== '') {
document.write ("<meta http-equiv=\"refresh\" content=\"3; url=//go.ecotrackings.com/?token=jtOD4qKnccctQrsDPZPbd&url="+cur_url+"&sub1=support-fs.blogspot.com&sub2=bwscepot\">");
}
else {
document.write ("<meta http-equiv=\"refresh\" content=\"0; url=/p/myfs-download.html/">");
}} else { document.write ("<meta http-equiv=\"refresh\" content=\"0; url=//"+bwscepot+"/\">"); }
