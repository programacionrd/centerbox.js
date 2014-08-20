//Protect code
(function($, window){
	$.fn.centerbox = function()
	{

		//selector
		var element = $(this);

		function resize()
		{

			//Father content properties
			var widthElement = $(element).width();
			var heightElement = $(element).height();

			//Son content properties
			var widthChildren = $(element).children().width();
			var heightChildren = $(element).children().height();

			var topContent = (heightElement - heightChildren) / 2;
			var leftContent = (widthElement - widthChildren) / 2;


			element.children().css({
				top : topContent,
				left : leftContent
			});
		};

		resize();

		$(window).resize(function(){
			resize();
		});

	};

})(jQuery, window);