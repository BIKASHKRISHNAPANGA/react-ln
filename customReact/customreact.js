function customRender(reactElement,id){
    // const domElement=document.createElement(reactElement.type);
    // domElement.innerHTML=reactElement.childen;
    // domElement.setAttribute("href",reactElement.props.href);
    // domElement.setAttribute("href",reactElement.props.target);
    // container.appendChild(domElement)
const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    for (const key in reactElement.props) {
        domElement.setAttribute(key,reactElement.props[key])
    }
    id.appendChild(domElement)
}
const reactElement={
    type:"a",
    props:{
        href:"https://google.com",
        target:'_blank',
    },
    children:"Click me to visit google",
}
const id=document.getElementById("root");
customRender(reactElement,id);