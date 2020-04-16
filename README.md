## Documentation
Documentation can be generated using `jsdoc -c jsdoc.json`. For installation of jsdoc, see https://stackoverflow.com/a/33949058

## WordPress
To include the visualization in a WordPress page, follow these steps:
1. Install [Scripts n Styles](https://wordpress.org/plugins/scripts-n-styles/)
1. Copy and Paste `<div id="karobau_viz"></div>` in the appropriate location
1. While editing the same page or post, Copy and Paste the contents of [wordpress.js](wordpress/wordpress.js) in the second script box
(the one which inserts the script at the bottom of the `body` tag)
1. While editing the same page or post, Copy and Paste the contents of [visualization.css](visualization/visualization.css) in the styles box