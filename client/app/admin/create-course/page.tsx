'use client'
import AdminSidebar from '@/app/components/Admin/Sidebar/AdminSidebar'
import Heading from '@/app/utils/Heading'
import React ,{FC} from 'react'
import CreateCourse from "../../components/Admin/Course/CreateCourse"
import DashboardHeader from '@/app/components/Admin/DashboardHeader'

type Props = {}

const page :FC<Props> = (props: Props) => {
  return (
    <div>
        <Heading
        title='Elearning - Admin'
        description='Elearning is a platform for students to learn and help from teachers'
        keywords='Programing,MERN,Redux,MachineLearning'/>
        <div className="flex">
            <div className='1500px:w-[16%] w-1/2'>
             <AdminSidebar/>             
            </div>
            <div className='w-[85%]'>
                  <DashboardHeader/>
                  <CreateCourse/>
            </div>
        </div>
    </div>
  )
}

export default page