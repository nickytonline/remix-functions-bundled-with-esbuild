exports.handler = async function (event, context) {
  const { API_URL = 'default value', DATABASE_URL = 'default value' } =
    process.env;

  return {
    statusCode: 200,
    body: JSON.stringify({ API_URL, DATABASE_URL, event, context }),
  };
};
