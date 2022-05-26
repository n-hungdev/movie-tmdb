const apiConfig = {
  baseUrl: process.env.REACT_APP_BASE_URL,
  apiKey: process.env.REACT_APP_API_KEY,
  originalImage: (imgPath) =>
    process.env.REACT_APP_IMAGE_ORIGINAL_URL + imgPath,
  w500Image: (imgPath) => process.env.REACT_APP_IMAGE_W500_URL + imgPath,
}

export default apiConfig
