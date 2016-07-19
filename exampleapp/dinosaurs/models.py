from django.db import models


class Dinosaur(models.Model):
    species = models.TextField()