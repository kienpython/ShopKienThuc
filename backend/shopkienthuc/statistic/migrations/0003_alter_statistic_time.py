# Generated by Django 5.0.2 on 2024-04-19 08:51

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('statistic', '0002_alter_statistic_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='statistic',
            name='time',
            field=models.DateField(default=datetime.datetime(2000, 11, 11, 0, 0)),
        ),
    ]