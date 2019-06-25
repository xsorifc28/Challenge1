import Api from "../lib/Api.js";
import Splash from "./splash/Splash.js";

export default class App extends ux.App {
    static getFonts() {
        return [
            {family: 'Black', url: App.getPath('fonts/Roboto-Black.ttf'), descriptors: {}},
            {family: 'Bold', url: App.getPath('fonts/Roboto-Bold.ttf'), descriptors: {}},
            {family: 'Light', url: App.getPath('fonts/Roboto-Light.ttf'), descriptors: {}},
            {family: 'Italic', url: App.getPath('fonts/Roboto-Italic.ttf'), descriptors: {}},
            {family: 'Regular', url: App.getPath('fonts/Roboto-Regular.ttf'), descriptors: {}}
        ]
    }

    static _template() {
        return {
            w: 1920, h: 1080, rect: true, color: 0xff081c24, colorLeft: 0x2001d277, colorBottom: 0xff081c24,
            Splash: {
                type: Splash
            }
        };
    }

    _construct() {
        this._api = new Api();
    }

    _init(){
        this._setState("PrepareContent");
    }

    $api() {
        return this._api;
    }

    $notify(args){
        this.tag("Notification").notify = args;
        this._setState("AppContents.Notification");
    }

    static _states() {
        return [
            class PrepareContent extends this {
                $enter() {
                    // do api call
                }
                _onPrepared(){
                    // finish animation
                }
            }
        ];
    }
}