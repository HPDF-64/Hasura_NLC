from src import app
from flask import Flask,request, render_template, make_response
from flask import abort, send_file, redirect, url_for, session
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import Required
from flask import jsonify
import json
from watson_developer_cloud import NaturalLanguageUnderstandingV1
from watson_developer_cloud.natural_language_understanding_v1 \
  import Features, EntitiesOptions, KeywordsOptions, CategoriesOptions


understandingObj = NaturalLanguageUnderstandingV1(
	username = "7aa5394e-0774-4408-80e8-629b45a8aad7",
	password = "8WoT7gj8DGK3",
	version = "2017-02-27"
)

def getAPIResponse(textToConvert):	
	response = understandingObj.analyze(
		text = str(textToConvert),
		features=Features(
			categories=CategoriesOptions()
		)
	)
	return response

class TextBox(FlaskForm):
	box = StringField("Text", validators = [Required()])
	submit = SubmitField("Submit")

'''
Analyze up to 30,000 NLU items per month
1 NLU item = 1 group of 10,000 characters x 1 feature
'''



@app.route("/", methods=['GET','POST'])
def index():
	if(request.method == "POST"):
		textToConvert = request.form.get("text");
		resp = getAPIResponse(textToConvert);
		return jsonify(resp)
	else:
		abort(403)


# @app.route("/",methods=['GET','POST'])
# def home():
# 	form = TextBox()
# 	if form.validate_on_submit():
# 		session["url"] = form.box.data
# 		return redirect(url_for("result"))
# 	return render_template("textbox.html",form=form)

# @app.route("/result")
# def result():
# 	k = str(session.get("url"))
# 	# resp = getResponse("https://hasura.io/")
# 	# print(json.dumps(resp, indent=2))
# 	resp = getResponse(k)
# 	return json.dumps(resp, indent=2)