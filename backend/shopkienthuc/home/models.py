from django.db import models

# Create your models here.
class Home(models.Model):
    id_subject = models.AutoField(primary_key=True)
    name_subject = models.CharField(max_length=255)
    describe_subject = models.CharField(max_length=255)
    
    def __str__(self):
        return self.name_subject
    

