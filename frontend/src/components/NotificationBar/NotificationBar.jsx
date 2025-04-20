import { useQuery,gql } from "@apollo/client";
import React from "react";

  
const NotificationBar = () => {
  const {loading,error,data}=useQuery(gql`
    query Query($where: generalInformationWhereInput!) {
    generalInformations(where: $where) {
      name
      desc
    }
  }`,{
    variables:{
      where:{
        name:{
          equals:"Annoucement"
        }
      }
    }
  });
  const mssg=data?.generalInformations[0].desc;
  console.log(mssg);
  
  return (
    <div className="bg-gray-600 overflow-hidden w-full py-2">
      <div className="flex animate-marquee whitespace-nowrap">
          <span className="text-white font-semibold text-sm sm:text-base mx-6">
            {mssg}
          </span>
      </div>
    </div>
  );
};

export default NotificationBar;
