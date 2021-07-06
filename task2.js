/*
You have the following mockup code in your project (which is used also in multiple other places):

class Provider {
  * Gets the weather for a given city
  static getWeather(city) {
    return Promise.resolve(`The weather of ${city} is Cloudy`)
  };
  * Gets the weather for a given city
  static getLocalCurrency(city) {
    return Promise.resolve(`The local currency of ${city} is GBP`)
  };
  * Given Longtitude and latitude, this function returns a city
  static findCity(long, lat) {
    return Promise.resolve(`London`)
  };
 };

You need to write code which would:
1) Find and print in console the city located at laitude/longitude 51.5074 and 0.1278 accordingly
2) Print in console the weather for the city located at lat/long = 51.5074 and 0.1278
3) Print in console in one line the weather and currency for a given city (London)
*/


class Provider {
  /**
  * Gets the weather for a given city
  */
  static getWeather(city) {
    return Promise.resolve(`The weather of ${city} is Cloudy`)
  };
  /**
  * Gets the weather for a given city
  */
  static getLocalCurrency(city) {
    return Promise.resolve(`The local currency of ${city} is GBP`)
  };
  /**
  * Given Longtitude and latitude, this function returns a city
  */
  static findCity(long, lat) {
    return Promise.resolve(`London`)
  };
};

// As the code above is used in multiple other places, I decided not to make any changes, and I will use it as it is to fullfill the tasks. In theory there is also the option of adding additonal methods to the class to fullfill the tasks, but as I don't know how the class is used in other places, I prefer to stick to what I have in order to avoid any unexpected errors.


let lat = 0.1278,
  long = 51.5074;

// ***********
// Response to
// 1) Find and print in console the city located at laitude/longitude 51.5074 and 0.1278 accordingly
Provider.findCity(long, lat)
  .then(res => {
    console.log(
      `The city located at latitude/longitude ${lat} and ${long} is ${res}`
    );
    // Return res to be used as city argument in the getWeather method below
    return res;
  });


// ***********
// Response to
// 2) Print in console the weather for the city located at lat/long = 51.5074 and 0.1278
const responseToQuestion2 = async (long, lat) => {
  const cityRes = await Provider.findCity(long, lat);
  const locationRes = await Provider.getWeather(cityRes);
  console.log(locationRes)
}

responseToQuestion2(long, lat)

// ***********
// Response to
// 3) Print in console in one line the weather and currency for a given city (London)
const responseToQuestion3 = async (city) => {
  const weatherRes = await Provider.getWeather(city);
  const locationRes = await Provider.getLocalCurrency(city);
  console.log(`${weatherRes} && ${locationRes}`)
}

responseToQuestion3('London')
