import App from "../App.js";

export default class Splash extends lng.Component{
    static _template() {
        return {
            Logo: {
                mount: .5, x: 960, y: 540, color: 0xff01d277,
                texture: lng.Tools.getSvgTexture(App.getPath('images/tmdb-logo.svg'), 600, 500)
            }
        }
    }
}