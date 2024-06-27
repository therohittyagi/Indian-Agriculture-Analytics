import data from "./Manufac _ India Agro Dataset.json";

const processData = () => {
  const yearCropData = {};
  const cropStats = {};

  data.forEach((entry) => {
    const year = entry["Year"].split(", ")[1];
    const crop = entry["Crop Name"];
    const production =
      parseFloat(entry["Crop Production (UOM:t(Tonnes))"]) || 0;
    const yieldPerHa =
      parseFloat(entry["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]) || 0;
    const areaUnderCultivation =
      parseFloat(entry["Area Under Cultivation (UOM:Ha(Hectares))"]) || 0;

    if (!yearCropData[year]) {
      yearCropData[year] = [];
    }
    yearCropData[year].push({ crop, production });

    if (!cropStats[crop]) {
      cropStats[crop] = { totalYield: 0, totalArea: 0, count: 0 };
    }
    cropStats[crop].totalYield += yieldPerHa;
    cropStats[crop].totalArea += areaUnderCultivation;
    cropStats[crop].count += 1;
  });

  const maxMinProductionTable = Object.entries(yearCropData).map(
    ([year, crops]) => {
      let maxProductionCrop = crops[0];
      let minProductionCrop = crops[0];

      crops.forEach(({ crop, production }) => {
        if (production > maxProductionCrop.production) {
          maxProductionCrop = { crop, production };
        }
        if (production < minProductionCrop.production) {
          minProductionCrop = { crop, production };
        }
      });

      return {
        year,
        maxProductionCrop: maxProductionCrop.crop,
        minProductionCrop: minProductionCrop.crop,
      };
    }
  );

  const averageYieldAreaTable = Object.entries(cropStats).map(
    ([crop, stats]) => {
      const averageYield = (stats.totalYield / stats.count).toFixed(3);
      const averageArea = (stats.totalArea / stats.count).toFixed(3);
      return { crop, averageYield, averageArea };
    }
  );

  return { maxMinProductionTable, averageYieldAreaTable };
};

export default processData;
