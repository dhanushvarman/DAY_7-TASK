const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all", true);
xhr.send();
xhr.responseType = "json";

xhr.onload = function displayResult() {
  const countries = xhr.response;

  //a

  let regionsofasia=countries.filter((connames)=>{
    return connames.region=="Asia";
  });
  console.log("Name of the countries in Asia region",regionsofasia);

  //b

  let population=countries.filter((connames)=>{
    return connames.population <=200000;
  });
  console.log("Countries having population less then 2lakhs are",population);

  //c

  countries.forEach((con) => {
    console.log(`Name: ${con.name}
    capital: ${con.capital}
    Flag: ${con.flag}`);
  });

  //d

  let totalPopulation = countries.map((x) => x.population).reduce((intial, current) => {
    return intial + current;
  });
  console.log("Total Population of the Countries:" + totalPopulation);

  //e 
  
  let filterCountries = countries.filter((element) => {
    return element.currencies !== undefined;
  }); 
  let usdCountries = filterCountries.filter((counnames) => {
    for (let i in counnames.currencies) {
      if (counnames.currencies[i].code === "USD") {
        return counnames;
      }
    }
  });
  console.log("Print the country which uses US Dollars as currency: ",usdCountries);
}
