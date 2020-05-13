분실물 신고
=
신고하기
-
```
POST reports/create/
```
- Request
```
{
	"item_type" : String,
	"item_feature" : String,
	"bus_number" : String,
	"bus_region" : String,
	"email" : String
}
```
-Response
```
{
"report": {
        "id": 3,
        "item_type": "wallet",
        "item_feature": "blue color",
        "bus_number": "160",
        "bus_region": "naju",
        "email": "hanbin8269@gmail.com"
    }
}
```

신고 내역 보기
-
```
GET reports/read/
```
- Request
```
header {"Authorization" : token }
```
- Response
```
{
    "reports": [
        {
            "model": String,
            "pk": Integer,
            "fields": {
                "item_type": String,
                "item_feature": String,
                "bus_number": String,
                "bus_region": String,
                "email": String,
                "created": String
            }
        }
    ]
}
```
