# Farm Animals

Built in Phaser using [phaser-es6-webpack](https://github.com/lean/phaser-es6-webpack.git)

## Build:

  * Install node.js and npm:
  * Run: `npm install` or `yarn`

## Run the development server:

Run:

```npm run dev```

This will run a server so you can run the game in a browser. It will also start a watch process, so you can change the source and the process will recompile and refresh the browser automatically.

To run the game, open your browser and enter http://localhost:3000 into the address bar.


## Build for deployment:

Run:

```npm run deploy```

This will optimize and minimize the compiled bundle.

## Deploy for cordova:
Make sure to uncomment the cordova.js file in the src/index.html and to update config.xml with your informations. (name/description...)

More informations about the cordova configuration:
https://cordova.apache.org/docs/en/latest/config_ref/

There is 3 platforms actually tested and supported :
- browser
- ios
- android

First run (ios example):

```
npm run cordova
cordova platform add ios
cordova run ios
```

Update (ios example):

```
npm run cordova
cordova platform update ios
cordova run ios
```

This will optimize and minimize the compiled bundle.

## Config:
before you get to work you will surely want to check the config file. You could setup dimensions, webfonts, etc

## Webfonts:
In the config file you can specify which webfonts you want to include. In case you do not want to use webfonts simply leave the array empty

## Credits

Pig sound courtesy: https://freesound.org/people/josepharaoh99/sounds/352698/
Sheep sound courtesy: https://freesound.org/people/Erdie/sounds/34538/
Rooster sound courtesy: https://freesound.org/people/Sclolex/sounds/324210/

## Contributors

https://github.com/RenaudROHLINGER
