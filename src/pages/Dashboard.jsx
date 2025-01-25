import React from 'react'
import Header from '../modules/Header'
import SideBar from '../modules/SideBar'
import EmployeeCard from '../modules/EmployeeCard'
import CustomSelect from '../components/CustomSelect'
import AnalyticsCard from '../modules/AnalyticsCard'
import TimeCard from '../modules/TimeCard'
import RightPanel from '../modules/RightPanel'
import InformationCards from '../modules/InformationCards'
import TaskCard from '../modules/TaskCard'
import ContentPieCard from '../modules/ContentPieCard'
import TestCard from '../modules/TestCard'
import QueryCard from '../modules/QueryCard'
import SyllabusCard from '../modules/SyllabusCard'
import FeeCard from '../modules/FeeCard'
import AdmissionCard from '../modules/AdmissionCard'
import ContentLineCard from '../modules/ContentLineCard'
import ClassCard from '../modules/ClassCard'
import StudentCard from '../modules/StudentCard'
import EmployeeLineCard from '../modules/EmployeeLineCard'
import TimeTableCard from '../modules/TimeTableCard'

const Dashboard = () => {
    return (
        <div className='w-full flex flex-col'>
            {/* header */}
            <div className='w-full'>
                <Header />
            </div>

            {/* bottom */}
            <div className='w-full flex'>
                {/* left panel */}
                <div className='h-auto w-24 bg-[#2780e6] flex justify-center items-center'>
                    <SideBar />
                </div>
                {/* main content */}
                <div className='flex-1 flex flex-col gap-3 p-4 bg-[#f3f3f3] px-2 py-4 h-auto'>
                    {/* 1st */}
                    <div className='flex gap-2'>
                        <EmployeeCard />
                        <CustomSelect label={'Select School'} />
                        <CustomSelect label={'Select School'} />
                    </div>

                    {/* 2nd */}
                    <div className='flex gap-2'>
                        <AnalyticsCard />
                        <TimeCard />
                    </div>

                    {/* 3rd */}
                    <div className='flex gap-2 h-auto'>
                        <div className='flex-1 flex flex-col gap-3 h-auto'>
                            {/* 1st */}
                            <div className="grid grid-cols-3 gap-4 h-auto">
                                    <ContentPieCard />
                                    <SyllabusCard />
                                    <InformationCards />
                            </div>

                            {/* 2nd */}
                            <div className="grid grid-cols-3 gap-4 h-auto" >
                                <div className="col-span-2 grid grid-cols-1 gap-4 ">
                                    <FeeCard />
                                    <AdmissionCard />
                                </div>
                                <div>
                                    <TaskCard />
                                </div>
                            </div>

                            {/* 3rd */}
                            <div className="grid grid-cols-3 gap-4 h-auto" >
                                <ContentLineCard />
                                <QueryCard />
                            </div>

                            {/* 4th */}
                            <div className="grid grid-cols-3 gap-4 h-auto">
                                <TestCard />
                                <ClassCard />
                                <TimeTableCard />
                            </div>

                            {/* 5th */}
                            <div className="grid grid-cols-2 gap-4 h-auto">
                                <StudentCard />
                                <EmployeeLineCard />
                            </div>
                        </div>
                        <div className='w-48'>
                            <RightPanel />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
