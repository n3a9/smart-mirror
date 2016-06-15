# Smart Mirror
Software for a smart mirror that informs the user of basic weather and calendar events.

##Customize Weather Data
You can change the units and location of the weather data that is being pulled. Navigate to smart-mirror->public->app->weather->weather.service.js

In the function getWeather(), you will find "url: [long url to pull weather data]."

**To change location**

Replace `?q=LosAltos,CA` with `?q=[yourcity]`
Make sure not to add any spaces or underscores.

**To change units**

For Kelvin, delete `&units=imperial`

For Celcius, replace `&units=imperial` with `&units=metric`

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

## Author
[Neeraj Aggarwal](http://www.neerajaggarwal.com)

Forked from [Sahibjot Saggu](http://www.sahibjot.me/)
