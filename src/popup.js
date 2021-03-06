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

import css from "./app.css";

const Backbone = require("backbone");
const $ = require("jquery");
import _ from "lodash";

import {randomProblem} from './cses';


$(document).ready(function () {
    let btn = $('body').append(`<input class='rounded p-2 hover:bg-gray-500 hover:text-white' type='button' value='Random Problem'/>`);
    btn.click(function () {
        let problem = randomProblem();
        console.log('clicked', problem);
        window.location.href = `https://cses.fi/${problem}`;
    });
});
