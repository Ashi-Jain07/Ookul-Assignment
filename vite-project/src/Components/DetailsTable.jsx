import React, { useState } from "react";

const DetailsTable = ({ geoData }) => {

    const [show, setShow] = useState(false)
    const calculateLength = (coordinates) => {
        let totalLength = 0;
        for (let i = 0; i < coordinates.length - 1; i++) {
            const [lon1, lat1] = coordinates[i];
            const [lon2, lat2] = coordinates[i + 1];
            const R = 6371;
            const dLat = ((lat2 - lat1) * Math.PI) / 180;
            const dLon = ((lon2 - lon1) * Math.PI) / 180;
            const a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos((lat1 * Math.PI) / 180) *
                Math.cos((lat2 * Math.PI) / 180) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            totalLength += R * c;
        }
        return totalLength.toFixed(2);
    };

    const details = geoData.features.map((feature) => {
        if (feature.geometry.type.includes("LineString")) {
            return {
                type: feature.geometry.type,
                length: calculateLength(feature.geometry.coordinates),
            };
        }
        return null;
    }).filter(Boolean);

    return (
        <div className="mt-4 mb-16">
            <button onClick={() => setShow(!show)} className="border-2 border-black px-2 py-1 text-white bg-gray-900 rounded-lg">{show ? "Hide Detail" : "Show Detail"}</button>
            {
                show &&
                <div>
                    <h2 className="text-xl font-bold">Detailed Data</h2>
                    <table className="border-collapse border border-gray-500">
                        <thead>
                            <tr>
                                <th className="border border-gray-500 px-2">Element Type</th>
                                <th className="border border-gray-500 px-2">Total Length (km)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {details.map((detail, index) => (
                                <tr key={index}>
                                    <td className="border border-gray-500 px-2">{detail.type}</td>
                                    <td className="border border-gray-500 px-2">{detail.length}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default DetailsTable;