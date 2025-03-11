import React, { useState } from "react";
import FileUploader from "./Components/FileUploader";
import MapDisplay from "./Components/MapDisplay";
import SummaryTable from "./Components/SummaryTable";
import DetailsTable from "./Components/DetailsTable";

const App = () => {
  const [geoData, setGeoData] = useState(null);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">KML Viewer</h1>
      <FileUploader setGeoData={setGeoData} />
      {geoData && <SummaryTable geoData={geoData} />}
      {geoData && <DetailsTable geoData={geoData} />}
      {geoData && <MapDisplay geoData={geoData} />}

    </div>
  );
};

export default App;