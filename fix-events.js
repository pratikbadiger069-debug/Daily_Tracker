const fs = require('fs');
let h = fs.readFileSync('index.html', 'utf8');

// Replace old edit-btn handler with new menu-btn handler
h = h.replace('var editBtn = e.target.closest(".task-edit-btn");', 'var menuBtn = e.target.closest(".task-menu-btn");');
h = h.replace('if(editBtn){', 'if(menuBtn){');
h = h.replace('var taskEl = editBtn.closest(".task");', 'showActionMenu(menuBtn, menuBtn.dataset.id); return;');

// Remove the old inline editing logic from that handler
h = h.replace('showActionMenu(menuBtn, menuBtn.dataset.id); return;\r\n          document.querySelectorAll(".task.editing").forEach(function(t){ t.classList.remove("editing"); });\r\n          taskEl.classList.add("editing");\r\n          taskEl.querySelector(".edit-name").focus();\r\n          return;', 'showActionMenu(menuBtn, menuBtn.dataset.id); return;');

fs.writeFileSync('index.html', h, 'utf8');
console.log('Events fixed');
