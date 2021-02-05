import unfetch from "isomorphic-unfetch";
import withRetry from "fetch-retry";

const fetch = withRetry(unfetch);

export default async (req, res) => {
  res.json(
    await(
      await fetch(
      "https://services9.arcgis.com/N9p5hsImWXAccRNI/arcgis/rest/services/Nc2JKvYFoAEOFCG5JSI6/FeatureServer/1/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Confirmed%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&outSR=102100&resultType=standard&cacheHint=true",
      {
        method: "GET",
        headers: {
          "sec-ch-ua":
            '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
          Referer:
            "https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html",
          "sec-ch-ua-mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.146 Safari/537.36",
          },
        }
      )
    ).json() 
  );
};
