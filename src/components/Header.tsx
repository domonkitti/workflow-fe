const tableHeaderClass = "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider";

const TableHeader = () => {
  return (
    <thead className="bg-gray-50">
      <tr>
        <th scope="col" className={tableHeaderClass}>Image</th>
        <th scope="col" className={tableHeaderClass}>Title</th>
        <th scope="col" className={tableHeaderClass}>Amount</th>
        <th scope="col" className={tableHeaderClass}>Actions</th>
        <th scope="col" className={tableHeaderClass}>ปุ่มเดิม</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
