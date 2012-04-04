/* 
 * Script for sorting table rows
 *	2012 Martin Wozniewicz
 */

// a simple compare function, used by the sort below
var compare_rows = function (a,b){
	var a_val = $(a).children(":first").text().toLowerCase();
	var b_val = $(b).children(":first").text().toLowerCase();
	if (a_val>b_val){
		return 1;
	}
	if (a_val<b_val){
		return -1;
	}
	return 0;
};

// Excludes the first element of a collection (zero-index)
// We do this because our table doesn't differentiate
// 	between the first row of <th> elements (headers) and the other rows
var exclude_first = function(index) {
	return (index != 0);
};


/* The actual sort */
$(document).ready(function(){
		var t = $('tbody');
		var rows = t.children().filter(exclude_first);
    rows.sort(compare_rows).appendTo(t);
}); 



