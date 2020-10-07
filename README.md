# photo-gallery

A very simple photo gallery app. Recently refactored to use Next.js serverless API routes and MongoDB.

The images are statically hosted, with URLs and "likes" stored in the database. The user can like a photo, which updates the database.

# Future Improvements

I'd like to add the ability to upload new photos and have them cropped automatically.

# Install

`yarn`

# Config

Add a `.env.local` file with a `MONGODB_URI` value for a connection string.

# Dev

`yarn dev`
