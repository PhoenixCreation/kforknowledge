from django.shortcuts import render
from .models import *

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
    return render(req, "contact.html")
