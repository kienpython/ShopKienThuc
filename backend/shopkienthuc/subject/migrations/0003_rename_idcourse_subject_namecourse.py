# Generated by Django 5.0.2 on 2024-03-12 04:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('subject', '0002_subject_idcourse'),
    ]

    operations = [
        migrations.RenameField(
            model_name='subject',
            old_name='idCourse',
            new_name='nameCourse',
        ),
    ]
