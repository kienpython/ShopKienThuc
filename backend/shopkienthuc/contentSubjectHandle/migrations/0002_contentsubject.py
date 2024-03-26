# Generated by Django 5.0.2 on 2024-03-26 11:06

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contentSubjectHandle', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ContentSubject',
            fields=[
                ('idContentSubject', models.AutoField(primary_key=True, serialize=False)),
                ('nameContent', models.CharField(max_length=200)),
                ('contentSubject', models.TextField()),
                ('idTitleContent', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='contentSubjectHandle.titlecontent')),
            ],
        ),
    ]