// ==UserScript==
// @name       4chan slug remover
// @version    1
// @include http://boards.4chan.org/*
// @include https://www.boards.4chan.org/*
// @include https://boards.4chan.org/*
// @include https://www.boards.4chan.org/*
// ==/UserScript==
var a=document.links;
var i;
var local;
for(i=0;i<a.length;i++)
{
	if(local = a[i].href.match(/\/boards\.4chan\.org\/.*?\/thread\/\d*?\//))
    {
        a[i].href=a[i].href.replace(/\/boards\.4chan\.org\/.*?\/thread\/\d*?\/([^\s]+)/,local);
    }	
}