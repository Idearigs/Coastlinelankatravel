import requests
from bs4 import BeautifulSoup as soup
from random import randint
from time import sleep

def get_reviews(url):
    html = requests.get(url)
    bsobj = soup(html.content, 'lxml')

    links = []
    for review in bsobj.findAll('a', {'class': 'review_count'}):
        a = review['href']
        a = 'https://www.tripadvisor.com' + a
        a = a[:(a.find('Reviews')+7)] + '-or{}' + a[(a.find('Reviews')+7):]
        links.append(a)

    reviews = []
    for link in links:
        d = [5,10,15,20,25]
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}
        for i in d:
            html2 = requests.get(link.format(i), headers=headers)
            sleep(randint(1,5))
            bsobj2 = soup(html2.content, 'lxml')
            for r in bsobj2.findAll('q'):
                reviews.append(r.span.text.strip())
    return reviews

url = 'https://www.tripadvisor.com/Attraction_Review-g293962-d19076979-Reviews-Coastline_Lanka_Travels-Colombo_Western_Province.html'  # Replace with the actual URL
print(get_reviews(url))
