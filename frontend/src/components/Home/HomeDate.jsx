import { useQuery,gql } from "@apollo/client";

export default function ImportantDatesModern() {
    const events = [
      { date: "Dec. 1, 2025", event: "Full Paper Submission Deadline" },
      { date: "Dec. 2, 2025", event: "Acceptance Notification Deadline" },
      { date: "Dec. 3, 2025", event: "Final Paper Submission Deadline" },
      { date: "Dec. 4, 2025", event: "Conference Registration Deadline" },
    ];
    const {loading,error,data}=useQuery(gql`
      query Query($where: importantDateWhereInput!) {
        importantDates(where: $where) {
          event
          date
          important
        }
      }
    `,{
      variables:{
        where:{
          important:{
            equals:true
          }
        }
      }
    });
    if(loading){
      return <div>Loading...</div>
    }
    if(error){
      return <div>error</div>
    }
    if(!data)return <div>NO data</div>
    const datesdata=data?.importantDates;
    
    return (
        <div className="relative w-full py-24 px-6 md:px-20 bg-gradient-to-b from-[#eafdf5] via-[#f8fffc] to-[#eafdf5] shadow-[0_0_60px_#b8f8d4]">


        <h2 className="text-center text-4xl font-extrabold text-neutral-800 mb-16">
          Important Dates
        </h2>
  
        <div className="relative flex justify-between items-start gap-4 max-w-7xl mx-auto">
          {/* Gradient glowing line */}
          <div className="absolute top-[10px] left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 shadow-xl rounded-full z-0" />
  
          {datesdata.map((arr, index) => (
            <div key={index} className="relative group w-1/4 flex flex-col items-center text-center z-10">
              {/* Dot */}
              <div className="w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg z-20 transition-transform group-hover:scale-125" />
  
              {/* Diamond pointer */}
              <div className="w-4 h-4 bg-white rotate-45 -mt-1 z-10 shadow-md" />
  
              {/* Date Card */}
              <div className="mt-4 bg-white border shadow-xl rounded-xl px-6 py-4 transition-all duration-300 group-hover:-translate-y-3 group-hover:scale-105">
                <p className="text-lg font-bold text-neutral-800">{arr.date}</p>
                <hr className="my-2 border-t border-gray-300" />
                <p className="text-sm text-gray-600">{arr.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  