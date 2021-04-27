from django.urls import path, include

from django.contrib import admin
from django.contrib.auth import views as auth_view
import knowledgeapp.views as view

from . import sign

admin.autodiscover()

urlpatterns = [
    path('', include('django.contrib.auth.urls')),
    path('signup/', sign.SignUp.as_view(), name='signup'),
    path("admin/", admin.site.urls),
    path("", view.index, name="index"),
    path("explore", view.explore, name="explore"),
    path("course/<int:id>", view.course, name="course"),
    path("contact", view.contact, name="contact"),
    path("requestcourse", view.requestcourse, name="requestcourse"),
]
