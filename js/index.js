var header = document.querySelector('.stillWorks > .header'),
    divider = document.querySelector('.stillWorks > .header > .divider'),
    headerP = document.querySelector('.stillWorks > .header > p'),
    stillWorks = document.querySelector('.stillWorks'),
    animHeader = document.querySelector('.vidEmbeds > .header'),
    animDivider = document.querySelector('.vidEmbeds > .header > .divider'),
    animP = document.querySelector('.vidEmbeds > .header > p');

divider.style.width = (header.offsetWidth - headerP.offsetWidth + 'px');

animDivider.style.width = (animHeader.offsetWidth - animP.offsetWidth + 'px');
