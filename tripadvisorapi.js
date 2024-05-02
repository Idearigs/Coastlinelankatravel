const apiKey = "AD3A910DB7C646D8888F2179BBF976F0"; // your API key
const url = "https://api.tripadvisor.com/api/AD3A910DB7C646D8888F2179BBF976F0"; // replace with the actual API endpoint

const headers = {
  "Content-Type": "application/json",
  "x-api-key": apiKey,
};

fetch(url, { method: "GET", headers: headers })
  .then((response) => response.json())
  .then((data) => console.log("Review Count:", data.review_count))
  .catch((error) => console.error("Error:", error));
