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

import css from "../app.css";

const Backbone = require("backbone");
const $ = require("jquery");
import _ from "lodash";
const mustache = require("mustache");

const api = window.browser || window.chrome;

let page1 = `<div class="flex-grow flex flex-col ">
  <div class="p-2">
    <input type='checkbox' {{checked}} id='disableAdvanced'> Disable Advanced Problems</input>
  </div>
</div>`;

export let OptionsView = Backbone.View.extend({
    tagName: "div",
    className: "block absolute bg-gray-300",
    events: {
        "click #disableAdvanced": "save",
    },
    initialize: function(options) {
        this.dispatcher = options.dispatcher;
        this.listenTo(this.model, "change", this.render);
    },
    render: function() {
        console.log(this.model.attributes);
        let data = { ...this.model.attributes };
        if (data.options) {
            data = _.merge(
                { checked: data.options.ignoreAdvanced ? "checked" : "" },
                data
            );
            let html = mustache.render(page1, data);
            this.$el.html(html);
        } else {
            this.$el.html("");
        }
    },
    save: function (ev) {
        let value = $(ev.target).val();
        this.model.set('options', _.merge(this.model.attributes.options, {ignoreAdvanced: value === "on"}));
        this.dispatcher.trigger('options:save');
    }
});
