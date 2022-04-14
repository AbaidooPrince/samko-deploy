import React from 'react'
import ContactItem from '../../components/ContactItem'

const Footer = () => {
    const contact = [
        'Phone',
        'Email',
        'Our Office',
        'Working Hours'
    ]
    return (
        <div className='bg-slate-500'>
            <div className='p-24'>
                <div className='text-center'>
                    <div>
                        Logo
                    </div>
                    <p className='prose'>You dont worry about results because all of these interior</p>
                </div>
            </div>
            <div className=' grid sm:grid-cols-1 md:grid-cols-4 place-content-center pb-12'>
               { contact.length && contact.map(con =>  <div>
                    <ContactItem
                    props={con}
                    ></ContactItem>
                </div>
               )

               }
            </div>
            <div className='flex justify-center bg-slate-900'>
                <div className='text-center'>
                    <div className='mt-auto mb-auto p-12'>
                   <p className='text-white'>&copy; Samko Engineering - 2022. All Rights Reserved</p> 
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer