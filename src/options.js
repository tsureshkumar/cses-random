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

const mustache = require("mustache");

const Backbone = require("backbone");
const $ = require("jquery");
import _ from "lodash";

import { getConfigLive} from "./config";

import { Options, StatusModel } from "./models";
import { OptionsView, StatusView} from "./views";

const api = window.browser || window.chrome;
const debug = console.debug;

const dispatcher = _.clone(Backbone.Events);

let status = new StatusModel();
let options = new Options();

let optionsView = new OptionsView({ model: options, dispatcher });
let statusView = new StatusView({ model: status, dispatcher });

dispatcher.on("options:save", function () {
    let data = options.attributes.options;
    api.storage.sync.set({ "cses-random-config": data }, function () {
        dispatcher.trigger("status:message", "configuration saved!");
    });
});

function reload() {
    getConfigLive()
        .then((config) => {
            console.log("got config", config);
            options.set('options', config);
        })
        .catch((err) => { console.error("option set error", err); });
}

$(document).ready(function () {
    $(".container").append(optionsView.el);
    optionsView.render();
    $(".container").append(statusView.el);
    statusView.render();

    reload();

});
