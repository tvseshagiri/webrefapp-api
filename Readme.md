* Running docker image with Google specific environment variables.
   
    ```sh
    docker run -v "$HOME/.config/gcloud/application_default_credentials.json":/gcp/creds.json:ro   --env GOOGLE_APPLICATION_CREDENTIALS=/gcp/creds.json -p 3000:3000 -e GOOGLE_CLOUD_PROJECT='<Project ID>' -d <image-tag>
    ```


* Start Local Datastore Emulator

    ```sh
    gcloud beta emulators datastore start

    ```
* Set Environment Variables for connect Local Emulator environment instead of Cloud 

    ```sh
    #Set env. variables
    $(gcloud beta emulators datastore env-init)

    #unset env. variables
    $(gcloud beta emulators datastore env-unset)
    ```

* Create a new API Config 

    ```sh

        #Create new config
        gcloud api-gateway api-configs create <New Config Name --api=<API ID> --openapi-spec=openapi2-run.yaml --project=<Project ID> --backend-auth-service-account=<Service Account>

        #update gateway with new config
        gcloud api-gateway gateways 
        update <gateway ID> --api=<api ID> --api-config=<api config ID> --location=<location>

        #Delete Old api config
        
        gcloud api-gateway api-configs delete <configID --api=<api ID> --project=<project ID>
    ```