import os

from email_validate import validate as email_validate
from phonenumbers import is_valid_number, parse

def order_validate(data:dict) -> bool:
    all_keys = ["name", "telephone", "email", "order", "summ"]

    if not isinstance(data, dict):
        print(10)
        return False

    if len(data.keys()) != 5:
        print(14)
        return False

    for key, value in data.items():
        
        if key not in all_keys:
            print(20, key)
            return False

        if key == "order" and not isinstance(value, list):
            print(24)
            return False

        if key != "order" and not isinstance(value, str):
            print(28)
            return False

        if len(value) < 4 and isinstance(value, str):
            print(32)
            return False

        if key == "email" and not email_validate(value):
            print(36)
            return False   

        if key == "telephone" and not is_valid_number(parse(value)):
            print(40)
            return False

    return True