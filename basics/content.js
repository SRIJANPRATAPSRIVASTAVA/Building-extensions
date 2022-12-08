console.log('Chrome extension ,ready to go');

let paragraphs = document.getElementsByTagName('p');
for (ele of paragraphs)
{
    ele.style['background-color'] = 'white'
    ele.style['border-radius'] = '5px'
}