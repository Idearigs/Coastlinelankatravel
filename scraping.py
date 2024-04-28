from bs4 import BeautifulSoup
import requests
import time

def get_review_count(url):
    # Define headers to mimic a browser visit
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    }

    # Send a GET request to the TripAdvisor page
    response = requests.get(url, headers=headers)

    # If the GET request is successful, the status code will be 200
    if response.status_code != 200:
        print('Failed to get page:', response.status_code)
        return

    # Parse the page with BeautifulSoup
    soup = BeautifulSoup(response.text, 'html.parser')

    # Find the HTML element with the review count
    review_count_element = soup.find('span', class_='biGQs _P pZUbB KxBGd')

    # If the review count element is not found, return None
    if review_count_element is None:
        print('Failed to find review count element')
        return

    # Extract the review count from the HTML element
    review_count = int(review_count_element.text)

    return review_count

# Replace 'url' with the URL of the TripAdvisor account
url = 'https://www.tripadvisor.com/Attraction_Review-g293962-d19076979-Reviews-Coastline_Lanka_Travels-Colombo_Western_Province.html'

# Add a delay to prevent rate limiting
time.sleep(1)

print(get_review_count(url))
