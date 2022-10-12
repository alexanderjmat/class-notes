from flask import Flask, request

app = Flask(__name__)

@app.route("/")
def home_page():

    html = '''
    <html>
        <body>
            <h1 id="welcome">Welcome to this page</h1>
            <a href="/hello">Visit the hello page, if you dare</a>
        </body>
    </html>
    '''
    return html

@app.route('/hello')
def say_hi():
    html = '''
    <html>
        <body>
            <h1 id="sus">Hello there sus</h1>
            <a href="/goodbye">Say goodbye before you leave</a>

        </body>
    </html>
    '''
    return html

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




