$(document).ready(function() {
	var $rootwizard = $('#rootwizard');
	$rootwizard.bootstrapWizard({
		onTabShow: function(tab, navigation, index) {
			var $total = navigation.find('li').length;
			var $current = index + 1;

			if ($current === 1) {
				$rootwizard.find('.pager .previous').hide();
				$rootwizard.find('.pager .next').hide();
				$rootwizard.find('.pager .create-token-btn').hide();
				$rootwizard.find('.pager .start').show();
			}
      else if ($current === 2) {
        $rootwizard.find('.pager .previous').show();
				$rootwizard.find('.pager .next').show();
        $rootwizard.find('.pager .next').addClass("disabled");
				$rootwizard.find('.pager .start').hide();
				$rootwizard.find('.pager .learn-more').hide();
				$rootwizard.find('.pager .tab4').hide();
				$rootwizard.find('.pager .create-token-btn').hide();
				$('#nextbtm').prop('disabled', true);
      }
      else if ($current === 3) {
        $rootwizard.find('.pager .previous').show();
				$rootwizard.find('.pager .next').show();
        $rootwizard.find('.pager .next').addClass("disabled");
				$rootwizard.find('.pager .start').hide();
				$rootwizard.find('.pager .learn-more').hide();
				$rootwizard.find('.pager .tab4').hide();
				$rootwizard.find('.pager .create-token-btn').hide();
				$('#nextbtm').prop('disabled', true);
      }
			else if ($current === 4) {
				$rootwizard.find('.pager .tab4').show();
				$rootwizard.find('.pager .previous').show();
				$rootwizard.find('.pager .finish').hide();
				$rootwizard.find('.pager .learn-more').hide();
				$rootwizard.find('.pager .start').hide();
				$rootwizard.find('.pager .next').hide();
				$rootwizard.find('.pager .create-token-btn').show();
				$('.create-token-btn').find('button').addClass('disabled');
				$('.create-token-btn').find('button').prop('disabled', true);

			}
			// If it's the last tab then hide the last button and show the finish instead
			else if ($current >= $total) {
				$rootwizard.find('.pager .finish').show();
				$rootwizard.find('.pager .previous').show();
				$rootwizard.find('.pager .learn-more').show();
				$rootwizard.find('.pager .next').hide();
				$rootwizard.find('.pager .create-token-btn').hide();
				$rootwizard.find('.pager .tab4').hide();
			}
			else {
				$rootwizard.find('.pager .previous').show();
				$rootwizard.find('.pager .next').show();
				$rootwizard.find('.pager .start').hide();
				$rootwizard.find('.pager .learn-more').hide();
				$rootwizard.find('.pager .tab4').hide();
			}

			$('#rootwizard .start').click(function() {
				// $rootwizard.find("a[href*='tab2']").trigger('click');
			});

			$('#tab1-modal-button').click(function() {
				$rootwizard.find("a[href*='tab2']").trigger('click');
			});

			$('#tab4-modal-continue-button').click(function() {
				$rootwizard.find("a[href*='tab5']").trigger('click');
			});
		}
	});
});

$('#tab2-form').on('keyup change', function(){
    var array = [];
    $("form#tab2-form :input").each(function(){
     var input = $(this); // This is the jquery object of the input, do what you will
     array.push(input.val())
    });
    array = array.filter(function(e){return e});
    if(array.length === 8 ){
	    $('#rootwizard').find('.pager .next').removeClass("disabled");
        $('#nextbtm').prop('disabled', false);
    } else {
	    $('#rootwizard').find('.pager .next').addClass("disabled");
        $('#nextbtm').prop('disabled', true);
    }
});

$('#tab3-form').on('keyup change', function(){
    var array = [];
    $("form#tab3-form :input").each(function(){
     var input = $(this); // This is the jquery object of the input, do what you will
     array.push(input.val())
    });
    array = array.filter(function(e){return e});
    if(array.length === 5 ){
	    $('#rootwizard').find('.pager .next').removeClass("disabled");
        $('#nextbtm').prop('disabled', false);
    } else {
	    $('#rootwizard').find('.pager .next').addClass("disabled");
        $('#nextbtm').prop('disabled', true);
    }
});

$('#checkbox').on("keyup change", function(){
    if($(this).is(':checked')){
	    $('#create-token-btn').removeClass("disabled");
        $('#create-token-btn').prop('disabled', false);
    } else {
        $('#create-token-btn').addClass("disabled");
        $('#create-token-btn').prop('disabled', true);
    }
});

function collectFormData(id) {
		var arr = $(id).find('input').map(function () {
			return ($(this))[0].value;
		});
	return arr;
}