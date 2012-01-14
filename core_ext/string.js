String.prototype.capitalize = function() {
   return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.classify = function(){
	return this.split("_").map(function(word){ return word.capitalize();}).join('');
};