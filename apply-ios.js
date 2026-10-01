const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Read component parts
const css = fs.readFileSync('ios-components-css.txt', 'utf8');
const htmlParts = fs.readFileSync('ios-components-html.txt', 'utf8');
const js = fs.readFileSync('ios-components-js.txt', 'utf8');

// 1. Insert CSS after .task-btn.delete:hover rule
const cssAnchor = '.task-btn.delete:hover{ background:var(--red); color:#fff; }';
html = html.replace(cssAnchor, cssAnchor + css);

// 2. Insert HTML before </body>
html = html.replace('</body>', htmlParts + '</body>');

// 3. Update renderTasks to use new menu button instead of old edit button
// Find and replace the task-edit-btn with task-menu-btn
const oldEditBtn = "'<button class=\"task-edit-btn\" data-id=\"'+t.id+'\" aria-label=\"Edit task\">⋯</button>'";
const newMenuBtn = "'<button class=\"task-menu-btn\" data-id=\"'+t.id+'\" aria-label=\"Task menu\">⋯</button>'";
html = html.replace(oldEditBtn, newMenuBtn);

// 4. Insert JavaScript before initEvents() call in boot()
const initEventsCall = 'initEvents();';
html = html.replace(initEventsCall, js + '\n    initEvents();\n    initIosComponents();');

// Write the updated file
fs.writeFileSync('index.html', html, 'utf8');
console.log('iOS components added successfully');