/*

 Copyright 2021 tsureshkumar2000@gmail.com

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
     http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

*/

window.addEventListener("DOMContentLoaded", function() {
    console.log('ready');
    Array.from(document.getElementsByClassName("nav sidebar")).forEach((e) => {
        e.style.display = "none";
    });
});
Array.from(document.getElementsByClassName("nav sidebar")).forEach((e) => {
    e.style.display = "none";
});
/*

const observer = new MutationObserver(function(mutations) {
    let added = [];
    for (let i = 0; i < mutations.length; i++) {
        let m = mutations[i];
        for (let j = 0; j < m.addedNodes.length; j++) {
            let n = m.addedNodes[j];
            if (n.tagName === "div" && n.classList.contains("sidebar")) {
                added.push(n);
            }
        }
    }
    added.forEach((element) => element.remove());
});

const config = { subtree: true, childList: true };
observer.observe(document.body, config);
*/
