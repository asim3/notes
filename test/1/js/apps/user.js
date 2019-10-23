apps_root.user = Item({
  type: 'user',
  login: apps_root.user.login,
  id: apps_root.user.id,
  img: apps_root.user.img,
  text: apps_root.user.text,
  country: apps_root.user.country,
  parent: 'main'
})

apps_root.user.run = () => {
    const id = apps_root.user.id
    

  	new_div({parent:'item_' + id, id:'error' + id, clas:'errorBox', html: id})

}

js_files.user = true
