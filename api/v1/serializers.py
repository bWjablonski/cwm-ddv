from rest_framework import serializers
from .models import Link, Task


class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = Link


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = Task
