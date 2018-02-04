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
manager = Manager(app)

class TextBox(FlaskForm):
	box = StringField("Text", validators = [Required()])
	submit = SubmitField("Submit")

@app.route('/')
def index():
	user_agent = request.headers.get("User-Agent")
	response = make_response("<h1> Hello World - Athreya</h1>")
	return response

@app.route('/html')
def html():
	return render_template("index.html")

@app.route('/setcookie')
def cook():
	if(request.cookies.get("Athreya") == None):	
		response = make_response("Cookie has been set :)")
		response.set_cookie("Athreya","19")
	else:
		response = make_response("Cookie has already been set")
	return response

@app.route('/image')
def image():
	filename = "Norbert.gif"
	return send_file(filename,mimetype="image/gif")

@app.route('/getcookies')
def getCook():
	response = request.cookies
	return str(response)
@app.route('/<name>')
def user(name):
	return "<h1> Hello %s!</h1>" % name
@app.route('/robots.txt')
def rob():
	return abort(403)

@app.route('/tostdout')
def tostdout():
	print (str(session.get("text")))
	return redirect(url_for("index"))


@app.route('/input', methods=['GET','POST'])
def inpBox():
	form = TextBox()
	if form.validate_on_submit():
		session["text"] = form.box.data
		return redirect(url_for("tostdout"))
	return render_template("textbox.html",form=form)

@app.route('/authors')
def authorsres():
	responseString = ""
	authors = requests.get("https://jsonplaceholder.typicode.com/users").content
	authors = json.loads(authors)
	posts = requests.get("https://jsonplaceholder.typicode.com/posts").content
	posts = json.loads(posts)
	for author in authors:
		responseString += "Author: {}".format(author.get("name"))
		postCount = 0
		aID = author.get("id")
		for post in posts:
			if(aID == post.get("userId")):
				postCount +=1
		responseString += "&nbsp"*10
		responseString += "Post Count: {}".format(postCount)
		responseString += '<br>'
	return responseString

if __name__ == "__main__":
	manager.run()
