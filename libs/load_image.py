import json
from io import BytesIO

import requests
from PIL import Image

with open("./date.json", 'r', encoding = 'utf-8') as f:
    data = json.load(f)

for index, element in enumerate(data[0:50]):
    url = element["img"]
    _id = element["id"]

    if url == "":
        url = "/static/imges/engines/default.jpeg"

    elif url != "/static/imges/engines/default.jpeg":

        response = requests.get(url)
        img = Image.open(BytesIO(response.content))
        
        print(_id)
        img.save(f"./static/imges/engines/{_id}.jpeg")
        print("sss")

    data[index]["img"] = url



with open("./date.json", 'w', encoding = "utf-8") as j:
    json.dump(data, j, indent = 4, ensure_ascii=False)