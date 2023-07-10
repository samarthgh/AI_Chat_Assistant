from flask import Flask , render_template , jsonify , request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/api",methods = ["GET",'POST'])
def qa():
    if(request.method == "POST"):
        data = {"result" : "Welcome to JARVIS, the AI genie at your service, granting your knowledge wishes with lightning-fast answers."}
        return jsonify(data)

    data = {"result" : "Welcome to JARVIS, the AI genie at your service, granting your knowledge wishes with lightning-fast answers."}
    return jsonify(data)    
    return render_template("index.html")

app.run(debug = True )