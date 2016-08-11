#from django.shortcuts import render
from django.http import HttpResponse, HttpResponseBadRequest
from django.shortcuts import redirect, Http404
from django.core import serializers
import json

from .models import JD

# Create your views here.
def index(request):
    if request.method == 'GET':
        jd_list = JD.objects.all()
        return HttpResponse(
                serializers.serialize('json', jd_list),
                content_type='application/json')
    elif request.method == 'POST':
        jd_json = json.loads(request.body.decode("utf-8"))
        jd_object = JD(**jd_json)
        jd_object.save()
        return redirect('/jds/%d' % jd_object.pk)

def detail(request, jd_id):
    if request.method == 'GET':
    # query db
        try:
            jd = JD.objects.get(pk=jd_id)
        except JD.DoesNotExist:
            raise Http404('Job Description does not exist')
        return HttpResponse(
                serializers.serialize('json', [jd]),
                content_type='application/json')
    elif request.method == 'PUT':
        try:
            jd = JD.objects.get(pk=jd_id)
            update_param = json.loads(request.body.decode("utf-8"))
            for k,v in update_param.iteritems():
                setattr(jd, k, v)
            jd.save()
        except Exception as e:
            return HttpResponseBadRequest(e.message)
        return redirect('/jds/%s' % jd_id)
    elif request.method == 'DELETE':
        try:
            JD.objects.get(pk=jd_id).delete()
        except JD.DoesNotExist:
            return HttpResponseBadRequest("job description not exist")
        return HttpResponse()

