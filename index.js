const fullName = (user) => user.firstName + " " + user.LastName;
const user = { firstName: "SUDARSHAN RAO", LastName: "SUTRAYE" };
const element = <h1 className="greeting"> Hello,{fullName(user)}!</h1>;

ReactDOM.render(element, document.getElementById("root"));
