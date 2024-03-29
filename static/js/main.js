const website_href = window.location.href.split('?')[0]

const loading_div = `<div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 100%;"></div>`

const replace_html = (text) => {
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

const highlight_code = function () {
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block)
    })
}

const set_all_links_attribute = function () {
    document.querySelectorAll('a').forEach(obj => {
        obj.setAttribute('target', '_blank')
        obj.setAttribute('class', 'btn btn-outline-primary')
    })
}

const parse_tags = function (text) {
    const html_tags = [
        { tag: "title", type: "title", start: `div class='title'`, end: "div" },
        { tag: "عنوان", type: "title", start: `div class='jumbotron title arabic'`, end: "div" },
        { tag: "sub_title", type: "sub_title", start: `div class='sub_title'`, end: "div" },
        { tag: "فرعي", type: "sub_title", start: `div class='sub_title arabic'`, end: "div" },
        { tag: "raw", type: "raw", start: `div class='raw'`, end: "div" },
        { tag: "text", type: "text", start: `div class='text'`, end: "div" },
        { tag: "نص", type: "text", start: `div class='text arabic'`, end: "div" },
        { tag: "link", type: "link", start: `div class='btn btn-primary my-1'`, end: "div" },
        { tag: "link2", type: "link", start: `div class='btn btn-success my-1'`, end: "div" },
        { tag: "رابط", type: "link", start: `div class='btn btn-primary mb-1 arabic'`, end: "div" },
        { tag: "code", type: "code", start: `pre class='alert code'`, end: "pre" },
        { tag: "برمجة", type: "code", start: `pre class='alert code'`, end: "pre" },
    ]
    const reg_exp = /\.\.([^\.\n\s]*)\.\.([^\n]*)/
    const match_1 = text.match(reg_exp)
    if (match_1 && match_1[1]) {
        let match_tag = html_tags.find(obj => obj.tag == match_1[1])
        if (!match_tag) {
            match_tag = { tag: "error", type: "error", start: `div class='code' style='background: red;'`, end: "div" }
        }
        if (match_tag.type == "title") {
            if (match_tag.start.indexOf('arabic') == -1) {
                document.body.style.direction = 'ltr'
            }
            else {
                document.body.style.direction = 'rtl'
            }
        }
        let next_html = ""
        const next_text = text.slice(match_1[0].length)
        const next_match = next_text.match(reg_exp)
        if (next_match && next_match[1]) {
            const next_tag_index = next_text.indexOf(next_match[0])
            if (0 < next_tag_index) {
                match_tag.html = next_text.slice(0, next_tag_index).trim()
            }
            next_html = parse_tags(next_text.slice(next_tag_index))
        }
        else {
            match_tag.html = next_text
        }

        if (match_1[2].trim().slice(0, 4) == "http") {
            return `<${match_tag.start} onclick="window.open('${match_1[2].trim()}')">${match_tag.html.trim()}</${match_tag.end}> ${next_html}`
        }
        else if (match_tag.type == "link") {
            return `<${match_tag.start} onclick="fetch_path('${match_1[2].trim()}')">${match_tag.html.trim()}</${match_tag.end}> ${next_html}`
        }
        else if (match_tag.type == "raw") {
            return `<${match_tag.start}>${match_tag.html.trim()}</${match_tag.end}> ${next_html}`
        }
        else {
            return `<${match_tag.start}>${replace_html(match_tag.html.trim())}</${match_tag.end}> ${next_html}`
        }
    }
    return replace_html(text)
}


const get_full_path_links = function (path) {
    const path_list = path.split("/")
    const title = path_list[0].replace(/_/g, ' ').replace("index.html", "Asim's Quick Reference Guide")
    let full_path_links = ` 
        <div id="jumbotron" class="jumbotron pt-4 pb-0">
            <h1 class="capitalize">${title}</h1>
            <div class="progress" id="loading_div"></div>
            <ul class="breadcrumb m-0 pl-0"> 
                <li class="breadcrumb-item">
                    <span class="breadcrumb-link" onclick="fetch_path('index.html')">notes</span>
                </li>`
    path_list.map((path_text, dir_index) => {
        if (path_text.slice(-3) === ".md") {
            full_path_links += `
                <li class="breadcrumb-item active">
                    ${path_text.slice(0, -3).replace(/_/g, ' ')}
                </li>`
        }
        else if (path_text.slice(-5) === ".html") {
            full_path_links += `
                <li class="breadcrumb-item active">
                    ${path_text.slice(0, -5).replace(/_/g, ' ')}
                </li>`
        }
        else {
            let path_full_href = ""
            path_list.map((x, i) => {
                if (i <= dir_index) {
                    path_full_href += x + "/";
                }
            })
            full_path_links += `
            <li class="breadcrumb-item">
                <span class="breadcrumb-link" onclick="fetch_path('${path_full_href}index.md')">
                    ${path_text.replace(/_/g, ' ')}
                </a>
            </li>`
        }
    })
    full_path_links += `</ul> </div>`
    return full_path_links
}

const get_path_init_html = function (path) {
    return new Promise(function (resolve, reject) {
        dir_path = path.match(/(.*\/)/g) || [""]
        fetch(`${website_href + 'data/' + dir_path[0]}init.html`)
            .then(function (response) {
                if (response.ok) {
                    response.text()
                        .then(function (text) {
                            resolve(get_full_path_links(path) + text + "<hr>")
                        })
                }
                else {
                    reject()
                }
            })
    })
}


const fetch_path = function (path, back = false) {
    document.getElementById("loading_div").innerHTML = loading_div
    fetch(website_href + 'data/' + path)
        .then(function (response) {
            if (response.ok) {
                response.text()
                    .then(function (text) {
                        const body_text = path.slice(-3) === ".md" ? markdownit().render(text) : path.slice(-5) === ".html" ? text : parse_tags(text)
                        if (!back) {
                            const new_href = website_href + "?path=" + path
                            window.history.pushState(path, null, new_href)
                        }
                        get_path_init_html(path).then(function (path_init_html) {
                            document.getElementById("body").innerHTML = path_init_html + body_text
                            highlight_code()
                            set_all_links_attribute()
                            window.scrollTo(0, 0)
                            return true
                        })
                            .catch(function () {
                                document.getElementById("body").innerHTML = body_text
                                highlight_code()
                                set_all_links_attribute()
                                window.scrollTo(0, 0)
                                return true
                            })
                    })
            }
            else {
                fetch_path('index.html')
                console.log(response)
                // TODO: add bootstrap function
                alert(`NOT FOUND: ${website_href + path}`)
            }

        })
}


window.onload = () => {
    let website_init_path = window.location.href.split('?')[1] || 'path=index.html'
    website_init_path = website_init_path.split('=')[1] || 'index.html'
    fetch_path(website_init_path)
}

window.onpopstate = function (event) {
    fetch_path(event.state, true)
};