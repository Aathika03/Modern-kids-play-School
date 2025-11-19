import React from 'react'


const schedule = [
{ time: '09:00 AM', activity: 'Arrival & Free Play' },
{ time: '09:30 AM', activity: 'Circle Time / Songs' },
{ time: '10:00 AM', activity: 'Activity Stations' },
{ time: '11:00 AM', activity: 'Snack Time' },
{ time: '11:30 AM', activity: 'Outdoor Play' },
{ time: '12:15 PM', activity: 'Lunch & Story' }
]


const DailySchedule: React.FC = () => {
return (
<section className="mt-8">
<h3 className="text-2xl font-semibold mb-4">Daily Schedule</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
{schedule.map((s) => (
<div key={s.time} className="flex items-start gap-4 p-4 bg-white/60 rounded-lg">
<div className="font-mono text-sm w-24">{s.time}</div>
<div className="text-sm text-muted">{s.activity}</div>
</div>
))}
</div>
</section>
)
}


export default DailySchedule