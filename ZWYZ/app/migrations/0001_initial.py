# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2019-03-14 10:56
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='LoopImg',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('imgurl', models.CharField(max_length=100)),
            ],
        ),
    ]
