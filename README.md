## Environment Variables

This project requires a YouTube Data API key to function. Follow these steps to set it up:

1. Create a `.env` file in the root directory
2. Add your YouTube Data API key as follows:
```sh
REACT_APP_YOUTUBE_API_KEY="your_api_key_here"

Note: Never commit your actual API key to version control. The .env file is already included in .gitignore to prevent this.

Getting a YouTube API Key
Go to the Google Cloud Console
Create a new project or select an existing one
Enable the YouTube Data API v3 for your project
Create credentials (API key)
Copy the API key and paste it in your .env file
For local development:

Create a .env.local file (it will be ignored by git)
Add your API key as shown above
Restart your development server