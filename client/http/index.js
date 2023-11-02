const apiUrl = process.env.API_BASE_URL;
const apiKey = process.env.BACKEND_API_KEY;

export const getCategories = async () => {
  try {
    const res = await fetch(`${apiUrl}/api/categories`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const getArticles = async (querryString) => {
  try {
    const res = await fetch(`${apiUrl}/api/articles?${querryString}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    // const { data } = await res.json();
    return res.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const getArticle = async (querryString) => {
  try {
    const res = await fetch(`${apiUrl}/api/articles?${querryString}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    // const { data } = await res.json();
    return res.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
