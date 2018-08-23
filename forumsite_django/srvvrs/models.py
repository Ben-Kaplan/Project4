from django.db import models


class Thread(models.Model):
    thread_title = models.CharField(max_length=100)
    thread_author = models.CharField(max_length=100)

    def __str__(self):
        return self.thread_title


class Post(models.Model):
    post_author = models.CharField(max_length=100)
    post_content = models.CharField(max_length=255)
    thread_id = models.ForeignKey(
        Thread, on_delete=models.CASCADE, related_name='posts')

    def __str__(self):
        return self.post_content
