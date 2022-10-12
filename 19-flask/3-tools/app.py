from flask import Flask, request, render_template, redirect, flash, jsonify
from random import choice, sample

from flask_debugtoolbar import DebugToolbarExtension


COMPLIMENTS = ["cool", "clever", "tenacious", "awesome", "Pythonic"]

app = Flask(__name__)
app.config['SECRET_KEY'] = "oh-so-secret"

debug = DebugToolbarExtension(app)
app.config["DEBUG_TB_INTERCEPT_REDIRECTS"] = False

MOVIES = ['Amadeus', 'Chicken Run', 'The Matrix']


@app.route('/')
def index():
    """Return homepage."""

    return render_template("hello.html")


# SIMPLE VERSION OF FORM/GREET

@app.route('/form')
def show_form():
    """Show greeting form."""

    return render_template("form.html")


@app.route('/movies')
def show_all_movies():
    '''Show list of all movies in fake DB'''
    return render_template("movies.html", movies=MOVIES)

@app.route("/movies/new", methods=["POST"])
def add_movie():
    title = request.form["title"]
    MOVIES.append(title)
    flash("Created movie!")
    return redirect('/movies')

@app.route('/movies/json')
def get_movies_json():
    return jsonify(list(MOVIES))