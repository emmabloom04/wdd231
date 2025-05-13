const baseUrl = "https://developer.nps.gov/api/v1/";
const apiKey = import.meta.env.VITE_NPS_API_KEY;

export async function getParkData() {
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey
    }
  };
  let data = {};
  const response = await fetch(baseUrl + "parks" + "?parkCode=yell", options);
  // check to make sure the reponse was ok.
  if (response.ok) {
    // convert to JSON
    data = await response.json();
  } else throw new Error("response not ok");
  // return just the first row of the data object
  return data.data[0];
}

export const parkInfoLinks = [
  {
    name: "Current Conditions &#x203A;",
    link: "conditions.html",
    // image: park.images[2].url,
    description:
      "See what conditions to expect in the park before leaving on your trip!",
  },
  {
    name: "Fees and Passes &#x203A;",
    link: "fees.html",
    // image: park.images[3].url,
    description: "Learn about the fees and passes that are available.",
  },
  {
    name: "Visitor Centers &#x203A;",
    link: "visitor_centers.html",
    // image: park.images[9].url,
    description: "Learn about the visitor centers in the park.",
  },
];
