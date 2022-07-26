const id = (elem) => {
  elem = document.querySelectorAll(elem)

  elem.css = (style) => {
    const args = ["style"]
    if (style) args.push(style)

    elem[style ? "setAttribute" : "removeAttribute"](...agrs)

    return elem
  }

  elem.html = (content) => {
    elem.innerHTML = content
    return elem
  }

  return elem.length === 1 ? elem[0] : elem
}
