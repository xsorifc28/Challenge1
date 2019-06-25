import Browse from "./browse/Browse.js";
import Background from "./components/Background.js";
import Tools from "../lib/Tools.js";

export default class AppContents extends lng.Component {
    static _template(){
        return {
            y: 30,
            Background: {
                type: Background
            },
            Movie:{
                type: Browse, alpha: 0
            },
            Tv:{
                type: Browse, alpha: 0
            }
        };
    }

    _init() {
        this._setState("Movies");
    }

    _focus() {
        this.patch({
            smooth: {y: [0, {duration: .6}]}
        });
    }

    _unfocus() {
        this.patch({
            smooth: {y: [30, {duration: .6}]}
        });
    }

    syncHomeData(data){
        data.forEach((data)=>{
            this.tag(Tools.ucFirst(data.type)).data = data;
        });
    }

    static states(){
        return {
        }
    }
    static _states() {
        return [
            class Movies extends this {
                $enter(){
                    this.tag("Movie").setSmooth("alpha",1);
                }
                $exit(){
                    this.tag("Movie").setSmooth("alpha",0);
                }
                _getFocused() {
                    return this.tag("Movie");
                }
                _updatePreview(item){
                    this.tag("Movie").setContent(item);
                }
            }
        ]
    }

    $onItemFocus({item}) {
        this.tag("Background").item = item;
        this._updatePreview(item);
    }

    get default(){
        return "Movies";
    }
}