# Lightning Example

This project shows an example of webpacking and debugging (in VS Code) a lightning project. Tested on macOS

## Setup

`npm install`

## Run

`npm start`

> Bundles (using webpack) into a single file and serves at `localhost:8081` while listening for changes (i.e, updates code when saving file).

## Debug

1. [Get VS Code](https://code.visualstudio.com/download)
2. Install the [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) plugin.
3. Open the project directory in VS Code.
4. Put breakpoints wherever.
5. Run `npm start` - This will serve the app & launch a browser window, ignore/close it.
6. Use the debugger panel ("no bug" icon on left panel) to run `Launch Chrome against localhost`
    > This will launch a new debugable Chrome instance.
7. Use the newly launched browser window to run through the app.
