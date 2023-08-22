from flask import Flask, request, render_template 


app = Flask(__name__)

@app.route('/', methods =["GET", "POST"])
def index():
	if request.method == "POST":
		
		# getting input with name = fname in HTML form
		first_name = request.form.get("fname")

		# getting input with name = lname in HTML form 
		email = request.form.get("email") 
		mess = request.form.get("message") 
	return render_template('main.html')

@app.route('/Projects')
def Projects():
	return render_template('Projects.html')

@app.route('/uob-menu-websites')
def uobmenuwesites():
	return render_template('uob-menu-websites.html')

@app.route('/uob-website')
def uobwesite():
	return render_template('uob-website.html')

@app.route('/uob-employee-portal')
def uobemployeeportal():
	return render_template('uob-employee-portal.html')

@app.route('/anime-recomendation-website')
def animeRecomendation():
	return render_template('anime-recomendation-website.html')

@app.route('/Discord-Bot')
def discordBot():
	return render_template('Discord-Bot.html')

if __name__ == '__main__':
	app.run(debug=True)