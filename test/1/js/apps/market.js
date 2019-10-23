apps_root.market = Item({
  type: 'market',
  id: 'market',
  text: 'السوق',
  parent: 'main'
})

apps_root.market.run = () => {
    const id = apps_root.market.id
    

    new_div({parent:'item_' + id, id:'error' + id, clas:'errorBox', html: 'جاري الانتقال الى السوق', style: "color: blue;"})
    //window.location.href = 'http://alzod.com' }
}

js_files.market = true
