# Smart Mirror [![Travis](https://img.shields.io/travis/aggarwalneeraj141/smart-mirror.svg)]()
Software for a smart mirror that informs the user of basic weather and calendar events.

![preview](https://cloud.githubusercontent.com/assets/7104017/22235705/0a81f616-e1b6-11e6-811f-23c4ee683c70.png)

## Customize

### Weather Data
You can change the units and location of the weather data that is being pulled. 

Navigate to `smart-mirror->public->app->weather->weather.service.js`

In the function getWeather(), you will find `url: [long url to pull weather data]`.

**To change location**

Replace `?q=LosAltos,CA` with `?q=[yourcity]`
Make sure not to add any spaces or underscores.

**To change units**

For Kelvin, delete `&units=imperial`

For Celcius, replace `&units=imperial` with `&units=metric`

### News Source
You can change the source of your news. Because [News API](https://newsapi.org) is used, you can set the source. See a list of sources [here](https://newsapi.org/sources).

Navigate to `smart-mirror->public->app->news->news.service.js`

In the function getNews(), you will find `url: [long url to pull news data]`.

To change source, change from `source=time` to the source of your choice by removing time. In the [news list](https://newsapi.org/sources), below the icons, is the parameter you should use to replace `time` (Time was set as default).

## How to Run
Run in terminal:

`cd [to the location you want to keep it]`

`git clone https://github.com/aggarwalneeraj141/smart-mirror.git`

`cd smart-mirror`

`npm install`

`npm start`

Go to [localhost:1337](http://localhost:1337) in a browser

## License
Licensed under the ISC License.
