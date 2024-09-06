type ActionButtonsProps = {
  title: string;
  Approve: () => void;
  Reject: () => void;
};
//ในapprove กับ reject {() => alert(`${product.title} approved!`)} เพื่อนำเข้าแค่ title อย่างเดีบวก็ได้
const ActionButtons = ({ Approve, Reject }: ActionButtonsProps) => {
  return (
    <div className="flex space-x-2">
      <button
        onClick={Approve}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Approve
      </button>
      <button
        onClick={Reject}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Reject
      </button>
    </div>
  );
};

export default ActionButtons;
