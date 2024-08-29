import { useEffect } from 'react';
import { callApi } from '../utilities/functions';
import { useLocation } from 'react-router-dom';

const Loader = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const transId = searchParams.get('transId');

  useEffect(() => {
    const fetchPaymentStatus = async () => {
      try {
        const res = await callApi('post', '/api/check/payments/ipn', {
          trnx_id: transId,
        });
        if (res.data.myserver.status == 'Paid') {
          window.location.href = `/payment/success-page?trnx_id=${transId}`;
        } else if (res.data.myserver.status == 'pending') {
          const res = await callApi('post', '/api/re/call/ipn', {
            trnx_id: transId,
          });

          if (res.status == 200) {
            window.location.href = `/payment/success-page?trnx_id=${transId}`;
          } else {
            window.location.href = `/payment/faild-page?trnx_id=${transId}`;
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchPaymentStatus();
  }, [transId]);

  return (
    <div className="text-center items-center my-10">
      <div>
        <div className="flex justify-center text-blue-400 py-10">
          <i className="fa-solid fa-spinner fa-spin text-7xl drop-shadow-md pr-5" />
        </div>
        <h1 className="text-2xl drop-shadow-md">Processing</h1>
        <p className="text-lg py-5 text-pfont text-pColor">
          You will be redirected to payment gateway screen. <br /> It might take
          a few seconds.
        </p>
        <p className="text-lg text-pfont text-rColor font-bold">
          Please do not refresh the page or click the <br /> "Back" or "Close"
          button of your browser.
        </p>
      </div>
    </div>
  );
};

export default Loader;
