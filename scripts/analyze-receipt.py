########### Python Form Recognizer Async Analyze #############
import json
import time
from requests import get, post

# Endpoint URL
endpoint = r"InsertFormRecognizerEndpoint" # https://example-form-recognizer.cognitiveservices.azure.com/
apim_key = "InsertFormSubscriptionKey"
model_id = "3db8008a-1668-4bbf-bd0f-77b53c38fa2e" # Insert model ID
post_url = endpoint + "/formrecognizer/v2.0-preview/custom/models/%s/analyze" % model_id
source = r"InsertImageFilepathOrUrl" # C:\Users\test.jpg
params = {
    "includeTextDetails": True
}

headers = {
    # Request headers
    'Content-Type': 'image/jpeg',
    'Ocp-Apim-Subscription-Key': apim_key,
}
with open(source, "rb") as f:
    data_bytes = f.read()

try:
    resp = post(url = post_url, data = data_bytes, headers = headers, params = params)
    if resp.status_code != 202:
        print("POST analyze failed:\n%s" % json.dumps(resp.json()))
        quit()
    print("POST analyze succeeded:\n%s" % resp.headers)
    get_url = resp.headers["operation-location"]
except Exception as e:
    print("POST analyze failed:\n%s" % str(e))
    quit()

n_tries = 15
n_try = 0
wait_sec = 5
max_wait_sec = 60
while n_try < n_tries:
    try:
        resp = get(url = get_url, headers = {"Ocp-Apim-Subscription-Key": apim_key})
        resp_json = resp.json()
        if resp.status_code != 200:
            print("GET analyze results failed:\n%s" % json.dumps(resp_json))
            quit()
        status = resp_json["status"]
        if status == "succeeded":
            print("Analysis succeeded:\n%s" % json.dumps(resp_json))
            quit()
        if status == "failed":
            print("Analysis failed:\n%s" % json.dumps(resp_json))
            quit()
        # Analysis still running. Wait and retry.
        time.sleep(wait_sec)
        n_try += 1
        wait_sec = min(2*wait_sec, max_wait_sec)     
    except Exception as e:
        msg = "GET analyze results failed:\n%s" % str(e)
        print(msg)
        quit()
print("Analyze operation did not complete within the allocated time.")