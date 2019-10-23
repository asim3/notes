	function newMSG(obj) {
		new_div({parent:obj.parent,id:'chat'+obj.id,clas:'chatBox'})
		new_div({parent:'chat'+obj.id,id:'chatHead'+obj.id,clas:'chatBoxHead'})
		new_div({parent:'chatHead'+obj.id,clas:'chatBoxImg',style:'background-image:url(' + STATIC_URL + 'img/'+obj.img+')'})
		new_div({parent:'chatHead'+obj.id,clas:'chatBoxTitle',html:obj.parent})
		new_div({parent:'chatHead'+obj.id,clas:'chatBoxSetting',html:svgSettings2})
		if(obj.type=='MSGText') {
			new_div({parent:'chat'+obj.id,clas:'chatBoxSubtext',html:obj.text})
		}
	}
	function show_chats(obj) {
		DATABASE.filter(x => x.parent == obj.id).map( x => newMSG(x) )
	}
