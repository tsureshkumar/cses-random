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

import _ from "lodash";

import problemSet from "./problemset.json";

let problems = [];

export function loadProblemSet() {
    for (let v in problemSet) {
        _.each(problemSet[v], (x, i) => {
            problems.push(x[1]);
        });
    }
}

export function randomProblem() {
    if(problems.length == 0) loadProblemSet();
    let randidx = Math.floor(Math.random() * problems.length);
    return problems[randidx];
}
