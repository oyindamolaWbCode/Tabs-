let tabContainer = document.querySelector('ol')



const tabContent = [{
    title : 'Features',
    icon: 'fa-circle-check',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laudantium explicabo nam provident non, dolorum recusandae sequi ipsam soluta voluptatum. Natus voluptatum obcaecati quasi tenetur cumque necessitatibus odio ab tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptates, iure natus maiores ducimus quaerat blanditiis provident, et id ut non ad velit cum consectetur modi facilis doloremque sit? Ut'
},
{
    title: 'Delivery cont...',
    icon: 'fa-truck',
    text: 'CSS tabs are used to help users navigate websites with multiple pages. They use HTML for structure and CSS for styling Here are some steps for creating responsive tabs with CSSStructure your HTML: Define a section for tabs and tab content in your HTML file'
},
{
 title: 'Shipping',
 icon: 'fa-truck-fast',
 text: 'non, dolorum recusandae sequi ipsam soluta voluptatum. Natus voluptatum obcaecati quasi tenetur cumque necessitatibus odio ab tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptates, iure natus maiores ducimus quaerat blanditiis provident, et id ut non ad velit cum consectetur modi facilis doloremque sit? Ut'
},
{
    title: 'Returns',
    icon: 'fa-person-walking-arrow-loop-left',
    text: 'non, dolorum recusandae sequi ipsam soluta voluptatum. Natus voluptatum obcaecati quasi tenetur cumque necessitatibus odio ab tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptates, iure natus maiores ducimus quaeratCSS tabs are used to help users navigate websites with multiple pages. They use HTML for structure'
}
]

const tab = tabContent.map((content, index) => {
    return `
  
    <i class="fa-regular ${content.icon}"></i><li onclick="displayText(${index})" key="${index}">${content.title}</li>
 
    `
    
})

tabContainer.innerHTML = tab.join('')

const displayText = (index) =>{
    document.querySelector('p').textContent = tabContent[index].text;
}





// <i class="fa-solid fa-truck"></i> <li>Delivery cont...</li>
// <i class="fa-solid fa-truck-fast"></i><li>Shipping</li>
// <i class="fa-solid fa-person-walking-arrow-loop-left"></i><li>Returns</li>