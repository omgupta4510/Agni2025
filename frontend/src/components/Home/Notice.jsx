import React from 'react';

const notices = [
  { title: 'List of Selected Students of Summer Internship 2025', isNew: true, date: 'April 19, 2025' },
  { title: 'Faculty Recruitment 2025', isNew: true, date: 'April 17, 2025' },
  { title: 'Inviting applications for JRF/PA-II/PA-I (SERB-CRG Project) in Civil Engineering Department, May 02, 2025', isNew: true, date: 'April 16, 2025' },
  { title: 'Advertisement - Incubation Executive under CEDI NITT', isNew: false, date: 'April 15, 2025' },
  { title: 'Institute Day 2025', isNew: false, date: 'April 12, 2025' },
  { title: 'Overall Outstanding Student Award & RECT ’78 Alumni medal for the best outgoing girl student (B.Tech.)', isNew: false, date: 'April 10, 2025' },
  { title: 'Data submitted by NIT Tiruchirappalli for NIRF', isNew: false, date: 'April 9, 2025' },
  { title: 'Circular for Summer Internship 2025 (Other than NITT Students)', isNew: true, date: 'April 7, 2025' },
  { title: 'Inviting Applications for JRF in Department of Chemical Engineering, March 20, 2025', isNew: false, date: 'March 20, 2025' },
  { title: 'Hostel Fees for EVEN Semester 2024-25 (MS / PHD Admitted)', isNew: false, date: 'March 15, 2025' },
];

const NoticeBoard = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-background rounded-xl border border-border shadow">
      <h2 className="text-lg font-semibold mb-4 border-b pb-2 border-border">Notices/News</h2>
      <div className="space-y-4 h-[500px] overflow-y-auto pr-2 custom-scrollbar overflow-y-scroll scrollbar-hide">
        {notices.map((notice, idx) => (
          <div key={idx} className="relative p-4 pl-6 bg-card rounded-xl border border-border shadow-sm">
            <div className="absolute top-0 bottom-0 left-0 w-1 bg-green-500 rounded-tl-xl rounded-bl-xl" />
            <p className="text-sm font-semibold text-foreground">{notice.date}</p>
            <p className="text-sm text-muted-foreground mt-1 leading-snug">
              {notice.title}
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
