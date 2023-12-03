import React, { useState } from 'react'
import SmallLoading from '../../components/shared/SmallLoading'
import SmallError from '../../components/shared/SmallError'
import useMyPaymentHistory from '../../Hooks/usePaymentHistory'
import PaymetTablerow from '../../components/Payment/PaymentTableRow'
import TableFoot from '../../components/Dashboard/ManagePackage/TableFoot'
import { Link } from 'react-router-dom'

export default function MyPaymentHistory() {
  const [page,setpage] = useState(1)                  
   const {MyPaymentHistory,error,isError,isLoading,isSuccess} = useMyPaymentHistory(1,8)        
   console.log(MyPaymentHistory,error)        
  return (
    <div className='paymentHisTory p-6'>
          <div className="text-center overflow-y-auto flex justify-center text-white">
        <h1 className="p-5 px-10 text-2xl text-center bg-blue-900 clipshape2 shadow-lg">
          My Payment History
        </h1>
        </div>
        <div className="overflow-x-auto custom-scrollbar table-pin-rows lg:h-[550px] mt-12  bg- md:h-[600px] h-[400px]">
        <table className="table  border-white ">
          <thead className="h-14  text-sm">
            <tr>
              <th>Package Name</th>
              <th>Transection Id</th>
              <th>Price</th>
              <th>Total pay</th>
            </tr>
          </thead>
          {isLoading ? (
            <div className="w-full flex justify-center">
              <SmallLoading />
            </div>
          ) : isError ? (
            <div className="w-full flex justify-center">
              <SmallError></SmallError>
            </div>
          ) : (
            <tbody>
              {MyPaymentHistory.data.PaymnetHistorys.length > 0 ? (
                MyPaymentHistory.data.PaymnetHistorys.map((ele) => {
                  return (
                    <PaymetTablerow key={ele._id}  data={ele}>
                     
                    </PaymetTablerow>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={4} className="py-10 text-center ">
                    <h3 className="my-3 text-xl ">Your Payment Histroy is Empty</h3>
                    <Link to="../../packages">
                      <button className="btn btn-primary capitalize btn-sm">
                        Visit Packages Page
                      </button>
                    </Link>
                  </td>
                </tr>
              )}
            </tbody>
          )}
          {MyPaymentHistory?.data?.totalData > 0 && (
            <TableFoot
              page={page}
              setpage={setpage}
              totalData={MyPaymentHistory?.data?.totalData}
            ></TableFoot>
          )}
        </table>
      </div>           
    </div>
  )
}
