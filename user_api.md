회원
=
회원가입
-
```
POST accounts/register/
```
- Request
```
{
	"email" : String,
	"username" : String,
	"password" : STring,
	"region": String
}
```
- Response
```
{
    "user": {
        "id": Integer,
        "region": String,
        "email": String,
        "password": String
    },
    "token": String
}
```
로그인
-
```
POST accounts/login/
```
- Request
```
{
	"email" : String,
	"password" : String
}
```
- Response
```
SUCCESS
{
    "user": {
        "id": Integer,
        "region": String,
        "email": String,
        "password": String
    },
    "token": String
}
```
```
FAIL {"message": "doesnt exist email"} , status = 403
FAIL {"message": "invalid password"} , status = 403
```
