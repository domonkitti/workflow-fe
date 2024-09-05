type MyButtonProps = {
    title: string;
    disabled: boolean;
  }
  function MyButton({ title, disabled }: MyButtonProps) {
    return (
      <button disabled={disabled}>{title}</button>
    );
  }
  export default function MyApp() {
    return (
        <div className="flex space-x-2">
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Approve
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Reject
        </button>
        </div>

    );
  }  