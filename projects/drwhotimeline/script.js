$(function() {
	var d_window = $(window);
	var d_document = $(document);
	var d_body = $("body");
	var d_episodes = $("#episodes");
	
	//Create Episodes
	$.each(episodes, function(key, value) {
		d_episodes.append($('\
			<div class="episode" id="'+key+'" style="background-image: url(img/'+key+'.jpg)" >\
				<div class="info">\
					<span class="meta">'+key.toUpperCase()+'</span><br>\
					<h1 class="title">'+value.name+'</h1>\
				</div>\
				<div class="participations"></div>\
				<div class="off">\
					<div class="participations"></div>\
				</div>\
			</div>\
		'));
	});
	
	//Create participations
	$.each(characters, function(code,value) {
		$.each(value.appearances, function(index,appaerance) {
			var episode = appaerance.episode;
			var details = appaerance.details;
			var participations;
			if(!$.inArray("off", details)) {
				participations = $("#"+episode).children(".off").children(".participations");
			} else {
				participations = $("#"+episode).children(".participations");
			}
			var par = $('\
				<div class="character '+code+'" data-index='+index+'"></div>\
			');
			$.each(details, function(index, value) {
				if(value != "off") {
					par.addClass(value);
				}
			})
			participations.append(par);
		});
		
	});
	
	//Position participations
	$(".participations").each(function(index) {
		var children = $(this).children();
		var percent = 100/(children.length+1);
		$.each(children, function(index, value) {
			$(this).css("left", ((index+1)*percent)+"%");
		});
	});
	
	//Set first images
	$(".first").each(function(index) {
		var img = $('<img src="img/'+$(this).attr("class").split(" ")[1]+'.jpg" />');
		$(this).append(img);
	});
	
	//Do the drawing
	drawSVG();
	
	//React to resize
	d_window.resize(function() {
		drawSVG();
	});
});

function sortAppaerances(a, b) {
	var ia = parseInt($(a).attr("data-index"));
	var ib = parseInt($(b).attr("data-index"));
	return ((ia < ib) ? -1 : ((ia > ib) ? 1 : 0));
}

function drawSVG() {
	$("svg").remove();
	var paper = new Raphael(0,0,"100%", $(document).height());
	$("body").append(paper);
	
	$.each(characters, function(key, value) {
		var charsvg = "M ";
		var appaerances = $("."+key).sort(sortAppaerances);
		appaerances.each(function(index) {
			if(index==1) {
				charsvg+="R ";
			}
			var pos = $(this).offset();
			disloc = 8;
			if($(this).hasClass("first")) {
				disloc = 30;
			}
			charsvg += (pos.left+disloc) + " " + (pos.top+disloc) + " ";
		});
		path = paper.path(charsvg);
		path.attr({stroke: value.color, opacity: 0.6, 'stroke-width': 8, 'stroke-linejoin': 'round'});
		//path.glow();
		path.hover(function() {
			this.animate({opacity: 1, 'stroke-width': 16}, 300);
		},
		function() {
			this.animate({opacity: 0.6, 'stroke-width': 8}, 300);
		});
	});
}