# Generated by Django 5.0.2 on 2024-03-12 04:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Subject',
            fields=[
                ('idSubject', models.AutoField(primary_key=True, serialize=False)),
                ('nameSubject', models.CharField(max_length=255)),
                ('describeSubject', models.CharField(max_length=255)),
            ],
        ),
    ]