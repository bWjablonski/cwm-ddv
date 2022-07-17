from django.db import models
from django.conf import settings


class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, null=False, blank=False, on_delete=models.CASCADE
    )

    def __str__(self):
        return (
            str(self.pk) + " " + str(BaseModel.__class__) + " " + str(self.created_at)
        )

    class Meta:
        abstract = True


class NamedModel(BaseModel):
    name = models.CharField(max_length=256, blank=False, null=False)

    def __str__(self):
        super().__str__() + "  " + str(self.name)

    class Meta:
        abstract = True


class Link(NamedModel):
    link = models.TextField()


class Task(NamedModel):
    done = models.BooleanField()
