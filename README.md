# Freezer Items

This is a small project where a user can log in and view/store information about 
what items are in their freezer. This is to reduce packed freezers and allow people
to know what they have without going into every drawer.

## Database
The database solution is postgres

### Locally

Locally the database is a postgres docker container. You can query this database 
from the terminal using the following command

```
docker exec -it freezer-db psql -U {username} -W {db_name}
```

This will prompt you for the db password 