from django.db import models

# Create your models here.
class Account(models.Model):
    idAccount = models.AutoField(primary_key=True)
    id_transaction_history = models.IntegerField()
    name = models.CharField(max_length=255)
    accountName = models.CharField(max_length=255)
    emailAddress = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    infringe = models.CharField(max_length=255)
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.name
    
class Student(Account):
    activationCode = models.CharField(max_length=255)
    point = models.IntegerField()
    learningOutcomes = models.IntegerField()

    def check_activation_code(self, code):
        if self.id_transaction_history == code:
            return True
        else:
            return False
        
class Teacher(Account):
    degree = models.CharField(max_length=255)
    phoneNumber = models.CharField(max_length=255)
    bankAccountNumber = models.CharField(max_length=255)
    wage = models.CharField(max_length=255)
    
    def pay(self):
        return self.bankAccountNumber
