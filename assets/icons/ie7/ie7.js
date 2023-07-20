/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'the-band-icon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'tb-burger': '&#xe911;',
		'tb-arrow-drop-down': '&#xe900;',
		'tb-cancel': '&#xe901;',
		'tb-check': '&#xe902;',
		'tb-facebook': '&#xe903;',
		'tb-favicon-theband': '&#xe904;',
		'tb-location': '&#xe905;',
		'tb-phone': '&#xe906;',
		'tb-search': '&#xe907;',
		'tb-social-email': '&#xe908;',
		'tb-social-instagram': '&#xe909;',
		'tb-social-linkedin': '&#xe90a;',
		'tb-social-pinterest': '&#xe90b;',
		'tb-social-snapchat': '&#xe90c;',
		'tb-social-twitter': '&#xe90d;',
		'tb-social-youtube': '&#xe90e;',
		'tb-ticket': '&#xe90f;',
		'tb-user': '&#xe910;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/tb-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
