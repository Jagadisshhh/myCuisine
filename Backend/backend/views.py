# views.py
from django.http import JsonResponse
from db_connection import db
from .food_list import food_list

from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import make_password, check_password
import json
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view

def test_mongo_connection(request):
    try:
        collections = db.list_collection_names()
        return JsonResponse({'status': 'Connected', 'collections': collections})
    except Exception as e:
        return JsonResponse({'status': 'Connection failed', 'error': str(e)})
    
def item_list(request):
    try:
        collection = db['items-list']
        result = list(collection.find({}))
        return JsonResponse({"status":"Succesfull", "List" : result})
    except Exception as e:
        return JsonResponse({"Status": "Cannot fetch the item list"})

@csrf_exempt 
@api_view(['POST'])
def authentication(request):
    collection = db['users']
    if(request.method == "POST"):
        try:
            data = json.loads(request.body.decode('utf-8'))
            print(data)
            username = data.get('username')
            email = data.get('email')
            password = data.get('password')
            hashed_password = make_password(password)

            if(username == ""):
                # Login
                result = collection.find_one({"email" : email})
                if result and check_password(password, result['password']):
                    user_data = {
                        'detail': 'User Logged In',
                        "email" : email,
                    }
                    return Response(user_data, status=status.HTTP_200_OK)
                
                return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
            
            # Sign Up
            if collection.find_one({'username' : username}):
                return Response({'detail':'Username already used!'},status=status.HTTP_400_BAD_REQUEST)

            user_data = {
                'username' : username,
                'email' : email,
                'password' : hashed_password
            }

            collection.insert_one(user_data)
            return Response({'detail' : 'User successfully created!'}, status=status.HTTP_201_CREATED)
        except json.JSONDecodeError:
            return JsonResponse({"detail": "Invalid JSON"}, status=400)
        except Exception as e:
            return JsonResponse({"detail": str(e)}, status=500)

    return JsonResponse({"detail": "Invalid request method"}, status=405)
    




                
