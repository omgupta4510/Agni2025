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
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const info = data?.generalInformations?.[0];
  if (!info) return <div>NO data</div>;

  return (
    <div className="bg-gray-600 overflow-hidden w-full py-2">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="text-white font-semibold text-sm sm:text-base mx-6">
          {info.desc}
        </span>
      </div>
    </div>
  );
  
};

export default NotificationBar;
