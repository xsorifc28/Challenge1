import DevLauncher from "wpe-lightning-sdk/DevLauncher";
import App from "./App";

const launcher = new DevLauncher();
launcher.launch(App, {}, {useInspector: false});