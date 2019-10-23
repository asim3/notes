apps_root.search = Item({
  type: 'search',
  id: 'search',
  text: 'البحث',
  parent: 'main'
})

apps_root.search.run = () => {
    const id = apps_root.search.id
    

  	new_div({parent:'item_' + id, id:'error' + id, clas:'errorBox', html: id})
}

js_files.search = true
