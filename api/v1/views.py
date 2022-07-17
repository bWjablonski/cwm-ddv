# Create your views here.
from .models import Link, Task
from rest_framework import viewsets
from .serializers import *


class FilteredViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
        model = super().get_queryset().model
        return model.objects.filter(author=self.request.user)


class LinkViewSet(FilteredViewSet):
    queryset = Link.objects.all()
    serializer_class = LinkSerializer


class TaskViewSet(FilteredViewSet):
    queryset = Task.objects.all()
    serializer_class = LinkSerializer
