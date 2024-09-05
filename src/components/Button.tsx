const MyButton = () => {
    // Action for approve button
    const handleApprove = () => {
      alert("Approved");
    };
  
    // Action for reject button
    const handleReject = () => {
      alert("Rejected");
    };
  
    return (
      <div className="flex space-x-2">
        {/* Approve button with click action */}
        <button 
          onClick={handleApprove}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Approve
        </button>
  
        {/* Reject button with click action */}
        <button 
          onClick={handleReject}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Reject
        </button>
      </div>
    );
  };
  
  export default MyButton;