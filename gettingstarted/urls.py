from django.urls import path, include

from django.contrib import admin
import knowledgeapp.views as view

admin.autodiscover()

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", view.index,name="index"),
    path("explore", view.explore, name="explore"),
]
