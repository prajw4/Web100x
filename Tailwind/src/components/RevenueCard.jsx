export const RevenueCard = ({

    title,
    orderCount,
    amount

}) =>{
    return(
        <div className="bg-white p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div>
                <div className="text-gray-500 flex items-center gap-1">
                    <div>
                        {title}

                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                   

                </div>
            </div>
            <div className="flex justify-between items-center mt-2 text-2xl font-semibold text-gray-800">
                <div>
                    $ {amount}
                </div  >
                {orderCount ? <div className="text-gray-500 text-sm text-blue-700 underline underline-offset-2 hover:drop-shadow-md cursor-pointer transition duration-200 hover:[text-shadow:0_0_8px_rgb(59,130,246),0_0_12px_rgb(59,130,246)]"> {orderCount} order(s) {">"}</div>:null}

            </div>

        </div>
    )

}