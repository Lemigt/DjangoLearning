# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2019-03-16 09:00
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0008_cart'),
    ]

    operations = [
        migrations.AddField(
            model_name='cart',
            name='isselect',
            field=models.IntegerField(default=0),
        ),
    ]
