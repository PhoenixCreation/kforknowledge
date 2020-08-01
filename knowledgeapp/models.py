from django.db import models

class Courses(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    tags = models.TextField()
    b_des = models.TextField()
    b_link = models.TextField()
    i_des = models.TextField()
    i_link = models.TextField()
    e_des = models.TextField()
    e_link = models.TextField()

    def __str__(self):
        return self.title
