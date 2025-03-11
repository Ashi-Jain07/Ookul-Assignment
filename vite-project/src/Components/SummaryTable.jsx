import React, { useState } from "react";

const SummaryTable = ({ geoData }) => {

    const [show, setShow] = useState(false);
    const counts = geoData.features.reduce((acc, feature) => {
        acc[feature.geometry.type] = (acc[feature.geometry.type] || 0) + 1;
        return acc;
    }, {});

    return (
        <div className="mt-4">

            <button onClick={() => setShow(!show)} className="border-2 border-black px-2 py-1 text-white bg-gray-900 rounded-lg">{show ? "Hide Summary" : "Show Summary"}</button>
            {show &&
                <div>
                    <h2 className="text-xl font-bold">Summary</h2>
                    <table className="border-collapse border border-gray-500">
                        <thead>
                            <tr>
                                <th className="border border-gray-500 px-2">Element Type</th>
                                <th className="border border-gray-500 px-2">Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(counts).map(([type, count]) => (
                                <tr key={type}>
                                    <td className="border border-gray-500 px-2">{type}</td>
                                    <td className="border border-gray-500 px-2">{count}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>}
        </div>
    );
};

export default SummaryTable;