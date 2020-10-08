# OpenWeather App

- This app is a cloned version of the result for [weather search](https://www.bing.com/search?q=weather) in bing search engine.
- The App fetches data from [OpenWeather map Api](https://openweathermap.org/api) to display weather information for five days, it consumes the following two api endpoints:
  - 5 Day / 3 Hour Forecast
  - One Call Api
- [React-bootstrap](https://react-bootstrap.github.io/) is used to build weather tabs and other additional componenets in the app.
- Font-awesome icons are used for search bar, while weather icons are copied from bing weather search result.
- To display the 3-hours detailed weather of the day, [Charts.js](https://www.chartjs.org/) library is used to plot a line chart in every weather tab.
- The app also integrates with google map javascript api to allow user to fetch weather by map coordinates in addition to traditional city name search.
- Two measurement systems are supported in app, the user could either see result in metric units or imperial units.
- This is a link for a [live demo](https://mustafa-saleh.github.io/weather-app/).
