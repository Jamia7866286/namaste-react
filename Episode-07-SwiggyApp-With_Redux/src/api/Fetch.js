
export const Fetch = async (endPoint, config, cookie) => {
  // request interceptor starts
  const url = endPoint;

  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  if (cookie) {
    headers.append("Cookie", cookie);
  }
  const modifiedConfig = { ...config, headers, credentials: "include" };
  // request interceptor ends

  const response = await fetch(url);

  // response interceptor here
  if (response.status === 404) {
    console.log("404 --> ", url);
    throw new Error("Not Found");
  }
  if (response.status === 401) {
    // If access token expires call refresh and
    // and call for the api again ------------//
    if (!cookie) {
      try {
        const response = await fetch(url, modifiedConfig);
        if (response.status === 404) {
          console.log("404 --> ", url);
          throw new Error("Not Found");
        }
        return response;
      } catch (error) {
        throw new Error("Unauthorized");
      }
    } else {
      throw new Error("Unauthorized");
    }
  }

  return response;
};
