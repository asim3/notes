apps_root.workflow = Item({
  type: 'workflow',
  id: 'workflow',
  text: 'المهام',
  parent: 'main',
  dependents: [1,7,11]
})

apps_root.workflow.run = () => {
    const id = apps_root.workflow.id
    

  	new_div({parent:'item_' + id, id:'error' + id, clas:'errorBox', html: id})
}

js_files.workflow = true
