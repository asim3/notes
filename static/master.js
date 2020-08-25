const website_href = window.location.href.split('?')[0]

const parse_tags = function (text) {

    const reg_exp = /\.\.([^\.\n\s]*)\.\.([^\n]*)/
    const html_tags = [
        { tag: "title", type: "title", start: `div class='title'`, end: "div" },
        { tag: "عنوان", type: "title", start: `div class='jumbotron title arabic'`, end: "div" },
        { tag: "sub_title", type: "sub_title", start: `div class='sub_title'`, end: "div" },
        { tag: "فرعي", type: "sub_title", start: `div class='sub_title arabic'`, end: "div" },
        { tag: "raw", type: "raw", start: `div class='raw'`, end: "div" },
        { tag: "text", type: "text", start: `div class='text'`, end: "div" },
        { tag: "نص", type: "text", start: `div class='text arabic'`, end: "div" },
        { tag: "link", type: "link", start: `div class='btn btn-primary mb-1'`, end: "div" },
        { tag: "link2", type: "link", start: `div class='btn btn-success mb-1'`, end: "div" },
        { tag: "رابط", type: "link", start: `div class='btn btn-primary mb-1 arabic'`, end: "div" },
        { tag: "code", type: "code", start: `pre class='alert code'`, end: "pre" },
        { tag: "برمجة", type: "code", start: `pre class='alert code'`, end: "pre" },
    ]
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
    else {
        if (match_tag.type == "raw") {
            return text
        }
        return replace_html(text)
    }
}


const replace_html = (text) => {
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}


const fetch_path = (path, back = false) => {
    fetch(`data/${path}`)
        .then(function (response) {
            if (response.ok) {
                response.text()
                    .then(function (text) {
                        if (!back) {
                            const new_href = website_href + "?path=" + path
                            window.history.pushState(path, null, new_href)
                        }
                        return document.getElementById("body").innerHTML = parse_tags(text)
                    })
            }
            else {
                fetch_path('master.txt')
                console.log(response)
                // TODO: add bootstrap function
                alert(`not found: ${path}`)
            }

        })
}


window.onload = () => {
    const website_init = window.location.href.split('?')[1].split('=')[1]
    fetch_path(website_init)
}

window.onpopstate = function (event) {
    fetch_path(event.state, true)
};