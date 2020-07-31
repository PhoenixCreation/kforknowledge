from django.shortcuts import render
from .models import *

def index(req):
    return render(req,"index.html")

def explore(req):
    info = {
        "infos": Courses.objects.all()
    }
    return render(req,"explore.html",context = info)
