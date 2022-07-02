import json
import os
from configparser import ConfigParser

from flask import Flask, jsonify, make_response, render_template, request

from libs.order_body import order_body
from libs.order_validate import order_validate
from libs.send_email import Email_manager

config = ConfigParser()
config.read('config.ini')
config = config["DEFAULT"]

WHOOSH_ENABLED = os.environ.get('HEROKU') is not None

app = Flask(__name__)

@app.route('/', methods = ['GET'])
def main():
    return render_template("index.html")


@app.route('/get_data')
def get_data():

    with open("data.json", "r", encoding = 'utf-8') as read_file:
        data = json.load(read_file)
        
        data["engine"] = data["engine"][0:50]
        
        response = make_response(jsonify(data))

        return response

@app.route('/<page>', methods = ['GET'])
def page(page):
    
    if page not in ["index", "AKPP", "about", "delivery", "engine", "MKPP"]:
        return make_response("Invalid page")

    return render_template(f"{page}.html")


@app.after_request
def build_cors_preflight_response(response : "Response"):
    
    print('\n', response, end = ' --> ')
    print(response.headers['msg'] if 'msg' in response.headers else "None 'msg'", '\n')
    print(response.headers)

    if config['cors'] == 'True':
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Headers', '*')
        response.headers.add('Access-Control-Allow-Methods', '*')
    
    return response

if __name__ == "__main__":
    app.run()