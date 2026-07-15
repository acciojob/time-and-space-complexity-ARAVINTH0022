//your JS code here. If required.
const body = document.querySelector('body');

// Create h1
const h1 = document.createElement('h1');
h1.innerText = "Time, Space, Complexity";
body.appendChild(h1);

// Create first paragraph (Time Complexity)
const p1 = document.createElement('p');
p1.innerText = "Time complexity measures how the runtime of an algorithm increases as the input size grows, helping developers write more efficient code.";
body.appendChild(p1);

// Create second paragraph (Space Complexity)
const p2 = document.createElement('p');
const boldText = document.createElement('b');
boldText.innerText = "Space Complexity";
p2.appendChild(boldText);
p2.appendChild(document.createTextNode(" refers to the amount of memory an algorithm needs to run to completion, often expressed using notation like O(n) to describe linear growth."));
body.appendChild(p2);   