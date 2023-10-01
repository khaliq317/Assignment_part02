function describe_city (city:string,country="Pakistan"){
    if (city==="lahore"||"karachi"||"multan"){
        console.log(`${city} is in ${country}`)
    } else {
        console.log(`${city} is not in ${country}`)
    }
};

  describe_city("multan");
  describe_city("ankara");
