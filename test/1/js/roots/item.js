const svg_push_pin_add = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M8 17h2v5l-2 2v-7zm4.462-6.412c.246.625.437 1.39.506 2.412h-7.936c.297-4.36 2.757-4.163 2.757-7.65 0-1.605-.522-2.35-1.272-3.35h4.512c.518-.807 1.207-1.489 2.019-2h-9.048c0 3.656 1.789 2.979 1.789 5.351 0 1.073-.364 1.59-.915 2.373-1.782 2.532-1.874 4.148-1.874 7.276h12c0-1.27-.021-2.287-.159-3.222-.88-.232-1.688-.64-2.379-1.19zm4.038-9.588c-2.486 0-4.5 2.015-4.5 4.5s2.014 4.5 4.5 4.5c2.484 0 4.5-2.015 4.5-4.5s-2.016-4.5-4.5-4.5zm-.469 6.484l-1.688-1.637.695-.697.992.94 2.115-2.169.697.696-2.811 2.867z'/></svg>"
const svg_push_pin_remove = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M8 17h2v5l-2 2v-7zm4.462-6.412c.246.625.437 1.39.506 2.412h-7.936c.297-4.36 2.757-4.163 2.757-7.65 0-1.605-.522-2.35-1.272-3.35h4.512c.518-.807 1.207-1.489 2.019-2h-9.048c0 3.656 1.789 2.979 1.789 5.351 0 1.073-.364 1.59-.915 2.373-1.782 2.532-1.874 4.148-1.874 7.276h12c0-1.27-.021-2.287-.159-3.222-.88-.232-1.688-.64-2.379-1.19zm8.538-5.088c0 2.485-2.018 4.5-4.5 4.5-2.484 0-4.5-2.015-4.5-4.5s2.016-4.5 4.5-4.5c2.482 0 4.5 2.015 4.5 4.5zm-2-.5h-5v1h5v-1z'/></svg>"
const svg_left = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z'/></svg>"
const svg_right = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z'/></svg>"
const svg_edit = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z'/></svg>"
const svg_garbage = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z'/></svg>"
const svg_eye = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-.199.02-.393.057-.581 1.474.541 2.927-.882 2.405-2.371.174-.03.354-.048.538-.048 1.657 0 3 1.344 3 3zm-2.985-7c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 12c-2.761 0-5-2.238-5-5 0-2.761 2.239-5 5-5 2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5z'/></svg>"
const svg_plus = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z'/></svg>"
const svg_group = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z'/></svg>"



	function new_app_box_xxx(obj) {
				let box_name = 'box_'
				let newSubject = ''
				if(obj.id=='g1'||obj.id=='g2'||obj.id=='g3'||obj.id=='g4'||obj.id=='g5') {
					newSubject = 'newSubject'
				}

				let show_side_options = function() {
					const el = document.getElementById('side'+obj.id)
					const elR = document.getElementById('root'+obj.id)
					const bod = document.getElementsByTagName("BODY")[0]
					if(el.style.maxWidth=="100%")
					{	elR.style.display='none'
						el.style.maxWidth="0px"
						bod.style.overflow="inherit"
					}
					else
					{	elR.style.display='block'
						el.style.maxWidth="100%"
						bod.style.overflow="hidden"
					}
				}

				const remove_this_box = function() {
					const bod = document.getElementsByTagName("BODY")[0]
					bod.style.overflow="inherit"
					document.getElementById(box_name+obj.id).remove()
					console.log('delete this (side'+obj.id+')')
				}

				new_div({parent:'item_' + obj.parent,id:box_name+obj.id,clas:'subjectBox'})
				new_div({parent:box_name+obj.id, clas:'subjectBoxImg '+newSubject,style:'background-image:url(' + STATIC_URL + 'img/'+obj.img+')'})
				new_div({parent:box_name+obj.id, clas:'subjectBoxSetting', html:svg_settings, onclick:show_side_options})
				new_div({parent:box_name+obj.id, id:box_name+'Root'+obj.id,clas:'subjectBoxTitleRoot',onclick:obj.add_navigations})
				new_div({parent:box_name+'Root'+obj.id, clas:'subjectBoxTitle',html:obj.text})
				new_div({parent:box_name+'Root'+obj.id, clas:'subjectBoxCountry',style:'background-image:url(' + STATIC_URL + 'country/'+obj.country+'.svg)'})
				if(obj.public) {
					new_div({parent:box_name+'Root'+obj.id, clas:'subjectBoxViewsSvg', html:svg_planet_earth })
				}
				if(obj.views) {
					new_div({parent:box_name+'Root'+obj.id, clas:'subjectBoxViewsSvg', html:svg_eye })
					new_div({parent:box_name+'Root'+obj.id, clas:'subjectBoxSubtext',html:abbreviation(obj.views)})
				}
				if(obj.time) {
					new_div({parent:box_name+'Root'+obj.id,clas:'subjectBoxSubtext',html:'- '+howLongAgo(obj.time)})
				}
				if(show_side_options) {
					new_div({parent:box_name+obj.id,id:'side'+obj.id,clas:'sideDiv'})
					new_div({parent:box_name+obj.id,id:'root'+obj.id,clas:'sideDivRoot',onclick:show_side_options})
					new_div({parent:'side'+obj.id,clas:'sideOption color2',html:svg_settings})
					new_div({parent:'side'+obj.id,clas:'sideOption color3',html:svg_push_pin_add})
					new_div({parent:'side'+obj.id,clas:'sideOption color4',html:svg_garbage,onclick:remove_this_box})
				}
	}


	const Item = function(obj) {

				function add_touch_scroll_from_sides() {
					const mouse = {
						isDown: false ,
						startX: 0,
						differenceX: 0,
						startTime: 0,
						differenceTime: 0
					}

					function mouseFN(eventListener) {
						const ET = eventListener.type

						if(mouse.isDown) {

							if(ET=='touchend'||ET=='touchcancel') {

								if( mouse.differenceX < -70 && mouse.differenceTime < 500 ) {
									go_back_method()
								}
								else if( mouse.differenceX > 70 && mouse.differenceTime < 500 ) {

									if(last_open_item && apps_root.user.id !== last_open_item && last_open_item !== open_item) {
										const obj_2 = DATABASE.get(last_open_item)

										if(obj_2) { obj_2.add_navigations() }
										else { alert(last_open_item) }
									}
									else { alert(last_open_item) }
								}
								mouse.isDown = false
								mouse.differenceX = 0
							}

							if(ET=='touchmove') {
								const touch = eventListener.touches ? eventListener.touches[0]  : eventListener
								mouse.differenceX = touch.screenX - mouse.startX
								mouse.differenceTime = Date.now() - mouse.startTime
							}
						}
						else if(ET=='touchstart') {
							mouse.isDown = true
							const touch = eventListener.touches ? eventListener.touches[0]  : eventListener
							mouse.startX = touch.screenX
							mouse.startTime = Date.now()
						}
					}

					const div = document.getElementById('item_' + obj.id)

					const eventList = ['touchstart','touchmove','touchend','touchcancel']
					eventList.map( event_name => {
						div.addEventListener( event_name , mouseFN )
					})
				}


				function new_head_box(obj, go_back_method) {
					box_name = 'box_Head_'
					new_div({parent:'item_' + obj.id,id:box_name+obj.id,clas:'subjectBox'})
					let add_navigations = false

					if(! ['settings', 'setting', 'info', 'appearance'].includes(obj.type) ) {
						add_navigations = Item({
							type: "setting",
							id: "setting_" + obj.id,
							img: "",
							text: "الإعدادات",
							parent: obj.id
						}).add_navigations
						new_div({parent:box_name+obj.id, clas:'head_box_svg_1', html: svg_plus})
						new_div({parent:box_name+obj.id, clas:'head_box_svg_2', html: svg_user})
					}
					if(go_back_method) {
						new_div({parent:box_name+obj.id, clas:'goBack', html:svg_right, onclick: go_back_method})
					}
					new_div({parent:box_name+obj.id, html:obj.text, clas:'head_box_title', onclick: add_navigations})
				}


				function go_back_method() {
					try		{ document.getElementById('item_' + obj.parent).style.display = 'block' }
					catch 	{ document.getElementById('item_' + obj.id).remove() ;debugger; }
					open_item = obj.parent
					last_open_item = obj.id
					document.title = ( DATABASE.get(obj.parent) || apps_root.user || obj).text
					transition_push_from_right(obj,"goBack")
					window.scrollTo({ top: obj.scroll })
				}


				return {
					type: obj.type,
					id: obj.id,
					login: obj.login,
					public: obj.public,
					img: obj.img,
					text: obj.text,
					time: obj.time,
					country: obj.country,
					views: obj.views,
					parent: obj.parent,
					dependents: obj.dependents,
					back: go_back_method,
					add_navigations: () => {
						document.title = obj.text
						obj.scroll = window.pageYOffset

						add_touch_scroll_from_sides()

						new_head_box(obj, go_back_method)

						// user , group , section , chat , letter , settings , question , complaint
					}
				}
	}


	js_files.item = true
