# Generated by Django 5.0.2 on 2024-04-19 08:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0004_account_expiry_alter_account_id_transaction_history_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='expiry',
            field=models.DateTimeField(default='00/00/2000'),
        ),
    ]