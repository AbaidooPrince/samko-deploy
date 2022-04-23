import { UserCircleIcon } from '@heroicons/react/outline'
import React from 'react'

const ContactItem = (props) => {
    return (
        <div className='p-4'>
            <div className='flex md:grid md:text-center md:grid-rows-2 justify-items-center'>
                <div>
            <UserCircleIcon className="h-10 md:h-16"></UserCircleIcon>
            </div>
            <div className='prose'>
                <div className='font-medium md:mb-4 text-white text-lg'>
                    { props.props }:
                </div>
                <div className='text-white'>
                    + 233 (0) 20 908 9090
                </div>
            </div>
            </div>
        </div>
    )
}

export default ContactItem