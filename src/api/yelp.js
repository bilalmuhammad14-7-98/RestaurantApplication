import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer MXtjG528BEWInztN2tEFNI8Fht8wAsEmSH75UECsEbIgPK-tQ_lpFmJ4YMAtXkAZylDGsasuJ12f9WG9tIymUnVaocIhwE_ayanCZFPLeAWhSdGlnlqWOT49otq4YHYx",
  },
});
