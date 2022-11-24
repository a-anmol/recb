from django.shortcuts import render

# Create your views here.
def index (request):
    return render(request, 'index.html')

def aboutRecb (request):
    return render(request, 'about_nav/aboutRecb.html')