/*
Use articleList and DOM navigation methods to collect articleList's
sibling <h1> (var h1), children (var kids), and parent <div>s (var parents).

Use articleList to navigate to the element(s)!
*/

// Start with these variable!
var articleList, h1, kids, parents;

articleList = $('.article-list');

h1 = articleList.siblings();

kids = articleList.children();

parents = articleList.parents();

console.log(articleList);
