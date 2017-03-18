# Smart Mirror [![Travis](https://img.shields.io/travis/aggarwalneeraj141/smart-mirror.svg)]()
Software for a smart mirror that informs the user of basic weather and calendar events, maintained with a PIR motion sensor.

![preview](https://cloud.githubusercontent.com/assets/7104017/22235705/0a81f616-e1b6-11e6-811f-23c4ee683c70.png)

## Set Up

### Things you need:

- Raspberry Pi with an OS, like [here](https://www.amazon.com/Raspberry-Pi-RASPBERRYPI3-MODB-1GB-Model-Motherboard/dp/B01CD5VC92/ref=sr_1_4?s=pc&ie=UTF8&qid=1489815602&sr=1-4&keywords=raspberry+pi+3)
- An old monitor that can be ripped apart and used for a screen

![img_9222](https://cloud.githubusercontent.com/assets/7104017/24069366/ac48c6c4-0b63-11e7-974d-4d8ec6621e9e.JPG)
![img_9223](https://cloud.githubusercontent.com/assets/7104017/24069369/c1aaed44-0b63-11e7-96e4-ceefb1e6766f.JPG)
![img_9224](https://cloud.githubusercontent.com/assets/7104017/24069370/c3251712-0b63-11e7-94d9-d2a30e2cae2a.JPG)
- 2 way mirror, like [here](https://www.amazon.com/12-Acrylic-See-Through-Mirror/dp/B017ONH3EG/ref=sr_1_3?ie=UTF8&qid=1489815719&sr=8-3&keywords=2+way+mirror) (I got the 3mm to be safe, but 1mm will work)
- PIR motion sensor, like [here](https://www.amazon.com/SunFounder-HC-SR501-Pyroelectric-Infrared-Arduino/dp/B00G9WR0PQ)

### Motion Sensor Connection

Connect VCC (power - shown in pictures with black wire) to pinout 2 or 4 for 5V (3.3V will not work with sensor).

Connect OUT (output - shown in pictures with white wire) to pinout 7 for GPIO4 (where the code is looking for data).

Connect GND (ground - shown in pictures with grey wire) to pinout 6 to ground and connect the circuit.


![pinout](https://openclipart.org/image/2400px/svg_to_png/264608/gpiopinsv2withpi.png)
![img_9226](https://cloud.githubusercontent.com/assets/7104017/24069440/61043642-0b65-11e7-8501-35c18468be4e.JPG)
![img_9227](https://cloud.githubusercontent.com/assets/7104017/24069439/5ff43996-0b65-11e7-9f10-4471c2d35077.JPG)

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

## Google Calendar

In order to add Google Calendar, you have to create a client-id. To do this:

1. Ensure the calendar you want to use with your smart mirror is publicly accessible.
2. Go to https://console.developers.google.com/flows/enableapi?apiid=calendar and create a new project.
2. Then click on Go to Credentials, then select Overview and then Credentials again until you reach this screen.
![screen](https://cloud.githubusercontent.com/assets/7104017/16212779/f316be6a-36fe-11e6-86a6-11953598e5bc.jpg)
3. Click on the second tab called OAuth consent screen.
4. Select an email address, select a product name and then hit save.
5. Then navigate to the original credentials tab, and select Create credentials -> OAuth client ID
6. Select web application, then add `http://localhost:8000` and `http://localhost:1337` as Authorized Javascript origins, and select Create.
7. It will then give you a pop-up, giving you your client-ID and client secret.
8. Copy your client-ID.
9. In the project directory, navigate to smart-mirror -> public -> app -> calendarAPI.js
10. At the top of the file, replace `var CLIENT_ID = 'insert-client-id-here';` with `var ClIENT_ID = '[YOURCLIENTID]'`
11. Run the project, and then authorize access to your **public** calendar.

## How to Run

### Dashboard

Run in terminal:

`cd [to the location you want to keep it]`

`git clone https://github.com/aggarwalneeraj141/smart-mirror.git`

`cd smart-mirror`

`npm install`

`npm start`

Go to [localhost:1337](http://localhost:1337) in a browser

### Motion Sensor Monitor Control

Inside `py_scripts`, run `detect_motion.py` to check that your motion sensor is properly connected and working.

Then run `monitor_control.py` in the same directory as `monitor_on.sh` and `monitor_off.sh`, which will turn off the monitor after 10 seconds of no motion, and turn on the monitor upon new movement.

## License
Licensed under the ISC License.
