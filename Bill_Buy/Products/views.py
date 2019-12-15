from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.conf import settings
from . import models
from .models import Products
from django.template import loader

def index(request):
    #return render(request,'Products/index.html')
    ProductList = Products.objects.all()
    template = loader.get_template('Products/index.html')
    context ={
        'ProductList':ProductList
    }
    return render(request,'Products/index.html',context)
