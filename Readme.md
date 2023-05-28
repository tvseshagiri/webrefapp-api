Running docker image with Google specific environment variables.
```sh
docker run -v "$HOME/.config/gcloud/application_default_credentials.json":/gcp/creds.json:ro   --env GOOGLE_APPLICATION_CREDENTIALS=/gcp/creds.json -p 3000:3000 -e GOOGLE_CLOUD_PROJECT='irigahsesvt' -d tvseshagiri/webrefapp
```