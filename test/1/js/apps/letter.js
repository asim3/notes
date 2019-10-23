	function show_letters(obj) {
		new_div({parent:obj.id,id:'letter'+obj.id,clas:'subjectBox'})
		new_div({parent:'letter'+obj.id,clas:'subjectBoxImg',style:'background-image:url(' + STATIC_URL + 'img/'+obj.img+')'})
		new_div({parent:'letter'+obj.id,clas:'subjectBoxSetting',html:svgSettings2})
		new_div({parent:'letter'+obj.id,id:'letter'+'Root'+obj.id,clas:'subjectBoxTitleRoot'})
		new_div({parent:'letter'+'Root'+obj.id,clas:'subjectBoxTitle',html:'الرسالة'})
		new_div({parent:'letter'+'Root'+obj.id,clas:'subjectBoxCountry',style:'background-image:url(' + STATIC_URL + 'country/'+obj.country+'.svg)'})
	}
