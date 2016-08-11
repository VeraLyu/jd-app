from django.conf.urls import url

from . import views

urlpatterns = [
    # ex: /jds/
    url(r'^$', views.index, name='index'),
    # ex: /jds/5
    url(r'(?P<jd_id>[0-9]+)', views.detail, name='detail'),
]
