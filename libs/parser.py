import json

import requests
from bs4 import BeautifulSoup


def get_by_url(url):
    response = requests.get(url, headers={
        'User-Agent':'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2224.3 Safari/537.36'
        }
    )

    return response.text

def get_by_file(file_path):
    with open(file_path, 'r', encoding = 'utf-8') as f:
        return f.read()

def write(file_path, data):
    with open(file_path, 'w', encoding = "utf-8") as j:
        json.dump(data, j, indent = 4, ensure_ascii=False)

def parse(content):
    

    soup = BeautifulSoup(content, 'lxml')

    with open("date.json", 'r', encoding = "utf-8") as j:
        data = json.load(j)

    for element in soup.find_all('div', {"class": "item__line"}):
        
        new_element = {
            "img": "",
            "title":"",
            "info":"",
            "brand": "",
            "cost":"",
        }
    
        cost = element.find_all("span", {"class": "price"})[0].text
        cost = cost.replace(' ', '')
        cost = cost.replace('\n', '')
        new_element["cost"] = cost

    
        if element.find_all('img', {"class": "large-picture-img photo-count-show"}):
            new_element["img"] = element.find_all('img', {"class": "large-picture-img photo-count-show"})[0]

        elif element.find_all('li'):
            new_element["img"] = element.find_all('li')[0].find_all("img")[0]["src"]
            
        else:
            try:
                new_element["img"] = element.find_all("img")[0]["src"]
            except:
                pass


        title = element.find_all("span", {"itemprop": "name"})[0].text
        title = title.replace('\n', '')

        new_element["title"] = " ".join(title.split())
        new_element["info"] = " ".join(title.split())

        data.append(new_element)

        write("date.json", data)

if __name__ == "__main__":
    parse(content = get_by_file("./text.txt"))
