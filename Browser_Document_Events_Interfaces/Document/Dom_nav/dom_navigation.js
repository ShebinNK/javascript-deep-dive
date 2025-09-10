//task1
document.body.firstElementChild
document.body.lastElementChild
document.body.lastElementChild.lastElementChild

//task2
//Is it true that elem.lastChild.nextSibling is always null?
//yes
//Is it true that elem.children[0].previousSibling is always null ?
//No, wrong, because elem.children[0] is the first child among elements. But there may exist non-element nodes before it. So previousSibling may be a text node.

//task3
