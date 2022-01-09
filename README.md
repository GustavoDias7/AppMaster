# AppMaster

## Demo
Click <a href="https://appmaster.netlify.app/">here</a> to access the website.

## Features

## 1) ScrollToElement Component

When the &#60;ScrollTo&#62; component is clicked, the page scrolls to the selected element. <br />
Set a css selector of your target element for the 'to' prop.<br />

Example:<br />
&#60;ScrollTo to="#title"&#62;Scroll to 'My Title'&#60;/ScrollTo&#62;<br />
&#60;h1 id="title"&#62;My Title&#60;/h1&#62;<br />

---

## 2) FlexWrapper Component

&#60;FlexWrapper version={1}&#62;<br />
&#8195;&#60;div&#62;1&#60;/div&#62;<br />
&#8195;&#60;div&#62;2&#60;/div&#62;<br />
&#8195;&#60;div&#62;3&#60;/div&#62;<br />
&#8195;&#60;div&#62;4&#60;/div&#62;<br />
&#60;/FlexWrapper&#62;<br />

---

## version=0

(min-width: 769px)<br />
[x, x]<br />
(max-width: 768px)<br />
[x]<br />
[x]<br />

---

## version=1

(min-width: 769px)<br />
[x, x, x, x]<br />
(max-width: 768px)<br />
[x, x]<br />
[x, x]<br />
(max-width: 480px)<br />
[x]<br />
[x]<br />
[x]<br />
[x]<br />

---

## version=2

(min-width: 769px)<br />
[x, x, x]<br />
(max-width: 768px)<br />
[x]<br />
[x]<br />
[x]<br />

---

## version=3

(min-width: 769px)<br />
[x, x, x, x]<br />
(max-width: 768px)<br />
[x, x]<br />
[x, x]<br />
<br />

## version=4

(min-width: 769px)<br />
[x, x, x, x]<br />
(max-width: 768px)<br />
[x, x]<br />
[x, x]<br />
<br />
