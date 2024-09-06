

type ChildProps = {
  products: Array<{
    id: number;
    title: string;
    amount: string;
    imageUrl: string;
  }>;
};


const RenderTable = ({ products }: ChildProps) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {products.map((product) => (
        <tr key={product.id}>
          <td className="px-6 py-4 whitespace-nowrap">
            <img src={product.imageUrl} alt={product.title} className="h-28 w-28 object-cover rounded" />
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.title}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.amount}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
            <div className="flex space-x-2">
              {/* ส่งฟังก์ชัน onApprove และ onReject ไปยังปุ่ม Approve และ Reject */}
                <button 
                onClick={()=>{alert(`${product.title} approved!`)}}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                 >Approve</button>
                 <button 
                onClick={()=>{alert(`${product.title} reject!`)}}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >Reject</button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default RenderTable