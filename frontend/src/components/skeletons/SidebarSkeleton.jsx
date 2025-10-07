import React from 'react'

const SidebarSkeleton = () => {
    console.log('MOUNT <SidebarSkeleton />')

    const skeletons = new Array(10).fill(0)

  return (
    <div className="flex flex-col bg-base-200 flex-3 gap-2">
        {/* Contacts Heading */}
        <div className="flex flex-row items-center gap-1 p-4 pb-0">
            <div className="skeleton size-5" />
            <div className="skeleton h-5 w-36"></div>
        </div>

        {/* Online Only CheckBox */}
        <div className="skeleton h-3 w-36 ml-4"> </div>

        {/* List of Contacts */}
        <div className="h-full overflow-scroll space-y-0 mt-6">
            { skeletons.map((_, i) => { 
                return <div key={i}
                    className='flex flex-row w-full items-center gap-2 p-2 pl-4'
                > 
                    <div className="skeleton size-12 bg-base-300 rounded-full"></div>
                    <div className="text-left space-y-2">
                        <div className="skeleton h-3 w-20"></div>
                        <div className="skeleton h-3 w-28"></div>
                    </div>
                </div>
            })}
        </div>
    </div>
    )
}

export default SidebarSkeleton