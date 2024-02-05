const PaymentPage = ()=>{
    console.log("Payment");

    var options = {
        "key": "rzp_test_hAakLAx9OzIPeu", // Enter the Key ID generated from the Dashboard
        "amount": 5*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Naseem App", //your business name
        "description": "Test Transaction by Naseem",
        "image": "http://localhost:1234/logo-no-background.cae44b3e.png?1706288448912",
       // "order_id": "order_NTJjXSmIFHVsKi", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        // "callback_url": "http://localhost:1234",
        "handler": function (response){
            alert(response.razorpay_payment_id);
        },

        "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
            "name": "Naseem Ahmad", //your customer's name
            "email": "naseemahmadjmi96@gmail.com",
            "contact": "9654775378" //Provide the customer's phone number for better conversion rates 
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    // var rzp1 = new Razorpay(options);
    // let rzp1 = new window.Razorpay(options);
    // rzp1.open();

    var rzp1 = new Razorpay(options);
// document.getElementById('rzp-button1').onClick = function(e){
//     rzp1.open();
//     e.preventDefault();
// }
    // document.getElementById('rzp-button1').onclick = function(e){
    //     rzp1.open();
    //     e.preventDefault();
    // }

    return(
        <div>
            <button id="rzp-button1" onClick={()=> {
                rzp1.open();
            }}>Pay</button>


  
        </div>
    )
}

export default PaymentPage