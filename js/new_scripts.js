$(() => {
	// Мероприятия
	const tagsSliders = []

	$('.tags_carousel .swiper').each(function (i) {
		$(this).addClass('tags_carousel_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 12,
					slidesPerView: 2
				},
				480: {
					spaceBetween: 12,
					slidesPerView: 3
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 4
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 6
				},
				1280: {
					spaceBetween: 32,
					slidesPerView: 7
				},
				1440: {
					spaceBetween: 42,
					slidesPerView: 8
				}
			}
		}

		tagsSliders.push(new Swiper('.tags_carousel_s' + i, options))
	})


	// Табы
	var locationHash = window.location.hash

	$('body').on('click', '.tabs button', function(e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			const $parent           = $(this).closest('.tabs_container'),
				  activeTab         = $(this).data('content'),
				  $activeTabContent = $(activeTab),
				  level             = $(this).data('level')

			$parent.find('.tabs:first button').removeClass('active')
			$parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			$activeTabContent.addClass('active')
		}
	})

	if (locationHash && $('.tabs_container').length) {
		const $activeTab        = $(`.tabs button[data-content="${locationHash}"]`),
			  $activeTabContent = $(locationHash),
			  $parent           = $activeTab.closest('.tabs_container'),
			  level             = $activeTab.data('level')

		$parent.find('.tabs:first button').removeClass('active')
		$parent.find('.tab_content.' + level).removeClass('active')

		$activeTab.addClass('active')
		$activeTabContent.addClass('active')

		$('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
	}
})