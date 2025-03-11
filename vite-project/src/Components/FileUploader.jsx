import React from "react";
import * as toGeoJSON from "@tmcw/togeojson";

const FileUploader = ({ setGeoData }) => {
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const parser = new DOMParser();
                const kml = parser.parseFromString(e.target.result, "text/xml");
                const geoJson = toGeoJSON.kml(kml);
                setGeoData(geoJson);
            };
            reader.readAsText(file);
        }
    };

    return (
        <div className="my-4">
            <input type="file" accept=".kml" onChange={handleFileUpload} />
        </div>
    );
};

export default FileUploader;