# Culture Reactor Classification App

Live app: https://culture-bio-app.herokuapp.com/

### How to run locally

1. Acquire env variables and place them into your .env file
2. Run npm install in root dir
3. Run npm install in client dir for React dependencies
4. npm run start in root dir (this runs both frontend and backend servers using [concurrently](https://www.npmjs.com/package/concurrently))

### Seeding DB

The database should already be pre-seeded to begin with. The application is using a cloud database. If you want to reseed and start from scratch you can run the following command in the root dir.

- node seed.js

This will wipe the current DB and replace everything with the data from the JSON file that was provided.

### Features

- Pagination features in backend (imageController.js) as well as frontend.
- Ability to classify an image as foaming or not-foaming. This is saved to the DB
- Filter images based on classifiction enum: ["unclassified", "foaming", "not-foaming"]
- Cloud Database using MongoAtlas

[Example Video](https://www.youtube.com/watch?v=CGkl7ZxaBhs)
