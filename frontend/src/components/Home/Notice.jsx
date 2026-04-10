import { gql, useQuery } from '@apollo/client';
import React from 'react';


const NoticeBoard = () => {
  const {loading,error,data}=useQuery(gql`
    query Query {
  notices {
    title
    date
    link
    isNew
    createdAt
  }
}`);
if(loading){
  return <div>Loading....</div>;
}
if(error){
  return <div>Error</div>
}
if(!data)return <div>No Notice</div>
const noticedata=data?.notices?.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));;
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-background rounded-xl border border-border shadow">
      <h2 className="text-lg font-semibold mb-4 border-b pb-2 border-border">Notices/News</h2>
      <div className="space-y-4 h-[500px] overflow-y-scroll pr-2 custom-scrollbar scrollbar-hide">
        {noticedata.map((notice, idx) => (
          <div key={idx} className="relative p-4 pl-6 bg-card rounded-xl border border-border shadow-sm">
            <div className="absolute top-0 bottom-0 left-0 w-1 bg-green-500 rounded-tl-xl rounded-bl-xl" />
            <p className="text-sm font-semibold text-foreground">{notice.date}</p>
            <p className="text-sm text-muted-foreground mt-1 leading-snug">
              {notice.link ? (
                <a href={notice.link} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">
                  {notice.title}
                </a>
              ) : (
                notice.title
              )}
              {notice.isNew && (
                <span className="ml-2 inline-block text-[10px] font-bold px-1.5 py-0.5 text-white bg-red-600 rounded-full animate-pulse">
                  new
                </span>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoard;
