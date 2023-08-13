echo "Start"

docker build -t us-west1-docker.pkg.dev/woven-sequence-389701/my-test/app:v1 .

docker push us-west1-docker.pkg.dev/woven-sequence-389701/my-test/app:v1

echo "Done"