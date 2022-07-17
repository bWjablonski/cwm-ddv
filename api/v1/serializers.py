from rest_framework import serializers
from .models import Link, Task


class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Link


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
