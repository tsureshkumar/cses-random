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

const api = window.browser || window.chrome;

let config = {
    ignoreAdvanced: true,
};

export function getConfig() {
    return config;
}

export function getConfigLive() {
    return new Promise((resolve, reject) => {
        if(!api || !api.storage) {
            resolve(getConfig());
            return;
        }
        api.storage.sync.get("cses-random-config", function (result) {
            if (api.runtime.lastError !== undefined) {
                reject(api.runtime.lastError);
            } else {
                if(!result || !result["cses-random-config"]) resolve(getConfig());
                else {
                    config = result;
                    resolve(result["cses-random-config"]);
                }
            }
        });
    });
}

export function loadConfig(dispatcher) {
    api.storage.sync.get("cses-random-config", function (result) {
        config = result;
        dispatcher.trigger("config:loaded");
    });
}

export function saveConfig(dispatcher, options) {
    api.storage.sync.set({ "cses-random-config": { options } }, function () {
        dispatcher.trigger("status:message", "configuration saved!");
    });
}
