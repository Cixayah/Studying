import jwt as jwt

payload_data ={
    "id":"1",
    "name":"Cix",
    "year":"1997"
}

token = jwt.encode (
    payload=payload_data,
    key='my_super_secret'
)