cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "pluginId": "cordova-plugin-whitelist",
        "runs": true
    },
    {
        "file": "plugins/sk-cordova-plugin-toast/www/toast.js",
        "id": "sk-cordova-plugin-toast.toast_plugin",
        "pluginId": "sk-cordova-plugin-toast",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.1",
    "sk-cordova-plugin-toast": "1.0.0"
}
// BOTTOM OF METADATA
});