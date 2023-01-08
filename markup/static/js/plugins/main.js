

document.addEventListener("DOMContentLoaded", function () {
    var phoneInputs = document.querySelectorAll('input[data-tel-input]');

    var getInputNumbersValue = function (input) {
        // Return stripped input value — just numbers
        return input.value.replace(/\D/g, '');
    }

    var onPhonePaste = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input);
        var pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            var pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
                // formatting will be in onPhoneInput handler
                input.value = inputNumbersValue;
                return;
            }
        }
    }

    var onPhoneInput = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input),
            selectionStart = input.selectionStart,
            formattedInputValue = "";

        if (!inputNumbersValue) {
            return input.value = "";
        }

        if (input.value.length != selectionStart) {
            // Editing in the middle of input, not last symbol
            if (e.data && /\D/g.test(e.data)) {
                // Attempt to input non-numeric symbol
                input.value = inputNumbersValue;
            }
            return;
        }

        if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
            var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
            formattedInputValue = input.value = firstSymbols + " ";
            if (inputNumbersValue.length > 1) {
                formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
            }
        } else {
            formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
        }
        input.value = formattedInputValue;
    }
    var onPhoneKeyDown = function (e) {
        // Clear input after remove last symbol
        var inputValue = e.target.value.replace(/\D/g, '');
        if (e.keyCode == 8 && inputValue.length == 1) {
            e.target.value = "";
        }
    }
    for (var phoneInput of phoneInputs) {
        phoneInput.addEventListener('keydown', onPhoneKeyDown);
        phoneInput.addEventListener('input', onPhoneInput, false);
        phoneInput.addEventListener('paste', onPhonePaste, false);
    }
})

$(document).ready(function () {
	$("body").css({'visibility': "visible", "opacity": "1"});
	// forms();


	$(".m-bg-cont").each(function() {
		var img = $(this).find("img:first-of-type").attr("src");
		$(this).css("background-image", "url(" + img + ")");
	});
	 


	// NEW TTT

	SmoothScroll({
		// Время скролла 400 = 0.4 секунды
		animationTime: 1000,
		// Размер шага в пикселях 
		stepSize: 100,
	
		// Дополнительные настройки:
	
		// Ускорение 
		accelerationDelta: 30,
		// Максимальное ускорение
		accelerationMax: 2,
	
		// Поддержка клавиатуры
		keyboardSupport: true,
		// Шаг скролла стрелками на клавиатуре в пикселях
		arrowScroll: 50,
	
		// Pulse (less tweakable)
		// ratio of "tail" to "acceleration"
		pulseAlgorithm: true,
		pulseScale: 4,
		pulseNormalize: 1,
	
		// Поддержка тачпада
		touchpadSupport: true,
	  })

	// MAP


		if ($(window).width() > 1001) {
			$(window).scroll(function() {

				var raidrop = $('.mapp-block').offset().top + 54;
				var smokinokukino = $('.mapp-block-scroll-ttt').offset().top;
		
				if ($(window).scrollTop() + $(window).height() >= raidrop) {
					$('.mapp-block-scroll-ttt').addClass('droptop')
				} else {
					$('.mapp-block-scroll-ttt').removeClass('droptop')
				}
		
				if ($(window).scrollTop() + $(window).height() >= raidrop + 316) {
					$('.mapp-block-scroll-ttt').addClass('testt')
				} else {
					$('.mapp-block-scroll-ttt').removeClass('testt')
				}
			 });
		
			var raidrop = $('.mapp-block').offset().top + 100;
			var smokinokukino = $('.mapp-block-scroll-ttt').offset().top;
		
			if ($(window).scrollTop() + $(window).height() >= raidrop) {
				$('.mapp-block-scroll-ttt').addClass('droptop')
			} else {
				$('.mapp-block-scroll-ttt').removeClass('droptop')
			}
		
			if ($(window).scrollTop() + $(window).height() >= raidrop + 316) {
				$('.mapp-block-scroll-ttt').addClass('testt')
			} else {
				$('.mapp-block-scroll-ttt').removeClass('testt')
			}
		}
		else if ($(window).width() > 741) {
			if ($(window).width() < 1001) {
				
				$(window).scroll(function() {
			
					var raidrop = $('.mapp-block').offset().top + 54;
					var smokinokukino = $('.mapp-block-scroll').offset().top;
			
					if ($(window).scrollTop() + $(window).height() >= raidrop) {
						$('.mapp-block-scroll').addClass('droptop')
					} else {
						$('.mapp-block-scroll').removeClass('droptop')
					}
			
					if ($(window).scrollTop() + $(window).height() >= raidrop + 226) {
						$('.mapp-block-scroll').addClass('testt')
					} else {
						$('.mapp-block-scroll').removeClass('testt')
					}
				});
			
				var raidrop = $('.mapp-block').offset().top + 100;
				var smokinokukino = $('.mapp-block-scroll').offset().top;
			
				if ($(window).scrollTop() + $(window).height() >= raidrop) {
					$('.mapp-block-scroll').addClass('droptop')
				} else {
					$('.mapp-block-scroll').removeClass('droptop')
				}
			
				if ($(window).scrollTop() + $(window).height() >= raidrop + 226) {
					$('.mapp-block-scroll').addClass('testt')
				} else {
					$('.mapp-block-scroll').removeClass('testt')
				}
			}
		}
	

		$(window).scroll(function() {
			if ($(window).scrollTop() + $(window).height() + 200 > $('.eks__int-bot-right-text').offset().top) {
				$('#element11').addClass('anim')
				setTimeout(function() {
					$('#element12').addClass('anim')
				}, 100)
				setTimeout(function() {
					$('#element13').addClass('anim')
				}, 200)
				setTimeout(function() {
					$('#element14').addClass('anim')
				}, 300)
				setTimeout(function() {
					$('#element15').addClass('anim')
				}, 400)
				setTimeout(function() {
					$('#element16').addClass('anim')
				}, 500)
			}
		})



	setTimeout(function() {
		let newAnimation21 = new Motus.Animation({
			$el: document.getElementById('element21'),
			keyframes: {
				0: {
					translateX: '0px',
				},
				50: {
					translateX: '-20px',
				}
			}
		});
		Motus.addAnimation(newAnimation21);
		let newAnimation22 = new Motus.Animation({
			$el: document.getElementById('element22'),
			keyframes: {
				0: {
					translateX: '0px',
				},
				50: {
					translateX: '-40px',
				}
			}
		});
		Motus.addAnimation(newAnimation22);
		let newAnimation23 = new Motus.Animation({
			$el: document.getElementById('element23'),
			keyframes: {
				0: {
					translateX: '0px',
				},
				50: {
					translateX: '20px',
				}
			}
		});
		Motus.addAnimation(newAnimation23);
		let newAnimation24 = new Motus.Animation({
			$el: document.getElementById('element24'),
			keyframes: {
				0: {
					translateX: '0px',
				},
				50: {
					translateX: '40px',
				}
			}
		});
		Motus.addAnimation(newAnimation24);
		let newAnimation25 = new Motus.Animation({
			$el: document.getElementById('element25'),
			keyframes: {
				0: {
					rotate: ['0deg'],
					translateY: '0px',
				},
				50: {
					rotate: ['-20deg'],
					translateY: '-40px',
				}
			}
		});
		Motus.addAnimation(newAnimation25);
		let newAnimation26 = new Motus.Animation({
			$el: document.getElementById('element26'),
			keyframes: {
				0: {
					rotate: ['0deg'],
					translateY: '0px',
				},
				50: {
					rotate: ['20deg'],
					translateY: '-40px',
				}
			}
		});
		Motus.addAnimation(newAnimation26);
	
		
		let newAnimation333 = new Motus.Animation({
			$el: document.getElementById('element333'),
			keyframes: {
				0: {
					width: '250px',
					translateX: '50px',
					translateY: '-50px',
				},
				50: {
					width: '376px',
					translateX: '0px',
					translateY: '0px',
				}
			}
		});
		Motus.addAnimation(newAnimation333);

		
		let newAnimation6 = new Motus.Animation({
			$el: document.getElementById('element6'),
			keyframes: {
				20: {
				opacity: {
					from: 0,
					to: 1
				},
				scale: {
					from: 80,
					to: 100,
					unit: "%"
				}
				},
				100: {
				opacity: {
					from: 1,
					to: 1
				}
				}
			}
		});
		Motus.addAnimation(newAnimation6);

		let newAnimation7 = new Motus.Animation({
			$el: document.getElementById('element7'),
			keyframes: {
				20: {
				opacity: {
					from: 0,
					to: 1
				},
				scale: {
					from: 80,
					to: 100,
					unit: "%"
				}
				},
				100: {
				opacity: {
					from: 1,
					to: 1
				}
				}
			}
		});
		Motus.addAnimation(newAnimation7);

		let newAnimation8 = new Motus.Animation({
			$el: document.getElementById('element8'),
			keyframes: {
				20: {
				opacity: {
					from: 0,
					to: 1
				},
				scale: {
					from: 80,
					to: 100,
					unit: "%"
				}
				},
				100: {
				opacity: {
					from: 1,
					to: 1
				}
				}
			}
		});
		Motus.addAnimation(newAnimation8);
		
		let newAnimation9 = new Motus.Animation({
			$el: document.getElementById('element9'),
			keyframes: {
				20: {
				opacity: {
					from: 0,
					to: 1
				},
				scale: {
					from: 80,
					to: 100,
					unit: "%"
				}
				},
				100: {
				opacity: {
					from: 1,
					to: 1
				}
				}
			}
		});
		Motus.addAnimation(newAnimation9);
		
		let newAnimation10 = new Motus.Animation({
			$el: document.getElementById('element10'),
			keyframes: {
				20: {
				opacity: {
					from: 0,
					to: 1
				},
				scale: {
					from: 80,
					to: 100,
					unit: "%"
				}
				},
				100: {
				opacity: {
					from: 1,
					to: 1
				}
				}
			}
		});
		Motus.addAnimation(newAnimation10);


		let newAnimation96 = new Motus.Animation({
			$el: document.getElementById('element96'),
			keyframes: {
				20: {
				opacity: {
					from: 0,
					to: 1
				},
				scale: {
					from: 80,
					to: 100,
					unit: "%"
				}
				},
				100: {
				opacity: {
					from: 1,
					to: 1
				}
				}
			}
		});
		Motus.addAnimation(newAnimation96);

		let newAnimation97 = new Motus.Animation({
			$el: document.getElementById('element97'),
			keyframes: {
				20: {
				opacity: {
					from: 0,
					to: 1
				},
				scale: {
					from: 80,
					to: 100,
					unit: "%"
				}
				},
				100: {
				opacity: {
					from: 1,
					to: 1
				}
				}
			}
		});
		Motus.addAnimation(newAnimation97);

		let newAnimation98 = new Motus.Animation({
			$el: document.getElementById('element98'),
			keyframes: {
				20: {
				opacity: {
					from: 0,
					to: 1
				},
				scale: {
					from: 80,
					to: 100,
					unit: "%"
				}
				},
				100: {
				opacity: {
					from: 1,
					to: 1
				}
				}
			}
		});
		Motus.addAnimation(newAnimation98);
		
		let newAnimation99 = new Motus.Animation({
			$el: document.getElementById('element99'),
			keyframes: {
				20: {
				opacity: {
					from: 0,
					to: 1
				},
				scale: {
					from: 80,
					to: 100,
					unit: "%"
				}
				},
				100: {
				opacity: {
					from: 1,
					to: 1
				}
				}
			}
		});
		Motus.addAnimation(newAnimation99);
		
		let newAnimation910 = new Motus.Animation({
			$el: document.getElementById('element910'),
			keyframes: {
				20: {
				opacity: {
					from: 0,
					to: 1
				},
				scale: {
					from: 80,
					to: 100,
					unit: "%"
				}
				},
				100: {
				opacity: {
					from: 1,
					to: 1
				}
				}
			}
		});
		Motus.addAnimation(newAnimation910);
		


		
	if ($(window).width() < 1001) {
		newAnimation333.stop()
		if ($(window).width() > 741) {

			let newAnimation3333 = new Motus.Animation({
				$el: document.getElementById('element333'),
				keyframes: {
					0: {
						width: '250px',
						translateX: '50px',
						translateY: '-50px',
					},
					50: {
						width: '345px',
						translateX: '0px',
						translateY: '0px',
					}
				}
			});
			Motus.addAnimation(newAnimation3333);
		}
		

	}

		
	if ($(window).width() < 741) {
		newAnimation333.stop()
		
		$('.mapp-block-scroll').removeClass('mapp-block-scroll-ttt')
		
		$('.mapp-block-scroll').removeClass('mapp-block-scroll-ttt')
		$('.mapp-block-scroll').addClass('droptop')
		$('.mapp-block-scroll').addClass('testt')
		
		$('.mapp-block-scroll-phone').css({"width": "381px"})
		$('.mapp-block-scroll-phone').css({"translateX": "0px"})
		$('.mapp-block-scroll-phone').css({"-webkit-transform":"translate(0px,0px)"})
		
	
	}

	}, 1000)
	
	setTimeout(function() {
		if ($(window).width() < 741) {
			$('.mapp-block-scroll').removeClass('mapp-block-scroll-ttt')
			$('.mapp-block-scroll').addClass('droptop')
			$('.mapp-block-scroll').addClass('testt')
		}
	}, 100)


	
	if ($(window).width() > 1251) {
		
		$.jScrollability([
			{
				'selector': '.ekscar-p1',
				'start': 'parent',
				'end': 'parent',
				'fn': {
					'top': {
						'start': 100,
						'end': 15,
						'unit': '%'
					}
				}
			}
		]);
		$.jScrollability([
			{
				'selector': '.ekscar-p2',
				'start': 'parent',
				'end': 'parent',
				'fn': {
					'top': {
						'start': -120,
						'end': 0,
						'unit': '%'
					}
				}
			}
		]);
	}


	$.jScrollability([
		{
			'selector': '.ftrain__cont-train',
			'start': 'parent',
			'end': 'parent',
			'fn': {
				'width': {
					'start': 700,
					'end': 884,
					'unit': 'px'
				},
				'left': {
					'start': 300,
					'end': 140,
					'unit': 'px'
				}
			}
		}
	]);


	

	
	// $.jScrollability([
	// 	{
	// 		'selector': '#element11',
	// 		'start': 'parent',
	// 		'end': 'parent',
	// 		'fn': {
	// 			'width': {
	// 				'start': 80,
	// 				'end': 110,
	// 				'unit': 'px'
	// 			},
	// 			'left': {
	// 				'start': 20,
	// 				'end': 0,
	// 				'unit': 'px'
	// 			}
	// 		}
	// 	}
	// ]);
	// $.jScrollability([
	// 	{
	// 		'selector': '#element12',
	// 		'start': 'parent',
	// 		'end': 'parent',
	// 		'fn': {
	// 			'width': {
	// 				'start': 60,
	// 				'end': 110,
	// 				'unit': 'px'
	// 			},
	// 			'left': {
	// 				'start': 20,
	// 				'end': 0,
	// 				'unit': 'px'
	// 			}
	// 		}
	// 	}
	// ]);
	// $.jScrollability([
	// 	{
	// 		'selector': '#element13',
	// 		'start': 'parent',
	// 		'end': 'parent',
	// 		'fn': {
	// 			'width': {
	// 				'start': 40,
	// 				'end': 110,
	// 				'unit': 'px'
	// 			},
	// 			'left': {
	// 				'start': 20,
	// 				'end': 0,
	// 				'unit': 'px'
	// 			}
	// 		}
	// 	}
	// ]);
	// $.jScrollability([
	// 	{
	// 		'selector': '#element14',
	// 		'start': 'parent',
	// 		'end': 'parent',
	// 		'fn': {
	// 			'width': {
	// 				'start': 80,
	// 				'end': 110,
	// 				'unit': 'px'
	// 			},
	// 			'left': {
	// 				'start': 20,
	// 				'end': 0,
	// 				'unit': 'px'
	// 			}
	// 		}
	// 	}
	// ]);
	// $.jScrollability([
	// 	{
	// 		'selector': '#element15',
	// 		'start': 'parent',
	// 		'end': 'parent',
	// 		'fn': {
	// 			'width': {
	// 				'start': 60,
	// 				'end': 110,
	// 				'unit': 'px'
	// 			},
	// 			'left': {
	// 				'start': 20,
	// 				'end': 0,
	// 				'unit': 'px'
	// 			}
	// 		}
	// 	}
	// ]);
	// $.jScrollability([
	// 	{
	// 		'selector': '#element16',
	// 		'start': 'parent',
	// 		'end': 'parent',
	// 		'fn': {
	// 			'width': {
	// 				'start': 40,
	// 				'end': 110,
	// 				'unit': 'px'
	// 			},
	// 			'left': {
	// 				'start': 20,
	// 				'end': 0,
	// 				'unit': 'px'
	// 			}
	// 		}
	// 	}
	// ]);


	$.jScrollability([
		{
			'selector': '#element1',
			'start': 'parent',
			'end': 'parent',
			'fn': {
				'opacity': {
					'start': 0,
					'end': 100,
					'unit': '%'
				}
			}
		}
	]);
	$.jScrollability([
		{
			'selector': '#element2',
			'start': 'parent',
			'end': 'parent',
			'fn': {
				'opacity': {
					'start': -100,
					'end': 100,
					'unit': '%'
				}
			}
		}
	]);
	$.jScrollability([
		{
			'selector': '#element3',
			'start': 'parent',
			'end': 'parent',
			'fn': {
				'opacity': {
					'start': -200,
					'end': 100,
					'unit': '%'
				}
			}
		}
	]);



	// $.jScrollability([
	// 	{
	// 		'selector': '#element6',
	// 		'start': 'parent',
	// 		'end': 'element8',
	// 		'fn': {
	// 			'opacity': {
	// 				'start': 0,
	// 				'end': 100,
	// 				'unit': '%'
	// 			},
	// 			'font-size': {
	// 				'start': 14,
	// 				'end': 16,
	// 				'unit': 'px'
	// 			}
	// 		}
	// 	}
	// ]);
	// $.jScrollability([
	// 	{
	// 		'selector': '#element7',
	// 		'start': 'parent',
	// 		'end': 'parent',
	// 		'fn': {
	// 			'opacity': {
	// 				'start': -100,
	// 				'end': 100,
	// 				'unit': '%'
	// 			},
	// 			'font-size': {
	// 				'start': 14,
	// 				'end': 16,
	// 				'unit': 'px'
	// 			}
	// 		}
	// 	}
	// ]);
	// $.jScrollability([
	// 	{
	// 		'selector': '#element8',
	// 		'start': 'parent',
	// 		'end': 'parent',
	// 		'fn': {
	// 			'opacity': {
	// 				'start': -200,
	// 				'end': 100,
	// 				'unit': '%'
	// 			},
	// 			'font-size': {
	// 				'start': 14,
	// 				'end': 16,
	// 				'unit': 'px'
	// 			}
	// 		}
	// 	}
	// ]);
	// $.jScrollability([
	// 	{
	// 		'selector': '#element9',
	// 		'start': 'parent',
	// 		'end': 'parent',
	// 		'fn': {
	// 			'opacity': {
	// 				'start': -300,
	// 				'end': 100,
	// 				'unit': '%'
	// 			},
	// 			'font-size': {
	// 				'start': 14,
	// 				'end': 16,
	// 				'unit': 'px'
	// 			}
	// 		}
	// 	}
	// ]);
	// $.jScrollability([
	// 	{
	// 		'selector': '#element10',
	// 		'start': 'parent',
	// 		'end': 'parent',
	// 		'fn': {
	// 			'opacity': {
	// 				'start': -400,
	// 				'end': 100,
	// 				'unit': '%'
	// 			},
	// 			'font-size': {
	// 				'start': 14,
	// 				'end': 16,
	// 				'unit': 'px'
	// 			}
	// 		}
	// 	}
	// ]);
	// $.jScrollability([
	// 	{
	// 		'selector': '#element96',
	// 		'start': 'parent',
	// 		'end': 'parent',
	// 		'fn': {
	// 			'opacity': {
	// 				'start': 0,
	// 				'end': 100,
	// 				'unit': '%'
	// 			},
	// 			'font-size': {
	// 				'start': 9,
	// 				'end': 11.414,
	// 				'unit': 'px'
	// 			}
	// 		}
	// 	}
	// ]);
	// $.jScrollability([
	// 	{
	// 		'selector': '#element97',
	// 		'start': 'parent',
	// 		'end': 'parent',
	// 		'fn': {
	// 			'opacity': {
	// 				'start': -100,
	// 				'end': 100,
	// 				'unit': '%'
	// 			},
	// 			'font-size': {
	// 				'start': 9,
	// 				'end': 11.414,
	// 				'unit': 'px'
	// 			}
	// 		}
	// 	}
	// ]);
	// $.jScrollability([
	// 	{
	// 		'selector': '#element98',
	// 		'start': 'parent',
	// 		'end': 'parent',
	// 		'fn': {
	// 			'opacity': {
	// 				'start': -200,
	// 				'end': 100,
	// 				'unit': '%'
	// 			},
	// 			'font-size': {
	// 				'start': 9,
	// 				'end': 11.414,
	// 				'unit': 'px'
	// 			}
	// 		}
	// 	}
	// ]);
	// $.jScrollability([
	// 	{
	// 		'selector': '#element99',
	// 		'start': 'parent',
	// 		'end': 'parent',
	// 		'fn': {
	// 			'opacity': {
	// 				'start': -300,
	// 				'end': 100,
	// 				'unit': '%'
	// 			},
	// 			'font-size': {
	// 				'start': 9,
	// 				'end': 11.414,
	// 				'unit': 'px'
	// 			}
	// 		}
	// 	}
	// ]);
	// $.jScrollability([
	// 	{
	// 		'selector': '#element910',
	// 		'start': 'parent',
	// 		'end': 'parent',
	// 		'fn': {
	// 			'opacity': {
	// 				'start': -400,
	// 				'end': 100,
	// 				'unit': '%'
	// 			},
	// 			'font-size': {
	// 				'start': 9,
	// 				'end': 11.414,
	// 				'unit': 'px'
	// 			}
	// 		}
	// 	}
	// ]);


	
	$.jScrollability([
		{
			'selector': '#element5',
			'start': 'parent',
			'end': 'parent',
			'fn': {
				'width': {
					'start': 130,
					'end': 201,
					'unit': 'px'
				}
			}
		}
	]);

	
	$.jScrollability([
		{
			'selector': '#element20',
			'start': 'parent',
			'end': 'parent',
			'fn': {
				'width': {
					'start': 100,
					'end': 380,
					'unit': 'px'
				}
			}
		}
	]);


	
	

	if ($(window).width() < 1601) {
		$.jScrollability([
			{
				'selector': '.ftrain__cont-train',
				'start': 'parent',
				'end': 'parent',
				'fn': {
					'width': {
						'start': 600,
						'end': 750,
						'unit': 'px'
					},
					'left': {
						'start': 220,
						'end': 140,
						'unit': 'px'
					}
				}
			}
		]);
	}


	if ($(window).width() < 1251) {

		
		$.jScrollability([
			{
				'selector': '#element20',
				'start': 'parent',
				'end': 'parent',
				'fn': {
					'width': {
						'start': 100,
						'end': 280,
						'unit': 'px'
					}
				}
			}
		]);
		
		$.jScrollability([
			{
				'selector': '.ftrain__cont-train',
				'start': 'parent',
				'end': 'parent',
				'fn': {
					'width': {
						'start': 450,
						'end': 600,
						'unit': 'px'
					},
					'left': {
						'start': 180,
						'end': 107,
						'unit': 'px'
					}
				}
			}
		]);
		$.jScrollability([
			{
				'selector': '.ekscar-p1',
				'start': 'parent',
				'end': 'parent',
				'fn': {
					'top': {
						'start': 1000,
						'end': 175,
						'unit': 'px'
					}
				}
			}
		]);
		$.jScrollability([
			{
				'selector': '.ekscar-p2',
				'start': 'parent',
				'end': 'parent',
				'fn': {
					'top': {
						'start': -800,
						'end': -178,
						'unit': 'px'
					}
				}
			}
		]);
	}
	if ($(window).width() < 1001) {

		
	// $.jScrollability([
	// 	{
	// 		'selector': '#element6',
	// 		'start': 'parent',
	// 		'end': 'parent',
	// 		'fn': {
	// 			'opacity': {
	// 				'start': 0,
	// 				'end': 100,
	// 				'unit': '%'
	// 			},
	// 			'font-size': {
	// 				'start': 9,
	// 				'end': 11.414,
	// 				'unit': 'px'
	// 			}
	// 		}
	// 	}
	// ]);
	// $.jScrollability([
	// 	{
	// 		'selector': '#element7',
	// 		'start': 'parent',
	// 		'end': 'parent',
	// 		'fn': {
	// 			'opacity': {
	// 				'start': -100,
	// 				'end': 100,
	// 				'unit': '%'
	// 			},
	// 			'font-size': {
	// 				'start': 9,
	// 				'end': 11.414,
	// 				'unit': 'px'
	// 			}
	// 		}
	// 	}
	// ]);
	// $.jScrollability([
	// 	{
	// 		'selector': '#element8',
	// 		'start': 'parent',
	// 		'end': 'parent',
	// 		'fn': {
	// 			'opacity': {
	// 				'start': -200,
	// 				'end': 100,
	// 				'unit': '%'
	// 			},
	// 			'font-size': {
	// 				'start': 9,
	// 				'end': 11.414,
	// 				'unit': 'px'
	// 			}
	// 		}
	// 	}
	// ]);
	// $.jScrollability([
	// 	{
	// 		'selector': '#element9',
	// 		'start': 'parent',
	// 		'end': 'parent',
	// 		'fn': {
	// 			'opacity': {
	// 				'start': -300,
	// 				'end': 100,
	// 				'unit': '%'
	// 			},
	// 			'font-size': {
	// 				'start': 9,
	// 				'end': 11.414,
	// 				'unit': 'px'
	// 			}
	// 		}
	// 	}
	// ]);
	// $.jScrollability([
	// 	{
	// 		'selector': '#element10',
	// 		'start': 'parent',
	// 		'end': 'parent',
	// 		'fn': {
	// 			'opacity': {
	// 				'start': -400,
	// 				'end': 100,
	// 				'unit': '%'
	// 			},
	// 			'font-size': {
	// 				'start': 9,
	// 				'end': 11.414,
	// 				'unit': 'px'
	// 			}
	// 		}
	// 	}
	// ]);
		
		$.jScrollability([
			{
				'selector': '#element5',
				'start': 'parent', 
				'end': 'parent',
				'fn': {
					'width': {
						'start': 100,
						'end': 149,
						'unit': 'px'
					}
				}
			}
		]);

		$.jScrollability([
			{
				'selector': '.ftrain__cont-train',
				'start': 'parent',
				'end': 'parent',
				'fn': {
					'width': {
						'start': 200,
						'end': 422,
						'unit': 'px'
					},
					'left': {
						'start': 230,
						'end': 102,
						'unit': 'px'
					}
				}
			}
		]);

	}

	if ($(window).width() > 741) {
		$('.eks2')
	}
	
	if ($(window).width() < 741) {
		$('.mapp-block-scroll').removeClass('mapp-block-scroll-ttt')
		$('.mapp-block-scroll').addClass('droptop')
		$('.mapp-block-scroll').addClass('testt')

		

		$('.mapp-block-scroll-phone').css({"width": "381px"})
		$('.mapp-block-scroll-phone').css({"translateX": "0px"})
		$('.mapp-block-scroll-phone').css({"translateY": "0px"})
		
		
		$.jScrollability([
			{
				'selector': '#element775',
				'start': 'parent',
				'end': 'parent',
				'fn': {
					'width': {
						'start': 60,
						'end': 122,
						'unit': 'px'
					}
				}
			}
		]);
		$.jScrollability([
			{
				'selector': '.ftrain__cont-train',
				'start': 'parent',
				'end': 'parent',
				'fn': {
					'width': {
						'start': 80,
						'end': 300,
						'unit': 'px'
					},
					'left': {
						'start': 200,
						'end': 84,
						'unit': 'px'
					}
				}
			}
		]);
		
		$.jScrollability([
			{
				'selector': '.ekscar-p1',
				'start': 'parent',
				'end': 'parent',
				'fn': {
					'top': {
						'start': 617,
						'end': 417,
						'unit': 'px'
					}
				}
			}
		]);
		$.jScrollability([
			{
				'selector': '.ekscar-p2',
				'start': 'parent',
				'end': 'parent',
				'fn': {
					'top': {
						'start': 0,
						'end': 0,
						'unit': 'px'
					}
				}
			}
		]);


	}
	
	if ($(window).width() < 551) {


		$.jScrollability([
			{
				'selector': '.ftrain__cont-train',
				'start': 'parent',
				'end': 'parent',
				'fn': {
					'width': {
						'start': 80,
						'end': 211,
						'unit': 'px'
					},
					'left': {
						'start': 150,
						'end': 65,
						'unit': 'px'
					}
				}
			}
		]);
	}
	
	if ($(window).width() < 391) {
		$.jScrollability([
			{
				'selector': '.ftrain__cont-train',
				'start': 'parent',
				'end': 'parent',
				'fn': {
					'width': {
						'start': 80,
						'end': 211,
						'unit': 'px'
					},
					'left': {
						'start': 100,
						'end': 31,
						'unit': 'px'
					}
				}
			}
		]);
		
		$.jScrollability([
			{
				'selector': '.ekscar-p1',
				'start': 'parent',
				'end': 'parent',
				'fn': {
					'top': {
						'start': 755,
						'end': 455,
						'unit': 'px'
					}
				}
			}
		]);
	}


	var swiper1 = new Swiper(".muz__popups-popup-swiper1", {
		pagination: {
		el: ".swiper-pagination",
		},
	});
	
	var swiper2 = new Swiper(".muz__popups-popup-swiper2", {
		pagination: {
		el: ".swiper-pagination",
		},
	});
	
	$('.muz__cont-item').click(function() {
		var popup = $(this).data('mp')

		$('.muz__blur').addClass('act')
		$('.muz__popups').addClass('act')
		$('.muz__popups-popup-' +popup).addClass('act')
		
	})

	$('.muz__blur').click(function() {
		var popup = $(this).data('mp')
		console.log('dfdgdfgdfgf');
		$('.muz__blur').removeClass('act')
		$('.muz__popups').removeClass('act')
		$('.muz__popups-popup').removeClass('act')
		
	})

	$('.muz__popups-popup-close').click(function() {
		var popup = $(this).data('mp')

		$('.muz__blur').removeClass('act')
		$('.muz__popups').removeClass('act')
		$('.muz__popups-popup').removeClass('act')
		
	})

	
	$('.prils__cont-mon-right').click(function() {
		var asli = $('.pact')
		if (asli.hasClass('pend')) {
			asli.removeClass('pact')
			$('.psta').addClass('pact')
		}
		else {
			asli.next('.prils__cont-mon-swiper-slide').addClass('pact')
			asli.next('.prils__cont-btns-btn').addClass('pact')
			asli.removeClass('pact')
		}
	})
	$('.prils__cont-mon-left').click(function() {
		var asli = $('.pact')
		if (asli.hasClass('psta')) {
			asli.removeClass('pact')
			$('.pend').addClass('pact')
		}
		else {
			asli.prev('.prils__cont-mon-swiper-slide').addClass('pact')
			asli.prev('.prils__cont-btns-btn').addClass('pact')
			asli.removeClass('pact')
		}
	})
	$('.prils__cont-btns-btn').click(function() {
		var pnado = $(this).data('pact')
		$('.prils__cont-btns-btn').removeClass('pact')
		$(this).addClass('pact')
		$('.prils__cont-mon-swiper-slide').removeClass('pact')
		$('.pact-' +pnado).addClass('pact')
	})



})