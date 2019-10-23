const svg_loading = "<svg xmlns:svg='http://www.w3.org/2000/svg' viewBox='0 0 128 128' xml:space='preserve'><rect x='0' y='0' width='100%' height='100%' fill='#FFFFFF' /><g><circle cx='16' cy='64' r='16' fill='#000000' fill-opacity='1'/><circle cx='16' cy='64' r='14.344' fill='#000000' fill-opacity='1' transform='rotate(45 64 64)'/><circle cx='16' cy='64' r='12.531' fill='#000000' fill-opacity='1' transform='rotate(90 64 64)'/><circle cx='16' cy='64' r='10.75' fill='#000000' fill-opacity='1' transform='rotate(135 64 64)'/><circle cx='16' cy='64' r='10.063' fill='#000000' fill-opacity='1' transform='rotate(180 64 64)'/><circle cx='16' cy='64' r='8.063' fill='#000000' fill-opacity='1' transform='rotate(225 64 64)'/><circle cx='16' cy='64' r='6.438' fill='#000000' fill-opacity='1' transform='rotate(270 64 64)'/><circle cx='16' cy='64' r='5.375' fill='#000000' fill-opacity='1' transform='rotate(315 64 64)'/><animateTransform attributeName='transform' type='rotate' values='0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64' calcMode='discrete' dur='400ms' repeatCount='indefinite'></animateTransform></g></svg>"

	function getCookie(cname) {
		const name = cname + "="
		const decodedCookie = decodeURIComponent(document.cookie).split(';')
		for(let i = 0; i < decodedCookie.length; i++)
		{	let c = decodedCookie[i]
			while (c.charAt(0)==' '){c=c.substring(1)}
			if (c.indexOf(name)==0){return c.substring(name.length, c.length )}
		}
		return ""
	}


	function newCookie(cname,cvalue,exdays) {
		const d = new Date()
		d.setTime(d.getTime() + (exdays*24*60*60*1000))
		const expires = "expires=" + d.toGMTString()
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
	}


	function abbreviation(longNumber) {
		let abbrev = [ "k", "m", "b", "t" ];
		for (let i=abbrev.length-1; i>=0; i--) {
			var size = Math.pow(10,(i+1)*3);
			if(size <= longNumber) {
				// Here, we multiply by decPlaces, round, and then divide by decPlaces.
				// This gives us nice rounding to a particular decimal place.
				longNumber = Math.round(longNumber*10/size)/10;
				// Handle special case where we round up to the next abbreviation
				if((longNumber == 1000) && (i < abbrev.length - 1)) {
					longNumber = 1;
					i++;
				}
				longNumber += abbrev[i]
				break
			}
		}
		return longNumber
	}


	function howLongAgo(longDate) {
		if(longDate) {
			longDate  = Date.parse(longDate.replace(' ', 'T'))
			Diff = Date.now() - longDate
			// 1 year = 31536000000
			if			(Diff < 60000)					{ return "قبل قليل" }
			else if	(Diff < 3600000)				{ return "قبل " + Math.floor(Diff/60000) 				+ " دقيقة " }
			else if	(Diff < 86400000)				{ return "قبل " +  Math.floor(Diff/3600000) 			+ " ساعات " }
			else if	(Diff < 604800000)			{ return "قبل " +  Math.floor(Diff/86400000) 		+ " أيام " }
			else if	(Diff < 6652800000)			{ return "قبل " +  Math.floor(Diff/604800000) 		+ " أسابيع " }
			else if	(Diff < 31536000000)		{ return "قبل " +  Math.floor(Diff/2678400000) 	+ " شهر " }
			else if	(Diff < 3153600000000)	{ return "قبل " +  Math.floor(Diff/31536000000) 	+ " سنة " }
			return "خطأ"
		}
	}


	function new_input(obj) {
		const span = document.createElement("span")
		const input = document.createElement("input")

		span.setAttribute('id', 'label_' + obj.id)
		span.setAttribute('class', 'input_label')
		span.innerHTML = obj.label

		input.setAttribute('id', obj.id)
		input.setAttribute('type', obj.type || 'text')

		if(obj.value) {
			input.setAttribute('value', obj.value)
			span.setAttribute('class', 'input_label input_label_focus')
	}

		span.addEventListener('click', function() {
			const label = document.getElementById('label_' + obj.id)
			label.className = 'input_label input_label_focus'
			document.getElementById(obj.id).focus()
		})

		input.addEventListener('focus', function() {
			const label = document.getElementById('label_' + obj.id)
			label.className = 'input_label input_label_focus'
		})

		input.addEventListener('blur', function() {
			const label = document.getElementById('label_' + obj.id)
			if(document.getElementById(obj.id).value.trim() == '') {
				label.className = 'input_label'
			}
		})

		document.getElementById(obj.parent).appendChild(span)
		document.getElementById(obj.parent).appendChild(input)
	}


	function clear_all_apps() {
		const all_apps = Array.from(document.querySelector('#root').children)
		all_apps.map(function(x) {
			if(x.id == 'item_main') {x.style.display = 'block'}
			else { x.remove() }
		})
	}


	function show_alert(text) {
		if (typeof hide_alert !== 'undefined') {	clearTimeout(hide_alert) }

		const div = document.getElementById("alert")

		if (typeof text !== 'string') { div.remove() }
		else {
			let i = 0
			const start_showing_alert = (div) => {
				if(i<1)				{	i=i+0.05;	div.style.opacity = i;		hide_alert = setTimeout(() => { start_showing_alert(div) }, (30));}
				else if(i<2)	{	i=2;																hide_alert = setTimeout(() => { start_showing_alert(div) }, (3000));}
				else if(i<3)	{	i=i+0.05;	div.style.opacity = 3-i;	hide_alert = setTimeout(() => { start_showing_alert(div) }, (30));}
				else					{ div.remove() }
			}

			if(!div) {
				new_div({parent:'body', id:'alert', clas:'alert color4', html: text, onclick: show_alert})
				start_showing_alert( document.getElementById("alert") )
			}
			else {
				const div = document.getElementById("alert")
				div.innerHTML = text // + '<br>' + div.innerHTML
				start_showing_alert(div)
			}
		}
	}


	function show_dependents(obj) {
		if(obj.dependents) {
			root.DATABASE.filter(x => obj.dependents.includes(x.id) ).map( x => new_app_box(x) )
		}
		else {
			new_div({parent:'item_' + obj.id, id:'error' + obj.id, clas:'errorBox', html:'فارغ'})
		}
	}


	function transition_push_from_right(obj,fromLeft) {
		document.getElementById('block_while_transition').style.display = 'block'
		let values = {
			right: [150,130,128,64,32,16,8,4,2,0] ,
			opacity: [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]
		}
		if(fromLeft) {
			values.right= [10,40,80,120,150,200,250,300,400,500];
			values.opacity= [0.7,0.6,0.5,0.4,0.3,0.2,0.1,0,0,0] ;
		}
		const s = document.getElementById('item_' + obj.id)
		s.className = 'showDivAnimate'
		s.style.right = values.right[0] + 'px'
		s.style.display = 'block'
		let i = 0
		let marg = 0
		if(700<window.innerWidth) {
		  marg = (window.innerWidth - 700)/2
		}
		const sty = function() {
			s.style.right = values.right[i] + marg +'px'
			s.style.opacity = values.opacity[i]
			if(i < 9) {
				i++
				requestAnimationFrame(sty)
			}
			else {
				if(fromLeft) {
					document.getElementById('item_' + obj.parent).style.display = 'block'
					s.remove()
				}
				else {
					document.getElementById('item_' + obj.parent).style.display = 'none'
					window.scrollTo(0,0)
					s.style.display = 'block'
					s.className='showDiv'
				}
				document.getElementById('block_while_transition').style.display = 'none'
			}
		}
		requestAnimationFrame(sty)
	}


	function file_in_head(app_name) {
		return new Promise(function(resolve, reject) {
			if(!js_files.item) {
				show_alert('لم يتم تحميل ملف item')
				reject('لم يتم تحميل ملف item')
				setTimeout(clear_all_apps, 1000)
			}
			else if(js_files[app_name]) {
				resolve(app_name)
			}
			else {
				function run_onerror(app_name) {
					show_alert('الرجاء التأكد من الاتصال بالشبكة 2')
					reject('لم يتم تحميل ' + app_name)
					setTimeout( () => transition_push_from_right({parent: 'main', id: app_name}, 'goBack'), (1000) )
				}

				let src = 'apps/'

				if( ['info', 'appearance'].includes(app_name) ) { src = 'settings/' }

				const css = document.createElement("link")
				css.id = app_name + '_css'
				css.type = "text/css"
				css.rel = "stylesheet"
				css.href = STATIC_URL + "css/"+ src + app_name +".css"
				document.head.appendChild(css)

				const script = document.createElement("script")
				script.id = app_name + '_js'
				script.src = STATIC_URL + "js/"+ src + app_name +".js"
				script.onload = function() { resolve(app_name) }
				script.onerror = function() { run_onerror(app_name) }
				document.head.appendChild(script)
			}
		})
	}


	function send_sign_in_post(id) {
		document.getElementById('sign_in_form_' + id).style.display = 'none'

		new_div({
			parent:'item_' + id,
			id:'loading_img_' + id,
			clas:'loading_box',
			html: svg_loading
		})

		const data = {
			username: document.getElementById(`username_${id}`).value,
			password: document.getElementById(`password_${id}`).value
		}

		send_new_post("sign_in", data)
			.then( function(result) {

				if(result.result == 'valid') {
					document.getElementById('loading_img_' + id).remove()
					change_img('item_main_head_user_img', '7.jpg')
					apps_root.sign_in_form.back()
					apps_root.user = {
						login: true,
						id: 'user',
						img: '7.jpg',
						text: 'المستخدم',
						country: 'sa'
					}
				}
				else {
					show_alert('اسم المستخدم او الرمز السري غير صحيح')
					document.getElementById('loading_img_' + id).remove()
					document.getElementById('sign_in_form_' + id).style.display = 'block'
				}
				console.log(result.result)

			})
			.catch( (error) => { console.log(error) })
	}


	function load_sign_in_form() {
		if(js_files.sign_in_form) {
			return true
		}
		else {
			apps_root.sign_in_form = Item({
				type: 'user',
				id: 'sign_in_form',
				text: 'تسجيل الدخول',
				parent: 'main'
			})
			apps_root.sign_in_form.run = function() {



				const id = 'sign_in_form'
				new_div({
					parent:'item_' + id,
					clas:'errorBox',
					html:'الرجاء تسجيل الدخول'
				})

				new_div({
					parent:'item_' + id,
					id:'sign_in_form_' + id
				})

				new_input({
					parent: 'sign_in_form_' + id,
					id: 'username_' + id,
					label: 'اسم المستخدم'
				})

				new_input({
					parent: 'sign_in_form_' + id,
					id: 'password_' + id,
					type: 'password',
					label: 'الرمز السري'
				})

				new_div({
					parent:'sign_in_form_' + id,
					id: 'sign_in_form_button' + id,
					clas:'button color2',
					html:`تسجيل الدخول`,
					onclick: () => send_sign_in_post(id)
				})

				document.querySelector(`#password_${id}`)
					.addEventListener('keypress', function (e) {
				    const key = e.which || e.keyCode
				    if (key === 13) {
							document.querySelector(`#sign_in_form_button${id}`).click()
				    }
					})
			}
			js_files.sign_in_form = true
			return true
		}
	}


	function send_new_post(path, data_obj) {
		return new Promise(function(resolve, reject) {
			const cookie_name = 'ajax_csrf'
		  const csrf_token = getCookie(cookie_name)
		  if(csrf_token) {
		    const request = new XMLHttpRequest()
		    request.onreadystatechange = function() {
		      if (this.readyState == 4 && this.status !== 200) {
		        reject('error:(' + this.status + ')' + this.statusText)
		      }
		      if (this.readyState == 4 && this.status == 200) {
						if(this.response) {
							if(this.response.status == "ready") {
								resolve(this.response)
							}
							else { reject('error: response does not contain status = done')}
						}
						else { reject('error: response is not in JSON syntax')}
		      }
		    }
		    request.responseType = "json"
		    request.open("POST", document.location.origin + '/' + path, true)
		    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
		    request.setRequestHeader("X-CSRFToken", csrf_token )
				const encode_data = []
				if(data_obj)	{
					for(name in data_obj) {
				    encode_data.push(
							encodeURIComponent(name) + '=' + encodeURIComponent(data_obj[name])
						)
				  }
					const join_encode_data = encode_data.join('&').replace(/%20/g, '+')
					request.send( join_encode_data )
				}
				else { request.send() }
		  }
		  else {
		    console.log('no ajax_csrf cookie')
				fetch(document.location.origin + '/' + path)
				  .then(function(response) {
						const csrf_token = getCookie(cookie_name)
				    if(csrf_token) {
							send_new_post(path, data_obj)
								.then( (response) => resolve(response) )
								.catch( (error) => { reject(error) })
						}
						else {
							reject('error: no csrf_token cookie! ' + csrf_token)
						}
				  })
		  }
		})
	}


	function run_this_app(app) {
		let app_name = app
		if( !((apps_root.user && apps_root.user.login) || ['market', 'search', 'news'].includes(app_name) ) ) {
			load_sign_in_form()
			app_name = 'sign_in_form'
		}

		history.pushState( null, null, document.location.origin + "/" + app_name )
		open_item = app_name
		last_open_item = false

		new_div({
			parent:'root',
			id:'item_' + app_name,
			clas:'showDiv'
		})

		new_div({
			parent:'item_' + app_name,
			id:'loading_img_' + app_name,
			clas:'loading_box',
			html: svg_loading
		})

		transition_push_from_right({id: app_name, parent: 'main'})

		file_in_head(app_name)
			.then( function(app_name) {
				apps_root[app_name].add_navigations()
				apps_root[app_name].run()
				document.getElementById('loading_img_' + app_name).remove()
			})
			.catch( (error) => { console.log(error) })
	}

	// settings
	function change_img(id, img) {
		const div = document.querySelector('#' + id)
		div.innerHTML = ''
		div.style.backgroundImage = `url(${STATIC_URL}img/${img})`
	}


	// when browser go back
	window.onpopinfo = function(e) {
		console.log(open_item)
		if("main" !== open_item) {
			if(user.id == open_item) {
				apps_root.user.back()
			}
			else {
				DATABASE.get(open_item).back()
			}
		}
	}


	js_files.functions = true
