from django.shortcuts import render
from .models import *
from django.core.mail import EmailMessage


def index(req):
    return render(req,"index.html")

def explore(req):
    info = {
        "infos": Courses.objects.all()
    }
    return render(req,"explore.html",context = info)

def course(req,id):
    info = {
        "infos": Courses.objects.get(id=id)
    }
    return render(req, "course.html", context = info)

def contact(req):
    if req.method == "POST":
        fname = req.POST['first-name']
        lname = req.POST['last-name']
        email = req.POST['email']
        message = req.POST['message']
        msgbody = "name: "+fname+" : "+lname+" email: "+email+" msg: "+message+"....."
        emailphnx = EmailMessage('Feedback of user',msgbody,to=['phoenixcreationweb@gmail.com'])
        emailphnx.send()
        info={
            "msg": "Thank you for your valuable feedback."
        }
        return render(req, "contact.html",context=info)
    else:
        info={
            "msg": ""
        }
        return render(req, "contact.html",context=info)
