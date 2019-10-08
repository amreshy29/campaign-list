import React from "react";
import mockdata from "./../data/mock.json";

const Campaign = () => {
  const [campaignData, setcampaignData] = React.useState(mockdata);
  window.AddCampaigns = (newList = []) => {
    // return [...mockdata, ...newList];
    setcampaignData([...campaignData, ...newList]);
  };

  const checkIsActive = (stateDate, endDate) => {
    const date1 = new Date(stateDate);
    const date2 = new Date(endDate);
    const currentDate = new Date();
    return (
      currentDate.getTime() > date1.getTime() &&
      currentDate.getTime() < date2.getTime()
    );
  };

  const isValidCampaignDate = (startDate, endDate) => {
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);
    return date1 < date2;
  };

  const populateData = () => {
    const list = campaignData.map(item => {
      const isActiveCampaign = checkIsActive(item.startDate, item.endDate);
      const isValidCampaignRange = isValidCampaignDate(
        item.startDate,
        item.endDate
      );
      return isValidCampaignRange ? (
        <tr>
          <td>{item.name}</td>
          <td>{item.startDate}</td>
          <td>{item.endDate}</td>
          <td>
            <span className={`dot ${isActiveCampaign ? "green" : "red"}`} />
            {isActiveCampaign ? " Active" : " InActive"}
          </td>
          <td>{item.budget}</td>
        </tr>
      ) : null;
    });
    return list;
  };
  return (
    <div>
      {campaignData ? (
        <table className="campaign">
          <tr>
            <th>Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Active </th>
            <th>Budget</th>
          </tr>
          {populateData()}
        </table>
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};

export default Campaign;
