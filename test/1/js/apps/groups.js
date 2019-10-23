apps_root.groups = Item({
    type: 'groups',
    id: 'groups',
    text: 'الاشتراكات',
    parent: 'main',
    dependents: [1,2,3,4,5,6,7,8,9,10,15,12,13]
})

apps_root.groups.run = () => {
    const id = apps_root.groups.id

    // show_dependents(apps_root.groups)

  	new_div({parent:'item_' + id, id:'error' + id, clas:'errorBox', html: id})
}


js_files.groups = true
