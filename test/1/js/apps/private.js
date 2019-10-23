apps_root.private = Item({
  type: 'private',
  id: 'private',
  text: 'الخاص',
  parent: 'main',
  dependents: [15,12,13]
})

apps_root.private.run = () => {
    const id = apps_root.private.id
    

  	new_div({parent:'item_' + id, id:'error' + id, clas:'errorBox', html: id})
}

js_files.private = true
