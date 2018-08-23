from django.urls import path
from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework import renderers
from . import views
from rest_framework import renderers


urlpatterns = [
    path('threads/', views.ThreadList.as_view()),
    path('threads/<int:id>', views.ThreadDetail.as_view()),
    path('posts/', views.PostList.as_view()),
    path('posts/<int:id>', views.PostDetail.as_view()),
]
urlpatterns = format_suffix_patterns(urlpatterns)
