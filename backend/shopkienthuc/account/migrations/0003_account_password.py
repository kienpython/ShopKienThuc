# Generated by Django 5.0.2 on 2024-03-12 12:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_alter_account_id_transaction_history_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='password',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
    ]