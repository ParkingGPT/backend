const json_response = `
{
  "person": {
    "name": "John",
    "age": 30,
    "address": {
      "city": "New York",
      "zipcode": "10001"
    }
  }
}
`;

try {
  // Parse the JSON response
  const data = JSON.parse(json_response);

  // Accessing nested values
  const personName = data.person.name;
  const personAge = data.person.age;
  const addressCity = data.person.address.city;
  const addressZipcode = data.person.address.zipcode;

  // Print the values
  console.log("Name:", personName);
  console.log("Age:", personAge);
  console.log("City:", addressCity);
  console.log("Zipcode:", addressZipcode);
} catch (error) {
  console.error(`Error parsing JSON: ${error.message}`);
}
