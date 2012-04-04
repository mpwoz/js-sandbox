/* 
 *	This script shades even rows and adds a number column to a one-table page
 *	5/4/2012 Martin Wozniewicz
 */

$(document).ready(function() {
	
	/* Shade every other row */
	$("tr")
	.filter(function(i){return (i%2) == 1; })
	.addClass("even");
	
	/* Add a column with row number */
	$("tr")
	.html(function(index, oldhtml) {
		var out = '<td>';
		if (index != 0) out += index;	// Don't put a zero in the header
		out += '</td>' + oldhtml;
		return out;
	});
});


