type GreetingProps = {
    name: string;
    age: number;
    format?: "Table" | "text" | "Default"
  };

const alice: GreetingProps= {
    name: "Alice",
    age: 18,
    format: "Table"
};


const greeting = ({ name, age, format = "Default" }: GreetingProps): void => {
    console.table( {"Name":name, "Age":age, "Format":format} )
    console.log(`greeting({ name: "${name}", age: ${age}, format: "${format}" })`);
}


greeting(alice)
greeting({ name: "Alice", age: 18, format: "Table" })
greeting({ name: "Bob", age: 18, format: "Default" })
greeting({ name: "Charlie", age: 18 })
greeting({ name: "Charlie", age: 18, format: "abc" }) 