# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2019-03-15 06:37
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_auto_20190315_0058'),
    ]

    operations = [
        migrations.AddField(
            model_name='goods',
            name='sales',
            field=models.IntegerField(default=0),
        ),
    ]
