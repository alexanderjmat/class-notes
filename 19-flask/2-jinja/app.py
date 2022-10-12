from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension
from random import randint, choice, sample

app = Flask(__name__)
app.config['SECRET_KEY'] = "pianoiscool"
debug = DebugToolbarExtension(app)

COMPLIMENTS = ['cool', 'awesome', 'perfect', 'dazzling', 'dazzling']


@app.route("/")
def home_page():
    return render_template("index.html")

@app.route('/hello')
def say_hi():
    return 

@app.route('/goodbye')
def say_bye():
    html = '''
    <html>
        <body>
            <h1 id="sus">See ya later alligator</h1>
            <a href="/">Just in case you want to stay</a>

        </body>
    </html>
    '''
    return html

# @app.route('/search')
# def search():
#     term = request.args["term"]
#     return f"<h1 id={term}>Search Results For: {term}</h1>"

# @app.route("/post", methods=['POST'])
# def post_demo():
#     return "You made a post request"

@app.route('/add-comment')
def add_comment_form():
    return '''
    <h1>Add Comment</h1>
    <form method="POST">
        <input type="text" placeholder="comment" name="comment"/>
        <input type="text" placeholder="username" name="username"/>

        <button>Submit</button>
    </form>
    '''

@app.route("/add-comment", methods=["POST"])
def save_comment():
    comment = request.form['comment']
    username = request.form['username']
    return f'''
        <h1>Thanks, {username}! We saved your comment with text of {comment}</h1>
    '''

@app.route('/r/<subreddit>')
def show_sub(subreddit):
    return f"Welcome to {subreddit}! May all your dreams come true"

POSTS = {
    1: "I like chicken tenders",
    2: "I hate mayo",
    3: "Double rainbow wee",
    4: "Chopin is cool"
}

@app.route("/posts/<int:id>")
def show_post(id):
    post = POSTS[id]
    return f"<p>{post}</p>"

@app.route("/r/<subreddit>/comments/<post_id>")
def show_comments(subreddit, post_id):
        return f"Welcome to {subreddit}! May all your dreams come true. posted using {post_id}"
    
@app.route("/lucky")
def lucky_num():
    num = randint(1, 10)
    return render_template('lucky.html', lucky=num)

@app.route('/form')
def show_form():
    return render_template('form.html')

@app.route('/greet')
def greet():
    username = request.args['username']
    rand_num = randint(0, len(COMPLIMENTS) - 1)
    rand_compliment = COMPLIMENTS[rand_num]
    return render_template('greet.html', username=username, compliment=rand_compliment)

@app.route('/spell/<word>')
def spell_word(word):
    return render_template('spell_word.html', word=word)


@app.route('/form-2')
def show_form_2():
    return render_template('form_2.html')

@app.route('/greet-2')
def greet_2():
    username = request.args['username']
    wants = request.args.get('wants-compliments')
    nice = sample(COMPLIMENTS, 3)
    return render_template('greet_2.html', username=username, wants_compliments=wants, compliments=nice)
    