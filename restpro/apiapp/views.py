from django.shortcuts import render

# Create your views here.


def main(request):
    return render(request, 'apiapp/main.html')

def profile_view(request):
    return render(request, 'apiapp/profile.html')
