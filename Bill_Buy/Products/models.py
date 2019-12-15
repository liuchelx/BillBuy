from django.db import models

class Products(models.Model):
    Name = models.CharField(max_length= 200)
    Price = models.IntegerField(default = 0)
    #amount = models.IntegerField(default = 0)
    link = models.URLField(max_length= 200)
    def __str__(self):
        return self.Name