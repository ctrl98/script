
let url = $request.url;
let body = $response.body;


for (var i = body.body.bund.length - 1; i >= 0; i--) {
  if (body.body.bundles[i].bundleName === "picassovc_pexus-freetry-index_index") {
    body.body.bund.splice(i, 1);
  }
}


$done({body});