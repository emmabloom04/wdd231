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
  const response = await fetch(baseUrl + "parks" + "?parkCode=glac", options);
  // check to make sure the reponse was ok.
  if (response.ok) {
    // convert to JSON
    data = await response.json();
  } else throw new Error("response not ok");
  // return just the first row of the data object
  return data.data[0];
}

const parkInfoLinks = [
  {
    name: "Current Conditions &#x203A;",
    link: "conditions.html",
    image: "",
    description:
      "See what conditions to expect in the park before leaving on your trip!",
  },
  {
    name: "Fees and Passes &#x203A;",
    link: "fees.html",
    image: "",
    description: "Learn about the fees and passes that are available.",
  },
  {
    name: "Visitor Centers &#x203A;",
    link: "visitor_centers.html",
    image: "",
    description: "Learn about the visitor centers in the park.",
  },
];

export function getInfoLinks(data) {
  const withUpdatedImages = parkInfoLinks.map((item, index) => {
    item.image = data[index + 2].url;
    return item;
  });
  return withUpdatedImages;
}
