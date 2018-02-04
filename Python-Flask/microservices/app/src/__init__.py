from flask import Flask,request, render_template, make_response
from flask import abort, send_file, redirect, url_for, session
from flask import json
from flask_script import Manager
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import Required
import requests

app = Flask(__name__)
app.config["SECRET_KEY"] = "potato cannon"


from .server import *
