from pymongo import MongoClient

url = "mongodb+srv://Jagadish:maioverwolf@mycuisine.zffa4e8.mongodb.net/?retryWrites=true&w=majority&appName=myCuisine"

# Create a new client and connect to the server
client = MongoClient(url)

db = client['myCuisine']

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)