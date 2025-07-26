import os
import smtplib
from flask import Flask, request, jsonify
from flask_cors import CORS
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)
CORS(app)

GMAIL_USER = os.environ.get("GMAIL_USER", "buildwithmegh@gmail.com")
GMAIL_PASS = os.environ.get("GMAIL_PASS")  # Set this in your environment securely
TO_EMAIL = "buildwithmegh@gmail.com"

@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.get_json()
    if not data:
        return jsonify({"success": False, "error": "No data provided"}), 400

    # Compose email
    subject = f"[Consultation Request] {data.get('name', 'No Name')}"
    body = f"""
    Name: {data.get('name')}
    Email: {data.get('email')}
    Phone: {data.get('phone')}
    Company: {data.get('company')}
    Role: {data.get('role')}
    Project Type: {', '.join(data.get('projectType', []))}
    Budget: {data.get('budget')}
    Timeline: {data.get('timeline')}
    Project Details: {data.get('details')}
    Tech Stack: {data.get('techStack')}
    Team Size: {data.get('teamSize')}
    How did you hear: {', '.join(data.get('referral', []))}
    Opt-ins: {', '.join(data.get('optIns', []))}
    """

    msg = MIMEMultipart()
    msg["From"] = GMAIL_USER
    msg["To"] = TO_EMAIL
    msg["Subject"] = subject
    msg.attach(MIMEText(body, "plain"))

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(GMAIL_USER, GMAIL_PASS)
            server.sendmail(GMAIL_USER, TO_EMAIL, msg.as_string())
        return jsonify({"success": True})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True) 