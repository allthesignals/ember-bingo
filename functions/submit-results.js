const { GoogleSpreadsheet } = require('google-spreadsheet');
require('dotenv').config();

const HEADER_VALUES = ['A', 'B', 'C', 'D', 'E'];

exports.handler = async (event) => {
  const tiles = JSON.parse(event.body);
  const mungedTiles = reshapeTiles(tiles);

  try {
    await submitResults(mungedTiles);

    return {
      statusCode: 200,
    };
  } catch (e) {
    console.log(e);

    return {
      statusCode: 500,
      error: e.toString(),
    };
  }
};

const submitResults = async (tiles) => {
  const doc = new GoogleSpreadsheet('1tMq2vfnkqIJ7OdfhdbyHPltURII_ed3xV-86zD6opEw');

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  });

  const now = new Date();
  const formattedDateTime = `${now.toLocaleDateString()}${now.toLocaleTimeString()}`;
  const cleanedUpDateTime = formattedDateTime.replace(':', '').replace(':', '');
  const sheetTitle = `[USER-NAME-HERE]-${cleanedUpDateTime}`;

  const sheet = await doc.addSheet({
    title: sheetTitle,
    headerValues: HEADER_VALUES,
  });

  await sheet.addRows(tiles);
}

const reshapeTiles = (tiles) => {
  return tiles.reduce((acc, curr, index, array) => {
    const shouldFillRow = ((index + 1) % 5 === 0);

    if (shouldFillRow) {
      const start = index - 4;
      const zeroBased = (start < 0) ? 0 : start;
      const fullRow = array.slice(zeroBased, index + 1)
        .reduce((rowAcc, curr, fullRowIndex) => ({
          [HEADER_VALUES[fullRowIndex]]: `${curr.sponsor} : ${curr.activity.title} \n \n ${curr.image || ''}`,
          ...rowAcc,
        }), {});

      return [fullRow, ...acc];
    }

    return acc;
  }, []);
};
